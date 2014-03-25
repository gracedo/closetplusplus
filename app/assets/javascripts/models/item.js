Closet.Models.Item = Backbone.Model.extend({
  initialize: function() {
    var error = this.validate(this.attributes);
    if (error) {
      this.trigger('error', this, error);
    }
  },
  
  parse: function(jsonResponse){
    if (jsonResponse.orders){
      this.orders().set(jsonResponse.orders, { parse: true });
      delete jsonResponse.orders;
    }
    
    return jsonResponse;
  },
  
  orders: function(){
    if(!this._orders){
      this._orders = new Closet.Collections.Orders();
    }
    
    return this._orders;
  },
  
  validate: function(attrs, options) {
    if(!attrs || !attrs.name || !attrs.brand || !attrs.item_type || !attrs.details || !attrs.price) {
      return "Invalid attributes!";
    }
  }
});