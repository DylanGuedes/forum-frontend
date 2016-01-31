import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  perPage: 20,
  model: function(params) {
    var section = this.modelFor('section').section;
    console.log(section);
    console.log(section.id);
    params["section_id"] = section.id;
    console.log(params);
    return this.findPaged('topic', params);
  }
});
