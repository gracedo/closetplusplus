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
    return this;
  },
  
  create: function(event) {
    event.preventDefault();
    var $formData = $(event.currentTarget.form).serializeJSON().measurements;
    var newMeasures = new Closet.Models.Preferences($formData);

    if(!newMeasures.isValid()) {
      console.log("measurements failed to be created");
      $(".alert").append("Please select your budget.");
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
  }
});