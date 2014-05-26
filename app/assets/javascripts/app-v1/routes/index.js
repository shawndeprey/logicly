App.IndexRoute = App.BaseRoute.extend({
  /*model: function(){
    return Ember.RSVP.hash({
      brandInquiry: this.store.createRecord('inquiry', {contact_type: 'brand'}),
      agencyInquiry: this.store.createRecord('inquiry', {contact_type: 'agency'}),
      stats: $.getJSON('/'+namespace+'/companies/kite_stats.json'),
      networks: $.getJSON('/'+namespace+'/networks/featured.json'),
      recent_claims: $.getJSON('/'+namespace+'/companies/recently_claimed.json')
    });
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.get('controllers.application').setTitle('KITE: The emerging technology platforms marketplace', false);
  }*/
});