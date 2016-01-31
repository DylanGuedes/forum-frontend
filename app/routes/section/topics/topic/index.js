import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  perPage: 20,
  model: function(params) {
    console.log("aqui");
    var section = this.modelFor('section').section;
    var topic = this.modelFor('section.topics.topic').topic;
    console.log("id:");
    console.log(topic.id);
    params["topic_id"] = topic.id;
    return Ember.RSVP.hash({
      topic: topic,
      section: section,
      posts: this.findPaged('post', params)
    });
  }
});
