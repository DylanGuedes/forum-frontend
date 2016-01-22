import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      section: this.store.find('section', params.section_id),
      topics: this.store.find('section', params.section_id).topics,
      posts: this.store.findAll('post')
    });
  }
});
