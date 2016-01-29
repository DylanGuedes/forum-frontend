import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return Ember.RSVP.hash({
      section: this.modelFor('section'),
      topic: this.store.find('topic', params.topic_id),
      posts: this.store.findAll('post'),
      users: this.store.findAll('user'),
      author: this.store.find('topic', params.topic_id).get('author')
    });
  }
});
