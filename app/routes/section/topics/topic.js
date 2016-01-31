import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  perPage: 20,

  model: function(params) {
    var _this = this;
    params.paramMapping = {
      page: "page",
      perPage: "page_size",
      total_pages: "total_pages"
    };
    console.log("params:");
    console.log(params);
    return this.store.find('topic', params.topic_id).then((topic) => {
      return Ember.RSVP.hash({
        posts: _this.findPaged('post', params),
        topic: topic
      });
    });
  },
});
