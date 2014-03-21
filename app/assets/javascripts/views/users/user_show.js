Closet.Views.UserShow = Backbone.View.extend({
  template: JST['users/show'],
  
  initialize: function() {
    // this.addresses = this.model.addresses();
  },
  
  render: function() {
    var renderedContent = this.template({
      user: this.model,
      // addresses: this.addresses
    })
    
    this.$el.html(renderedContent);
    return this;
  }
});