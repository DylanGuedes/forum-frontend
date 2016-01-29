import Ember from 'ember';

export default Ember.Route.extend({
  sectionId: function() {
    return this.modelFor('section').get('id');
  },
  model(params) {
    return Ember.RSVP.hash({
      topic: this.store.find('topic', params.topic_id),
      section: this.get('store').find('section'),
    });
  },
});
