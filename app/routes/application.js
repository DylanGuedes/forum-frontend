import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(transition) {
    this._super(transition);
    if (this.get ('session.session.isAuthenticated')) {
      return this._populateCurrentUser();
    }
  },

  actions: {
    sessionAuthenticatedSucceeded() {
      this._populateCurrentUser().then(() => this.transitionTo('sections') );
    }
  },

  _populateCurrentUser() {
    let authenticator = this.container.lookup('simple-auth-authenticator:jwt');
    const { sub } = authenticator.getTokenData(this.get('session.session.authenticated.token'));
    return this.store.find('user', sub)
    .then(user => this.get('currentUser').set('content', user) && user);
  }
});
