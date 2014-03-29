Closet.Views.ItemsIndex = Backbone.CompositeView.extend({
  template: JST['items/index'],
  
  initialize: function(options) {
    // this.items = options.collection;
    this.user = options.user;
    // this.listenTo(this.collection, "all", this.render);
    this.listenTo(this.collection, "add", this.addItem);
    this.listenTo(this.collection, "remove sync change", this.render);
    
    // this.collection.sort();

    this.collection.each(
      this.addItem.bind(this)
    )
  },
  
  render: function() {
    // this.collection.sort();
    
    var renderedContent = this.template({
      items: this.collection
    });

    this.$el.html(renderedContent);
    this.renderSubviews();
    return this;
  },
  
  addItem: function(item) {
    var itemShowView = new Closet.Views.ItemShow({
      user: this.user,
      model: item,
      collection: this.collection,
      order: this.setOrder(item)
    })

    this.addSubview("#items", itemShowView);
    itemShowView.render();
  },
  
  setOrder: function(currItem) {
    var order1 = null;
    this.user.orders().each(function(order) {
      if(order.get("item_id") === currItem.id) {
        order1 = order;
      }
    })
    
    return order1;
  }
});
