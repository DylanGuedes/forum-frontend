import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      topic: this.modelFor('section.topics.topic'),
      posts: this.store.findAll('post')
    });
  }
});
