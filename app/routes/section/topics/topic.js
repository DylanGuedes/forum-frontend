import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    console.log("params:");
    console.log(params);
    var _this = this;
    return this.store.find('topic', params.topic_id).then(function(topic) {
      return Ember.RSVP.hash({
        topic: topic,
        section: _this.modelFor('section'),
        posts: topic.posts
      });
    });
  },
  actions: {
    openModal: function(modalName) {
      return this.render(modalName, {
        into: 'section.topics.topic',
        outlet: 'modal'
      });
    }
  }
});
