import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post');
  },

  actions: {
    save: function(params) {
      var post = this.currentModel;
      post.set('author', params.currentUser);
      var topic = this.modelFor('section.topics.topic');
      post.set('topic', topic);
      post.save().then(() => {
        this.transitionTo('section.topics.topic');
      });

    }
  }
});
