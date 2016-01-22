import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      sections: this.store.findAll('section'),
      topics: this.store.findAll('topic'),
      posts: this.store.findAll('post'),
      users: this.store.findAll('user')
    });
  }
});
