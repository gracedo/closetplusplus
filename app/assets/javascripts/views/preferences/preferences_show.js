Closet.Views.PreferencesShow = Backbone.View.extend({
  template: JST['preferences/show'],
  
  initialize: function(options) {
    //model = preferences
    this.user = options.user;
  },
  
  events: {
    "click button.create-prefs": "create",
    "click button.update-prefs": "update"
  },

  render: function() {
    if(this.model.attributes.length) {
      var action = "update";
    } else {
      var action = "create";
    }
    
    this.model = (this.model || new Closet.Models.Preferences());

    var renderedContent = this.template({
      user: this.user,
      preferences: this.model,
      action: action
    });
    
    this.$el.html(renderedContent);
    return this;
  },
  
  create: function(event) {
    event.preventDefault();
    var $formData = $(event.currentTarget.form).serializeJSON().preferences;
    var newPrefs = new Closet.Models.Preferences($formData);

    if(!newPrefs.isValid()) {
      console.log("preferences failed to be created");
      $(".alert").append("Please select your budget.");
      $(".alert").removeClass("hidden");
    } else {
      this.model.save($formData, {
        success: function() {
          console.log("preferences successfully created");
          Backbone.history.navigate("", { trigger: true })
        },
        error: function() {
          debugger
          var errors = arguments[1].responseText;
          console.log("preferences failed to be created");
          console.log(errors);
          $(".alert").removeClass("hidden");
        }
      })
    }
  },
  
  update: function(event) {
    event.preventDefault();
    var $formData = $(event.currentTarget.form).serializeJSON().preferences;
    
    if(!newPrefs.isValid()) {
      console.log("preferences failed to be created");
      $(".alert").append("Please select your budget.");
      $(".alert").removeClass("hidden");
    } else {
      this.model.save($formData, {
        patch: true,
        success: function() {
          console.log("preferences successfully updated");
          Backbone.history.navigate("", { trigger: true })
        },
        error: function() {
          var errors = arguments[1].responseText;
          console.log("preferences failed to update");
          console.log(errors);
          $(".alert").removeClass("hidden");
        }
      })
    }
  }
});
