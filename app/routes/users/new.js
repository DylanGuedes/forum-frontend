import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user');
  },

  actions: {
    save: function() {
      var user = this.currentModel;
      user.save().then(() => {
        this.transitionTo('sections');
      });
    }
  }
});
