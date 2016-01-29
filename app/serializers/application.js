import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    author: 'author_id',
    user: { embedded: 'always' },
    topic: 'topic_id'
  },
  keyForAttributes: function(attr) {
    return Ember.String.underscore(attr).toUpperCase();
  }
});
