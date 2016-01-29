import Ember from 'ember';

export default Ember.Route.extend({
  topicId: function() {
    return this.modelFor('topic');
  },
  sectionId: function() {
    return this.modelFor('section');
  },
  model(params) {
    return Ember.RSVP.hash({
      topic: this.store.find('topic', params.topic_id),
      posts: this.store.findAll('post'),
      users: this.store.findAll('user')
    });
  }
});

