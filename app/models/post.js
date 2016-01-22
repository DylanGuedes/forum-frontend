import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  topic: DS.belongsTo('topic', { async: true }),
  author: DS.belongsTo('user', { async: true })
});
