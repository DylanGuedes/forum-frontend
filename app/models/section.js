import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  topics: DS.hasMany('topic', { async: true }),
  author: DS.belongsTo('user', { async: true }),
  createdAt: DS.attr()
});
