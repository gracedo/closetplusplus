Closet.Models.User = Backbone.Model.extend({
  urlRoot: "api/user",
  
  // parse: function(jsonResponse){
  //   if (jsonResponse.addresses){
  //     this.addresses().set(jsonResponse.addresses, { parse: true });
  //     delete jsonResponse.addresses;
  //   }
  //   
  //   return jsonResponse;
  // },
  // 
  // addresses: function(){
  //   if(!this._addresses){
  //     this._addresses = new Closet.Collections.Addresses();
  //   }
  //   
  //   return this._addresses;
  // }
});

Closet.Models.user = new Closet.Models.User();