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

    if (jsonResponse.measurements){
      this.measurements().set(jsonResponse.measurements, { parse: true });
      delete jsonResponse.measurements;
    }

    if (jsonResponse.style){
      this.style().set(jsonResponse.style, { parse: true });
      delete jsonResponse.style;
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
  },
  
  style: function(){
    if(!this._style){
      this._style = new Closet.Models.Style();
    }
    
    return this._style;
  }
});

Closet.Models.user = new Closet.Models.User();