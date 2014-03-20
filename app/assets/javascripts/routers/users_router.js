Closet.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "userShow",
    "/addresses": "addressShow",
    "/addresses/:id/edit": "addressEdit"
  }
});
