Closet.Collections.Items = Backbone.Collection.extend({
  model: Closet.Models.Item,
  url: "api/items"
});

Closet.Collections.items = new Closet.Collections.Items();