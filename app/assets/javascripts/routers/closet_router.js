Closet.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "userShow",
    "items": "itemsIndex",
    "items/new": "itemsNew"
  },
  
  initialize: function(options) {
    this.model = options.model;
    this.items = Closet.Collections.items
    // this.addresses = this.model.addresses();
  },
  
  userShow: function() {
    var userShowView = new Closet.Views.UserShow({
      model: this.model
    });
    
    Closet.Models.user.fetch();
    this._swapView(userShowView);
  },
  
  itemsIndex: function() {
    var itemsIndexView = new Closet.Views.ItemsIndex({
      collection: this.items
    });
    
    // Closet.Collections.items.fetch();
    this.items.fetch();
    this._swapView(itemsIndexView);
  },
  
  itemsNew: function() {
    var itemFormView = new Closet.Views.ItemForm({
      model: new Closet.Models.Item()
    })
    
    this._swapView(itemFormView);
  },
//   
//   itemEdit: function(id) {
//     var itemFormView = new Closet.Views.ItemForm({
//       model: this.items.get(id)
//     })
//     
//     this.items.fetch();
//     this._swapView(itemFormView);
//   },
  
  // addressesForm: function() {
//     var addressesFormView = new Closet.Views.AddressesForm({
//       model: this.model
//     });
//     
//     this._swapView(addressesFormView)
//   },
  
  _swapView: function(view) {
    if(this.currentView) {
      this.currentView.remove();
    }
    
    this.currentView = view;
    $('.container').html(view.render().$el)
  }
});