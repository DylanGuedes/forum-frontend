import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate() {
      var data = this.getProperties('username', 'password');

      console.log("data:");
      console.log(data);

      this.setProperties({
        username: null,
        password: null
      });
      Ember.$.post('http://localhost:4000/api/sessions', data).then(function(response) {
        Ember.$.ajaxSetup({
          headers: {
            'Authorization': 'Bearer ' + response.api_key.access_token
          }
        });
      });

    }, function(error) {
      if (error.status === 401) {
        alert("wrong user or password, try again");
      }
    }
  }

});
