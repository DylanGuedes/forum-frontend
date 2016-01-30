import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      var post = this.currentModel;
      var that = this;
      post.save().then(function () {
        that.transitionTo('section.topics.topic.index');
      });
    }
  }
});
