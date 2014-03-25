Closet.Views.OrderForm = Backbone.View.extend({
  template: JST['orders/form'],
  
  initialize: function(options) {
    //model is item
    this.userID = options.userID;
  },
  
  render: function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10) { dd='0'+dd };
    if(mm<10) { mm='0'+mm };
    
    var today = dd+'/'+mm+'/'+yyyy;
    
    var renderedContent = this.template({
      item: this.model,
      userID: this.userID,
      date: today
    });
    
    this.$el.html(renderedContent);
    return this;
  }
});
