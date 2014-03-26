Closet.Views.MeasurementsShow = Backbone.View.extend({
  template: JST['measurements/show'],
  
  initialize: function(options) {
    this.user = options.user;
  },
  
  events: {
    "click button.create-measures": "create",
    "click button.update-measures": "update"
  },
  
  render: function() {
    if(this.model.attributes.length) {
      var action = "update";
    } else {
      var action = "create";
    }
    
    this.model = (this.model || new Closet.Models.Measurements());

    var renderedContent = this.template({
      user: this.user,
      measurements: this.model,
      action: action,
      pos: "left",
      WEIGHT: ["weight"],
      UPPER_BODY: ["chest", "belly", "neck", "shoulder", "torso", "arm", "sleeve"],
      LOWER_BODY: ["waist", "inseam", "thigh", "hip"],
      SHOE_SIZE: ["shoe_size"]
    });
    
    this.$el.html(renderedContent);
    this.initSliders();
    return this;
  },
  
  create: function(event) {
    event.preventDefault();
    var $formData = $(event.currentTarget.form).serializeJSON().measurements;
    var newMeasures = new Closet.Models.Preferences($formData);
    debugger
    if(!newMeasures.isValid()) {
      console.log("measurements failed to be created");
      $(".alert").html("Invalid Attributes!");
      $(".alert").removeClass("hidden");
    } else {
      this.model.save($formData, {
        success: function() {
          console.log("measurements successfully created");
          Backbone.history.navigate("", { trigger: true })
        },
        error: function() {
          var errors = arguments[1].responseText;
          console.log("measurements failed to be created");
          console.log(errors);
          $(".alert").removeClass("hidden");
        }
      })
    }
  },
  
  update: function(event) {
    event.preventDefault();
    var $formData = $(event.currentTarget.form).serializeJSON().measurements;
    
    if(!newMeasures.isValid()) {
      console.log("measurements failed to be created");
      $(".alert").append("Please select your budget.");
      $(".alert").removeClass("hidden");
    } else {
      this.model.save($formData, {
        patch: true,
        success: function() {
          console.log("measurements successfully updated");
          Backbone.history.navigate("", { trigger: true })
        },
        error: function() {
          var errors = arguments[1].responseText;
          console.log("measurements failed to update");
          console.log(errors);
          $(".alert").removeClass("hidden");
        }
      })
    }
  },
  
  initSliders: function() {
    this.heightSlider();
    this.generateSlider("weight", 100, 300, 5, " lbs", "100 lbs");
    // Upper body measurements
    this.generateSlider("chest", 32, 55, 1, "''", "32''");
    this.generateSlider("belly", 28, 55, 1, "''", "28''");
    this.generateSlider("neck", 14, 21, 0.5, "''", "14''");
    this.generateSlider("shoulder", 15, 30, 1, "''", "15''");
    this.generateSlider("torso", 24, 35, 1, "''", "24''");
    this.generateSlider("arm", 10, 20, 1, "''", "10''");
    this.generateSlider("sleeve", 30, 40, 1, "''", "30''");
    // Lower body measurements
    this.generateSlider("waist", 32, 55, 1, "''", "32''");
    this.generateSlider("inseam", 32, 55, 1, "''", "32''");
    this.generateSlider("thigh", 32, 55, 1, "''", "32''");
    this.generateSlider("hip", 32, 55, 1, "''", "32''");
    this.generateSlider("shoe_size", 5, 14, 0.5, "", "10");
  },
  
  generateSlider: function(type, min, max, step, suffix, defaultVal) {
    var that = this;
    var savedVal = this.model.get("+type+") || min;

    this.$("#"+type+"-slider").slider({
      min: min,
      max: max,
      step: step,
      value: savedVal,
      slide: function(event, ui ) {
        var uiVal = ui.value;
        that.$("#"+type+"_amt").html(uiVal+suffix);
      },
      change: function(event, ui) {
        var uiVal = ui.value;
        that.$("form input[name='measurements["+type+"]']").val(uiVal);
        that.$("#"+type+"_amt").html(uiVal+suffix);
      }
    });
    
    this.$("#"+type+"_min").prepend(min);
    this.$("#"+type+"_max").prepend(max);
    this.$("#"+type+"_amt").html(defaultVal);
  },
  
  heightSlider: function() {
    var that = this;
    
    function toFeet(n) {
        return Math.floor(n / 12) + "'" + (n % 12) + '"';
    };

    var savedHeight = this.model.get("height") || 60;

    this.$("#height-slider").slider({
      min: 60,
      max: 84,
      step: 1,
      value: savedHeight,
      slide: function(event, ui ) {
        var uiVal = ui.value;
        that.$("#height_amt").html(toFeet(uiVal));
      },
      change: function(event, ui) {
        var uiVal = ui.value
        that.$("form input[name='measurements[height]']").val(uiVal);
        that.$("#height_amt").html(toFeet(uiVal));
      }
    });
    
    this.$("#height_amt").html(toFeet(60));
  }
});