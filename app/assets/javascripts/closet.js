window.Closet = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // Closet.Collections.items.fetch({success: function(){
      var $rootEl = $('.container');
      Closet.Models.user.fetch({
        success: function() {
          new Closet.Routers.Router({
            model: Closet.Models.user,
            $rootEl: $rootEl
          });
          //fetch Closet.Collections.items?
          Backbone.history.start();
        }
      });
    // }});
  }
};




Backbone.CompositeView = Backbone.View.extend({
  subviews: function() {
    if(!this._subviews) {
      this._subviews = {};
    }
    
    return this._subviews;
  },
  
  addSubview: function(selector, subview) {
    var selectorSubviews = this.subviews()[selector] || (this.subviews()[selector] = []);
    
    selectorSubviews.push(subview);
    
    var $selectorEl = this.$(selector);
    $selectorEl.append(subview.$el);
  },
  
  remove: function() {
    Backbone.View.prototype.remove.call(this);
    
    _(this.subviews()).each(function(selectorSubviews, selector) {
      _(selectorSubviews).each(function(subview) {
        subview.remove();
      })
    })
  },
  
  removeSubview: function(selector, subview) {
    var selectorSubviews = this.subviews()[selector] || (this.subviews()[selector] = []);
    
    var subviewIndex = selectorSubviews.indexOf(subview);
    selectorSubviews.splice(subviewIndex, 1);
    subview.remove();
  },
  
  renderSubviews: function() {
    var view = this;

    _(this.subviews()).each(function(selectorSubviews, selector) {
      var $selectorEl = view.$(selector);
      $selectorEl.empty();
      
     _(selectorSubviews).each(function(subview) {
        $selectorEl.append(subview.render().$el);
        subview.delegateEvents();
      })
    })
  }
});