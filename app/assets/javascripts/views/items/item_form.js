Closet.Views.ItemForm = Backbone.View.extend({
  template: JST['items/form'],
  
  initialize: function(options) {
    this.items = options.collection;
    this.action = options.action;
    // this.listenTo(this.items, "sync", this.render);
  },
  
  events: {
    "click button.new-item": "create",
    "click button.edit-item": "edit",
    "click button.cancel-edit-item": "removeForm"
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

    if(!newItem.isValid()) {
      console.log("item failed to be created");
      // console.log(newItem.validationError);
      // $(".alert").html(newItem.validationError);
      $(".alert").removeClass("hidden");
      this.renderValStates($(".alert"));
    } else {
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
    }
  },
  
  edit: function(event) {
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

        this.renderValStates($(".alert[data-id='"+that.model.id+"']"));
        $(".alert[data-id='"+that.model.id+"']").html(errors);
        $(".alert[data-id='"+that.model.id+"']").removeClass("hidden");
      }
    })
  },
  
  removeForm: function(event) {
    event.preventDefault();
    $(".item-form[data-id='"+this.model.id+"']").empty();
  },
  
  renderValStates: function($el) {
    if($("#name").val().length === 0) {
      $("#name").parent().addClass("has-error has-feedback");
      $("#name").parent().removeClass("has-success has-feedback");
      $el.append("Name can't be blank. ");
    } else {
      $("#name").parent().addClass("has-success has-feedback");
      $("#name").parent().removeClass("has-error has-feedback");
    }

    if($("#brand").val().length === 0) {
      $("#brand").parent().addClass("has-error has-feedback");
      $("#brand").parent().removeClass("has-success has-feedback");
      $el.append("Brand can't be blank. ");
    } else {
      $("#brand").parent().addClass("has-success has-feedback");
      $("#brand").parent().removeClass("has-error has-feedback");
    }

    // if(!$("#item_type").val()) {
    //   $("#item_type").parent().addClass("has-error has-feedback");
    //   $("#item_type").parent().removeClass("has-success has-feedback");
    //   $el.append("An item type has to be chosen. ");
    // } else {
    //   $("#item_type").parent().addClass("has-success has-feedback");
    //   $("#item_type").parent().removeClass("has-error has-feedback");
    // }
    
    if($("#details").val().length === 0) {
      $("#details").parent().addClass("has-error has-feedback");
      $("#details").parent().removeClass("has-success has-feedback");
      $el.append("Details can't be blank. ");
    } else {
      $("#details").parent().addClass("has-success has-feedback");
      $("#details").parent().removeClass("has-error has-feedback");
    }
    
    if($("#price").val().length === 0) {
      $("#price").parent().addClass("has-error has-feedback");
      $("#price").parent().removeClass("has-success has-feedback");
      $el.append("Price can't be blank. ");
    } else {
      $("#price").parent().addClass("has-success has-feedback");
      $("#price").parent().removeClass("has-error has-feedback");
    }
  }
});
