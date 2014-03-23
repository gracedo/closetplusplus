Closet.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "userShow",
    "items": "itemsIndex",
    "items/:id/edit": "itemEdit",
    "items/:id": "itemShow"
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
    
    Closet.Collections.items.fetch();
    this._swapView(itemsIndexView);
  },
  
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