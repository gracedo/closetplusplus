Closet.Collections.Addresses = Backbone.Collection.extend({
  model: Closet.Models.Address,
  url: "/addresses"
});

Closet.Collections.addresses = new Closet.Collections.Addresses();