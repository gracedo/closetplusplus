Closet.Views.ItemsIndex = Backbone.CompositeView.extend({
  template: JST['items/index'],
  
  initialize: function(options) {
    window.bad_view = this;
    // this.items = options.collection;
    this.user = options.user;
    // this.listenTo(this.collection, "all", this.render);
    this.listenTo(this.collection, "add", this.addItem);
    this.listenTo(this.collection, "add remove change sync", this.render);

    // 
    this.collection.each(
      this.addItem.bind(this)
    )
  },
  
  render: function() {
    // this.collection.each(
//       this.addItem.bind(this)
//     );
//     
    var renderedContent = this.template({
      items: this.collection
    });
    
    this.$el.html(renderedContent);
    this.renderSubviews();
    return this;
  },
  
  addItem: function(item) {
    console.log(this.subviews())
    var itemShowView = new Closet.Views.ItemShow({
      user: this.user,
      model: item,
      collection: this.collection,
      order: null
    })

    this.addSubview("#items", itemShowView);
    itemShowView.render();
  }
});
