Closet.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "userShow",
    "addresses": "addressesForm"
  },
  
  initialize: function(options) {
    this.model = options.model;
    this.addresses = this.model.addresses();
  },
  
  userShow: function() {
    var userShowView = new Closet.Views.UserShow({
      model: this.model
    })
    
    Closet.Models.user.fetch();
    this._swapView(userShowView);
  },
  
  addressesForm: function() {
    var addressesFormView = new Closet.Views.AddressesForm({
      model: this.model
    });
    
    this._swapView(addressesFormView)
  },
  
  _swapView: function(view) {
    if(this.currentView) {
      this.currentView.remove();
    }
    
    this.currentView = view;
    $('.container').html(view.render().$el)
  }
});
