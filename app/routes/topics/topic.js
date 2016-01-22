import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      topic: this.store.find('topic', params.topic_id),
      posts: this.store.findAll('post')
    });
  }
});
