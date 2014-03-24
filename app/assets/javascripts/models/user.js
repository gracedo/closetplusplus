Closet.Models.User = Backbone.Model.extend({
  urlRoot: "api/user",
  
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
  }
});

Closet.Models.user = new Closet.Models.User();