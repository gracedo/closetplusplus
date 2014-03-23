Closet.Views.ItemShow = Backbone.View.extend({
  template: JST['items/show'],
  
  initialize: function(options) {
    this.items = options.collection;
    this.listenTo(this.items, "sync", this.render);
  },
  
  render: function() {
    var renderedContent = this.template({
      item: this.model
    })
    
    this.$el.html(renderedContent);
    return this;
  }
});
