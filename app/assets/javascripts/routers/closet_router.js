Closet.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "userShow",
    "/addresses": "addressShow",
    "/addresses/:id/edit": "addressEdit"
  },
  
  initialize: function(options) {
    this.model = options.model;
  },
  
  userShow: function() {
    var userShowView = new Closet.Views.UserShow({
      model: this.model
    })
    
    Closet.Models.user.fetch();
    this._swapView(userShowView);
  },
  
  addressShow: function() {
    
  },
  
  addressEdit: function() {
    
  },
  
  _swapView: function(view) {
    if(this.currentView) {
      this.currentView.remove();
    }
    
    this.currentView = view;
    $('.container').append(view.render().$el)
  }
});
