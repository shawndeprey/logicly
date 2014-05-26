App.ApplicationController = App.BaseController.extend({
  //needs: ['session'],
  setTitle: function(title, use_suffix) {
    if (typeof use_suffix == 'undefined') {
      use_suffix = true;
    }

    if (typeof title != 'undefined') {
      document.title = title;

      if (use_suffix) {
        document.title += ' - Logicly';
      }
    } else {
      document.title = 'Logicly';
    }
  }
});