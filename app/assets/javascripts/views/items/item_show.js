Closet.Views.ItemShow = Backbone.View.extend({
  template: JST['items/show'],
  
  initialize: function(options) {
    //model is the item
    this.user = options.user;
    this.items = Closet.Collections.items;
    this.order = options.order;

    this.listenTo(this.user, "sync", this.render);
    this.listenTo(this.items, "sync change add", this.render);
  },
  
  events: {
    "click a.edit-item-link": "addEditForm",
    "click button.purchase-item": "addOrderForm"
  },
  
  render: function() {
    if(this.model=(this.model || this.items.get(this.order.get("item_id")))) {
      var renderedContent = this.template({
        item: this.model,
        order: this.order
      });
    
      this.$el.html(renderedContent);
    }

    $(".item-block").delay(1).animate({ opacity: 1 }, 700);
    return this;
  },
  
  addEditForm: function(event) {
    event.preventDefault();

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
