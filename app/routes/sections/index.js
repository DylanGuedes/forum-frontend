import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return Ember.RSVP.hash({
      sections: this.store.findAll('section'),
      topics: this.store.findAll('topic'),
      posts: this.store.findAll('post'),
      users: this.store.findAll('user')
    });
  }
});
