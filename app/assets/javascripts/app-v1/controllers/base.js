App.BaseController = Ember.ObjectController.extend({
  needs: ['application'],
  reset: function(){},
  scroll_to: function(element){
    $(element).scrollToElement();
  }
});