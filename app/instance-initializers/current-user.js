import Ember from 'ember';

export default {
  name: 'current-user',
  before: 'simple-auth',

  initialize: function(appInstance) {
    const service = Ember.ObjectProxy.create({ isServiceFactory: true });
    console.log("appinstance:");
    console.log(appInstance);
    appInstance.register('service:current-user', service, { instantiate: false, singleton: true });
    appInstance.inject('route', 'currentUser', 'service:current-user');
    appInstance.inject('controller', 'currentUser', 'service:current-user');
    appInstance.inject('component', 'currentUser', 'service:current-user');
  }
};
