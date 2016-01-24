import Ember from 'ember';
import ESASession from "ember-simple-auth/services/session";

export default ESASession.extend({
  store: Ember.inject.service(),

  setCurrentUser: function() {
    if (this.get('isAuthenticated')) {
      let token = this.get('session.content.authenticated.access_token');
      this.get('store').queryRecord('user', { token: token }).then((user) => {
        this.set('currentUser', user);
      });
    }
  }.observes('isAuthenticated')
});
