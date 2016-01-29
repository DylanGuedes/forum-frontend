import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  username: DS.attr('string'),
  admin: DS.attr('boolean'),
  topicsCreated: DS.hasMany('topic'),
  sectionsCreated: DS.hasMany('section'),
  postsCreated: DS.hasMany('post'),
  password: DS.attr('string'),
  email: DS.attr('string'),
  createdAt: DS.attr('date')
});
