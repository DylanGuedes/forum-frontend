import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('topic');
  },
  actions: {
    save: function(params) {
      var topic = this.currentModel;
      topic.set('author', params.currentUser);
      var section = this.modelFor('section.index');
      console.log(section);
      topic.set('section', section);
      console.log("section id:");
      console.log(section.id);
      topic.save().then(() => {
        this.transitionTo('topics');
      });
    }
  }

});
