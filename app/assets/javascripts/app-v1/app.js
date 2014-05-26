var namespace = 'api/v1';
App = Ember.Application.create();

App.Router.map(function(){
  // this.route("file-not-found", { path: "*path"});
});

Ember.Route.reopen({
  activate: function() {
    this._super();

    var cssClass = this.toCssClass();
    
    if (cssClass != 'application') {
      Ember.$('body').addClass(cssClass);
    }
  },

  deactivate: function() {
    Ember.$('body').removeClass(this.toCssClass());
  },

  toCssClass: function() {
    return this.routeName.replace(/\./g, '-').dasherize();
  },

  afterModel: function() {
    // Always scroll to top of window after route transition
    window.scrollTo(0, 0);
  }
});

App.Router.reopen({ 
  location: 'history',
  
  didTransition: function(params) {
    this._super(params);
  }
});

// Sessions
/*Ember.Application.initializer({
  name: 'session',
  initialize: function(container) {
    // Stop app loading until we have loaded our session
    App.deferReadiness();
    // Return a promise of our session object
    return $.getJSON('/'+namespace+'/session.json').then(
      function(session){
        // If we found a session, set a global object to it.
        if(session != undefined && session != null){
          var controller = container.lookup('controller:session');
          controller.store.pushPayload('user', {user:session});
          controller.set('user', controller.store.find('user', session.id));
        }
        // Resume App Loading
        App.advanceReadiness();
      }, function(fail){
        // Fail silently if there is not a session
        App.advanceReadiness();
      }
    );
  }
});*/

// Google Analytics Support
/*App.Router.reopen({
  notifyGoogleAnalytics: function() {
    // Discern if Google Analytics is set up.
    if(window._gaq !== undefined){
      // Tell Google Analytics to track this page transition.
      var url = this.get('url');
      Ember.run.next(function(){
        window._gaq.push(['_trackPageview', url]);
      });
    }
  }.on('didTransition')
});*/