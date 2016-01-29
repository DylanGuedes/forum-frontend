import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('section');
  },

  actions: {
    save: function(params) {
      var section = this.currentModel;
      section.set('author', params.currentUser);
      section.save().then(() => {
        this.transitionTo('sections');
      });
    }
  }

});

