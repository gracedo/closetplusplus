Closet.Views.ItemsIndex = Backbone.CompositeView.extend({
  template: JST['items/index'],
  
  initialize: function(options) {
    // this.items = options.collection;
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addItem);
    this.listenTo(this.collection, "remove change sync", this.render)
    
    this.collection.each(
      this.addItem.bind(this)
    )
  },
  
  render: function() {
    var renderedContent = this.template({
      items: this.collection
    })
    
    this.$el.html(renderedContent);
    this.renderSubviews();
    return this;
  },
  
  addItem: function(item) {
    var itemShowView = new Closet.Views.ItemShow({
      model: item,
      collection: this.collection,
      order: null
    })
    
    this.addSubview(".items-container", itemShowView);
    itemShowView.render();
  }
});
