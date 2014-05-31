App.IndexController = App.FormController.extend({
  actions: {
    submit: function(event){
      var self = this;
      var betalist = this.get('model');
      self.clearErrors();
      betalist.validate().then(
        function(){
          self.get('model').save().then(
            function(survey){
              self.showModal(self.get('model.email') + ' is now on the Beta list. We are currently ' + 
                'building Logicly and plan to launch the Beta as soon as it\'s ready. We will contact ' + 
                'you when Logicly goes live!');
              self.resetModel();
            },
            function(response){
              self.parseErrorsFromResponse(response);
            }
          );
        },
        function(){
          if(betalist.errors.email.length > 0){
            self.setErrors(['An email is required to join the Logicly Beta.']);
          } else {
            self.setErrors(['An error has occurred. Please check your form data is correct.']);
          }
        }
      );
    }
  },
  resetModel: function(){
    this.set('model', this.store.createRecord('betalist'));
    this.set('disabled', false);
  }
});