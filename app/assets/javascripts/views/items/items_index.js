Closet.Views.ItemsIndex = Backbone.CompositeView.extend({
  template: JST['items/index'],
  
  initialize: function(options) {
    this.items = options.collection;
    this.listenTo(this.items, "sync", this.render);
    this.listenTo(this.items, "add", this.addItem)
    
    this.items.each(
      this.addItem.bind(this)
    )
  },
  
  render: function() {
    var renderedContent = this.template({
      items: this.items
    })
    
    this.$el.html(renderedContent);
    this.renderSubviews();
    return this;
  },
  
  addItem: function(item) {
    var itemShowView = new Closet.Views.ItemShow({
      model: item
    })
    
    this.addSubview(".items-container", itemShowView);
    itemShowView.render();
  }
});
