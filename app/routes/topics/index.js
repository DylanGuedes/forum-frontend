import Ember from 'ember';

export default Ember.Route.extend({
  sectionId: function() {
    return this.modelFor('section');
  },
  topics: function() {
    return this.store.findAll('topics');
  },
  posts: function() {
    return this.store.findAll('post');
  }
});
