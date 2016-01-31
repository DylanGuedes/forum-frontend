import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var _this = this;
    return this.store.find('topic', params.topic_id).then(function(topic) {
      return Ember.RSVP.hash({
        topic: topic,
        posts: topic.posts
      });
    });
  }
});

