import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  username: DS.attr('string'),
  admin: DS.attr('boolean'),
  //email: DS.attr('string'),
  password: DS.attr('string')
  //posts_created: DS.hasMany('post'),
  //sections_created: DS.hasMany('section'),
  //topics_created: DS.hasMany('topic')
});
