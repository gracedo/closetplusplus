Closet.Collections.Items = Backbone.Collection.extend({
  model: Closet.Models.Item,
  url: "api/items",  
  
  comparator: function(item) {
    return item.orders.length;
  }
});

Closet.Collections.items = new Closet.Collections.Items();