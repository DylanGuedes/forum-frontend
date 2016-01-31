import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  perPage: 20,
  model: function(params) {
    console.log("params:")
    console.log(params);
    params.paramMapping = {page: "page",
      perPage: "page_size", total_pages: "total_pages"
    };
    return this.findPaged('user', params);
  }
});
