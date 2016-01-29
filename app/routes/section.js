import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var _this = this;
    return this.store.find('section', params.section_id).then(function(section) {
      return Ember.RSVP.hash({
        section: section,
      });
    });
  }
});
