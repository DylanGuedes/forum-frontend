import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  subtitle: DS.attr(),
  content: DS.attr(),
  section: DS.belongsTo('section', { async: true }),
  author: DS.belongsTo('user', { async: true }),
  posts: DS.hasMany('post', { async: true }),
  createdAt: DS.attr(),
  lastPost: Ember.computed('posts', function() {
    return this.get('posts').get('lastObject');
  })
});
