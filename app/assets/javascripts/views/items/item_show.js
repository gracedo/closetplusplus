Closet.Views.ItemShow = Backbone.View.extend({
  template: JST['items/show'],
  
  initialize: function(options) {
    this.items = options.collection;
    this.order = options.order
    this.listenTo(this.items, "sync", this.render);
  },
  
  events: {
    "click a.edit-item-link": "addEditForm"
  },
  
  render: function() {
    var renderedContent = this.template({
      item: this.model,
      order: null
    });
    
    this.$el.html(renderedContent);
    return this;
  },
  
  addEditForm: function(event) {
    event.preventDefault();
    // $(event.target.parentElement).addClass("hidden");
    var itemFormView = new Closet.Views.ItemForm({
      model: this.model,
      collection: this.items,
      action: "edit"
    });
    
    $('.edit-item-form#'+this.model.id).html(itemFormView.render().$el);
  }
});
