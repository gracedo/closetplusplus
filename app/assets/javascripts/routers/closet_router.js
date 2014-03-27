Closet.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "userShow",
    "items": "itemsIndex",
    "items/new": "itemNew",
    "preferences": "prefShow",
    "measurements": "measurementsShow",
    "style": "styleShow"
  },
  
  initialize: function(options) {
    this.model = options.model; //user
    this.orders = this.model.orders();
    this.items = Closet.Collections.items;
    this.preferences = this.model.preferences();
    this.measurements = this.model.measurements();
    this.style = this.model.style();
    // this.addresses = this.model.addresses();
  },
  
  userShow: function() {
    var userShowView = new Closet.Views.UserShow({
      model: this.model,
      orders: this.orders,
      items: this.items,
      measurements: this.measurements
    });
    
    this.model.fetch();
    this.items.fetch();
    this._swapView(userShowView);
  },
  
  itemsIndex: function() {
    var itemsIndexView = new Closet.Views.ItemsIndex({
      collection: this.items,
      user: this.model
    });
    
    this.items.fetch();
    this._swapView(itemsIndexView);
  },
  
  itemNew: function() {
    var itemFormView = new Closet.Views.ItemForm({
      model: new Closet.Models.Item(),
      collection: this.items
    })
    
    this._swapView(itemFormView);
  },
  
  prefShow: function() {
    // this.preferences = (this.preferences || new Closet.Models.Preferences())
    var prefShowView = new Closet.Views.PreferencesShow({
      user: this.model,
      model: this.preferences
    });

    this._swapView(prefShowView);
  },
  
  measurementsShow: function() {
    var measureShowView = new Closet.Views.MeasurementsShow({
      user: this.model
    });
    
    this._swapView(measureShowView);
  },
  
  styleShow: function() {
    var styleShowView = new Closet.Views.StyleShow({
      user: this.model
    });
    
    this._swapView(styleShowView);
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
    $('#root-content').html(view.render().$el)
  }
});