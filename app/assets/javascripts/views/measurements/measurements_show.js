Closet.Views.MeasurementsShow = Backbone.View.extend({
  template: JST['measurements/show'],
  
  initialize: function(options) {
    this.user = options.user;
    this.listenTo(this.user.measurements(), "change", this.render);
    this.listenTo(this.user, "sync", this.render);
  },
  
  events: {
    "click button.save-measures": "save",
    "click a.ui-slider-handle": "autosave"
  },
  
  render: function() {
    this.model = this.user.measurements();

    var renderedContent = this.template({
      user: this.user,
      measurements: this.model,
      pos: "left",
      WEIGHT: ["weight"],
      UPPER_BODY: ["chest", "belly", "neck", "shoulder", "torso", "arm", "sleeve"],
      LOWER_BODY: ["waist", "inseam", "thigh", "hip"],
      SHOE_SIZE: ["shoe_size"]
    });
    
    this.$el.html(renderedContent);
    this.initSliders();
    
    // this.$el.find(".measurements-form").delay(1).animate({ opacity: 1 }, 700);
    return this;
  },
  
  save: function(event) {
    event.preventDefault();

    var $formData = $(event.currentTarget.form).serializeJSON().measurements;
    
    this.model.save($formData, {
      patch: true,
      success: function() {
        console.log("measurements successfully created");
        $(".alert-success").prepend("Measurements saved!");
        $(".alert-success").removeClass("hidden");
      },
      error: function() {
        var errors = arguments[1].responseText;
        console.log("measurements failed to be created");
        console.log(errors);
        $(".alert-danger").html("Invalid Attributes!");
        $(".alert-danger").removeClass("hidden");
      }
    });
  
    $('body, html').animate({scrollTop: 0}, 500);
  },
  
  autosave: function(e) {
    var $formData = $(e.currentTarget.forms).serializeJSON().measurements;
    
    var successCallback = function(e) {
      console.log("Measurements successfully saved");

      var pos = $(e.target).position();
      
      $('.autosave').css({
        top: pos.top
      });

      $(".autosave").removeClass("hidden");

      window.setTimeout(function() { $(".autosave").addClass('hidden'); }, 6000);
    }
    
    this.model.save($formData, {
      patch: true,
      success: function() {
        console.log("Measurements successfully saved");

        $('.autosave').css({
          left: $(window).width()/2 - $('.autosave').width()/2,
          top: $(document).scrollTop() + 10
        });

        $(".autosave").removeClass("hidden");

        window.setTimeout(function() { $(".autosave").addClass('hidden'); }, 2000);
      },
      error: function() {
        var errors = arguments[1].responseText;
        console.log("measurements failed to be saved");
        console.log(errors);
      }
    });
  },
  
  initSliders: function() {
    this.heightSlider();
    this.generateSlider("weight", 100, 300, 5, " lbs");
    // Upper body measurements
    this.generateSlider("chest", 32, 55, 1, "''");
    this.generateSlider("belly", 28, 55, 1, "''");
    this.generateSlider("neck", 14, 21, 0.5, "''");
    this.generateSlider("shoulder", 15, 30, 1, "''");
    this.generateSlider("torso", 24, 35, 1, "''");
    this.generateSlider("arm", 10, 20, 1, "''");
    this.generateSlider("sleeve", 30, 40, 1, "''");
    // Lower body measurements
    this.generateSlider("waist", 32, 55, 1, "''");
    this.generateSlider("inseam", 32, 55, 1, "''");
    this.generateSlider("thigh", 32, 55, 1, "''");
    this.generateSlider("hip", 32, 55, 1, "''");
    //Shoe size
    this.generateSlider("shoe_size", 5, 14, 0.5, "", "10");
  },
  
  generateSlider: function(type, min, max, step, suffix) {
    var that = this;
    var savedVal = this.model.get(type) || min;

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
        that.autosave(event);
      }
    });
    
    this.$("#"+type+"_min").prepend(min);
    this.$("#"+type+"_max").prepend(max);
    this.$("#"+type+"_amt").html(savedVal+suffix);
    this.$("form input[name='measurements["+type+"]']").val(savedVal);
  },
  
  heightSlider: function() {
    function toFeet(n) {
        return Math.floor(n / 12) + "'" + (n % 12) + '"';
    };

    var that = this;
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
        that.autosave(event);
      }
    });
    
    this.$("#height_amt").html(toFeet(savedHeight));
    this.$("form input[name='measurements[height]']").val(savedHeight);
  }
});