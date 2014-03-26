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
      action: action
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
      $(".alert").append("Please do not leave any fields blank.");
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
    this.generateSlider("weight", 100, 300, 5, "100 LBS");
  },
  
  generateSlider: function(type, min, max, step, defaultVal) {
    var that = this;
    var savedVal = this.model.get("height") || 60;

    this.$("#"+type+"-slider").slider({
      min: min,
      max: max,
      step: step,
      value: savedVal,
      slide: function( event, ui ) {
        var uiVal = ui.value;
        that.$("#"+type+"_amt").html(uiVal);
      },
      change: function( event, ui) {
        var uiVal = ui.value
        that.$("form input[name='measurements["+type+"]']").val(uiVal);
        that.$("#"+type+"_amt").html(uiVal);
      }
    });
    
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
      slide: function( event, ui ) {
        var uiVal = ui.value;
        that.$("#height_amt").html(toFeet(uiVal));
      },
      change: function( event, ui) {
        var uiVal = ui.value
        that.$("form input[name='measurements[height]']").val(uiVal);
        that.$("#height_amt").html(toFeet(uiVal));
      }
    });
    
    this.$("#height_amt").html(toFeet(60));
  }
});