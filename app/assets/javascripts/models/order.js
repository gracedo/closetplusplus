Closet.Models.Order = Backbone.Model.extend({
  parse: function(jsonResponse){
    if (jsonResponse.buyer){
      this.orders().set(jsonResponse.buyer, { parse: true });
      delete jsonResponse.buyer;
    }
    
    return jsonResponse;
  },
  
  buyer: function(){
    if(!this._buyer){
      this._buyer = new Closet.Model.User();
    }
    
    return this._buyer;
  },

  parse: function(jsonResponse){
    if (jsonResponse.item){
      this.orders().set(jsonResponse.item, { parse: true });
      delete jsonResponse.item;
    }
    
    return jsonResponse;
  },
  
  item: function(){
    if(!this._item){
      this._item = new Closet.Model.Item();
    }
    
    return this._item;
  }
});
