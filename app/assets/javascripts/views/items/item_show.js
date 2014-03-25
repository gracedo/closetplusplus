Closet.Views.ItemShow = Backbone.View.extend({
  template: JST['items/show'],
  
  initialize: function(options) {
    //model is the item
    this.user = options.user;
    this.items = options.collection;
    this.order = options.order;

    // this.listenTo(this.items, "sync", this.render);
  },
  
  events: {
    "click a.edit-item-link": "addEditForm",
    "click button.purchase-item": "addOrderForm"
  },
  
  render: function() {
    var renderedContent = this.template({
      item: this.model,
      order: this.order
    });
    
    this.$el.html(renderedContent);
    return this;
  },
  
  addEditForm: function(event) {
    event.preventDefault();
    console.log("Edit")
    // $(event.target.parentElement).addClass("hidden");
    var itemFormView = new Closet.Views.ItemForm({
      model: this.model,
      collection: this.items,
      action: "edit"
    });
    
    $(".edit-item-form[data-id='"+this.model.id+"']").html(itemFormView.render().$el);
  },
  
  addOrderForm: function(event) {
    event.preventDefault();
    
    var orderFormView = new Closet.Views.OrderForm({
      userID: this.user.id,
      model: this.model
    });
    
    $(".new-order-form[data-id='"+this.model.id+"']").html(orderFormView.render().$el);
  }
});
