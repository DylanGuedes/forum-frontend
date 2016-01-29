import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return Ember.RSVP.hash({
      section: this.modelFor('section'),
      topic: this.modelFor('section.topics.topic'),
      posts: this.store.findAll('post')
    });
  }
});
