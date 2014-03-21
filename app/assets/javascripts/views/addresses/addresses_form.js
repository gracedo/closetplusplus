Closet.Views.AddressesForm = Backbone.View.extend({
  template: JST['addresses/form'],
  
  initialize: function() {
    this.addresses = this.model.addresses();
    this.listenTo(this.model, "all", this.render)
  },
  
  events: {
    "click button.update-address": "updateAddress"
  },
  
  render: function() {
    var renderedContent = this.template({
      addresses: this.addresses
    })
    
    this.$el.html(renderedContent);
    return this;
  },
  
  updateAddress: function(event) {
    event.preventDefault();
    Closet.Collections.addresses.fetch();
    
    var formData = $(event.target.form).serializeJSON();
    debugger
    // var currAddresses = Closet.Collections.addresses.find(formData.addresses.get("id)"))
    
    this.model.save(formData, {
      patch: true,
      success: function() {
        console.log("address updated and saved")
      },
      error: function(a,b,c) {
        console.log("address failed to update")
        console.log(a);
        console.log(b);
        console.log(c);
      }
    })
  }
});
