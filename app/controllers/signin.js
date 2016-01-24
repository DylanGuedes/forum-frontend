import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password');
      let session = this.get('session');
      let authenticator = this.container.lookup('simple-auth-authenticator:jwt');

      console.log("authenticator:");
      console.log(authenticator);

      session.authenticate('simple-auth-authenticator:jwt', credentials).then(() => {

      }, (error) => {
        this.set('errorMessage', error.error);
      });

      this.setProperties({
        identification: null,
        password: null
      });
    }
  }

/*      Ember.$.post('http://localhost:4000/api/sessions', data).then(function(response) {
        console.log("RESPONSE:");
        console.log(response);
        Ember.$.ajaxSetup({
          headers: {
            'Authorization': 'Bearer '+ response.access_token
          }
        });

        _this.store.find('user', response.id).then(function(user) {
          _this.setProperties({
            token: response.access_token,
            currentUser: user.getProperties('username', 'name', 'mail', 'id')
          });
        });
      });
    }, function(error) {
      if (error.status === 401) {
        alert("wrong user or password, try again");
      }
    }
  }
*/
});
