Closet.Models.User = Backbone.Model.extend({
  url: "api/user",
  
  parse: function(jsonResponse){
    if (jsonResponse.orders){
      this.orders().set(jsonResponse.orders, { parse: true });
      delete jsonResponse.orders;
    }

    if (jsonResponse.preferences){
      this.preferences().set(jsonResponse.preferences, { parse: true });
      delete jsonResponse.preferences;
    }
    
    return jsonResponse;
  },
  
  orders: function(){
    if(!this._orders){
      this._orders = new Closet.Collections.Orders();
    }
    
    return this._orders;
  },
  
  preferences: function(){
    if(!this._preferences){
      this._preferences = new Closet.Models.Preferences();
    }
    
    return this._preferences;
  },
  
  measurements: function(){
    if(!this._measurements){
      this._measurements = new Closet.Models.Measurements();
    }
    
    return this._measurements;
  }
});

Closet.Models.user = new Closet.Models.User();