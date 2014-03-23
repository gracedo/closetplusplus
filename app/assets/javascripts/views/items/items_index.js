Closet.Views.ItemsIndex = Backbone.View.extend({
  template: JST['items/index'],
  
  initialize: function(options) {
    this.items = options.collection;
    this.listenTo(this.items, "sync", this.render);
  },
  
  render: function() {
    var renderedContent = this.template({
      items: Closet.Collections.items
    })
    
    this.$el.html(renderedContent);
    return this;
  }
});
