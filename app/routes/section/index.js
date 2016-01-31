import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  perPage: 20,
  model: function(params) {
    var section = this.modelFor('section').section;
    params["section_id"] = section.id;
    params.paramMapping = {
      page: "page",
      perPage: "page_size",
      total_pages: "total_pages"
    };
    return this.findPaged('topic', params);
  }
});
