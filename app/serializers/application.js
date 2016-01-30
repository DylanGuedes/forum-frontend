import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    author: 'author_id',
    user: { embedded: 'always' },
    topic: 'topic_id',
    createdAt: 'created_at',
    post: { key: 'post_id' }
  },
  serialize: function(record, options) {
    options = options ? options : {}; // handle the case where options is undefined
    options.includeId = true;
    return this._super.apply(this, [record, options]); // Call the parent serializer
  },
  keyForAttributes: function(attr) {
    return Ember.String.underscore(attr).toUpperCase();
  }
});
