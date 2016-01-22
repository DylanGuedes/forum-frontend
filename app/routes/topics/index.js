import Ember from 'ember';

export default Ember.Route.extend({
  topics: function() {
    return this.store.findAll('topics');
  },
  posts: function() {
    return this.store.findAll('post');
  }
});
