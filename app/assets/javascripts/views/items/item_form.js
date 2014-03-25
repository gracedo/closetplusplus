Closet.Views.ItemForm = Backbone.View.extend({
  template: JST['items/form'],
  
  initialize: function(options) {
    this.items = options.collection;
    this.action = options.action;
    // this.listenTo(this.items, "sync", this.render);
  },
  
  events: {
    "click button.new-item": "create",
    "click button.edit-item": "edit"
  },
  
  render: function() {
    var renderedContent = this.template({
      item: this.model,
      action: this.action
    });
    
    this.$el.html(renderedContent);
    return this;
  },
  
  create: function(event) {
    event.preventDefault();
    var $formData = $(event.currentTarget.form).serializeJSON().item;
    var newItem = new Closet.Models.Item($formData);
    
    this.items.create(newItem, {
      success: function() {
        console.log("item successfully created");
        Backbone.history.navigate("#/items", { trigger: true })
      },
      error: function() {
        var errors = arguments[1].responseText;
        console.log("item failed to be created");
        $(".alert").html(errors);
        $(".alert").removeClass("hidden");
      }
    })
  },
  
  edit: function(event) {
    //Figure out why blank new items rendering?? when errors
    //Fix errors/alerts persisting from sign-in success...
    var that = this;
    event.preventDefault();
    var $formData = $(event.currentTarget.form).serializeJSON().item;
    
    this.model.save($formData, {
      patch: true,
      success: function() {
        console.log("item successfully updated");
      },
      error: function() {
        var errors = arguments[1].responseText;
        console.log("item failed to be updated");
        console.log(errors);

        $(".alert[data-id='"+that.model.id+"']").html(errors);
        $(".alert[data-id='"+that.model.id+"']").removeClass("hidden");
      }
    })
  }
});