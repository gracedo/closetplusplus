Closet.Views.StyleShow = Backbone.View.extend({
  template: JST['styles/show'],

  initialize: function(options) {
    this.user = options.user;
    this.listenTo(this.user.style(), "change", this.render);
    this.listenTo(this.user, "sync", this.render);
  },
  
  events: {
    "click button.save-style": "save"
  },
  
  render: function() {
    this.model = this.user.style();

    var renderedContent = this.template({
      user: this.user,
      style: this.model
    });
    
    this.$el.html(renderedContent);
    return this;
  },
  
  save: function(event) {
    event.preventDefault();
    var $formData = $(event.currentTarget.form).serializeJSON().style;
    // $formData.user_id = this.user.id;
    
    this.model.save($formData, {
      patch: true,
      success: function() {
        console.log("styles successfully created");
        window.scrollTo(0,0);
        $(".alert-success").prepend("Style preferences successfully saved!");
        $(".alert-success").removeClass("hidden");
      },
      error: function() {
        var errors = arguments[1].responseText;
        console.log("styles failed to be created");
        console.log(errors);
        $(".alert").html("Invalid Attributes!");
        $(".alert").removeClass("hidden");
        window.scrollTo(0,0);
      }
    })
  }
});
