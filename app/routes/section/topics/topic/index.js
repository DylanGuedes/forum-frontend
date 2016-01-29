import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      topic: this.modelFor('section.topics.topic').topic,
      section: this.modelFor('section'),
      posts: this.store.findAll('post'),
      users: this.store.findAll('user'),
    });
  }
});
