App.IndexRoute = App.BaseRoute.extend({
  model: function(){
    return this.store.createRecord('betalist');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.get('controllers.application').setTitle('Innovative Discussion', false);
  }
});