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
    this.$el.find(".style-form").delay(1).animate({ opacity: 1 }, 700);
    return this;
  },
  
  save: function(event) {
    event.preventDefault();
    var $formData = $(event.currentTarget.form).serializeJSON().style;
    
    this.model.save($formData, {
      patch: true,
      success: function() {
        console.log("styles successfully created");
        window.scrollTo(0,0);
        $(".alert-success").html("Style preferences successfully saved!");
        $(".alert-success").removeClass("hidden");
      },
      error: function() {
        var errors = arguments[1].responseText;
        console.log("styles failed to be created");
        console.log(errors);
        $(".alert").html("Invalid Attributes!");
        $(".alert").removeClass("hidden");
      }
    });
    
    $('body, html').animate({scrollTop: 0}, 500);
  }
});
