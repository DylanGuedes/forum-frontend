import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log(this.modelFor('sections.section'));
    return Ember.RSVP.hash({
      section: this.modelFor('section'),
      sections: this.store.findAll('section'),
      topics: this.store.findAll('topic'),
      posts: this.store.findAll('post'),
    });
  }
});
