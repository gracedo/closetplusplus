Closet.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],
  
  initialize: function(options) {
    // this.addresses = this.model.addresses();
    this.orders = options.orders;
    this.listenTo(this.orders, "sync", this.render);
    this.listenTo(this.orders, "add", this.addOrder);
    
    this.orders.each(
      this.addOrder.bind(this)
    )
  },
  
  render: function() {
    var renderedContent = this.template({
      user: this.model,
      // addresses: this.addresses
      orders: this.orders
    })
    
    this.$el.html(renderedContent);
    this.renderSubviews();
    return this;
  },
  
  addOrder: function(order) {
    var itemShowView = new Closet.Views.ItemShow({
      model: order
    });
    
    this.addSubview(".orders-container", itemShowView);
    itemShowView.render();
  }
});