Closet.Views.PreferencesShow = Backbone.View.extend({
  template: JST['preferences/show'],
  
  initialize: function(options) {
    //model = preferences
    this.user = options.user
  },
  
  events: {
    "click button.create-prefs": "create",
    "click button.update-prefs": "update"
  },

  render: function() {
    if(this.model) {
      var action = "update";
    } else {
      var action = "create"
    }
    
    this.model = (this.model || new Closet.Models.Preferences());

    var renderedContent = this.template({
      user: this.user,
      preferences: this.model,
      action: action
    });
    
    this.$el.html(renderedContent);
    return this;
  }
});
