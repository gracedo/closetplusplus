Closet.Views.OrderForm = Backbone.View.extend({
  template: JST['orders/form'],
  
  initialize: function(options) {
    //model is item
    this.userID = options.userID;
    this.orders = this.model.orders();
  },
  
  events: {
    "click button.add-order": "create"
  },
  
  render: function() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10) { dd='0'+dd };
    if(mm<10) { mm='0'+mm };
    
    var today = mm+'/'+dd+'/'+yyyy;
    
    var renderedContent = this.template({
      item: this.model,
      userID: this.userID,
      date: today
    });
    
    this.$el.html(renderedContent);
    return this;
  },
  
  create: function(event) {
    event.preventDefault();
    var that = this;
    var $formData = $(event.target.form).serializeJSON().order;
    var newOrder = new Closet.Models.Order($formData);
    
    this.orders.create(newOrder, {
      success: function() {
        $(".item-modal[data-target='.item-"+that.model.id+"']").modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        console.log("Order successfully created!");
        Backbone.history.navigate('', { trigger: true });
      },
      error: function() {
        console.log("Order was not processed");
        console.log(arguments[1].responseText)
        $(".alert[item-id='"+that.model.id+"']").html("Please pick a size!");
        $(".alert[item-id='"+that.model.id+"']").removeClass("hidden");
      }
    })
  }
});
