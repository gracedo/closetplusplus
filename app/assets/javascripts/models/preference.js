Closet.Models.Preferences = Backbone.Model.extend({
  url: "api/user/preferences",
  
  validate: function(attrs, options) {
    if(!attrs || !attrs.user_id || !attrs.subscription || !attrs.pieces_per_ship) {
      return "Invalid attributes!";
    }
  }
});
