import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('user', 'User', { needs: ['model:user', 'model:topic', 'model:post', 'model:section'] });

test('it works', function(assert) {
  var model = this.subject();
  assert.ok(model);
});

test('relationship with topics', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('topicsCreated');

  assert.equal(relationship.key, 'topicsCreated');
  assert.equal(relationship.kind, 'hasMany');
});

test('relationship with posts', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('postsCreated');

  assert.equal(relationship.key, 'postsCreated');
  assert.equal(relationship.kind, 'hasMany');
});

test('relationship with posts', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('sectionsCreated');

  assert.equal(relationship.key, 'sectionsCreated');
  assert.equal(relationship.kind, 'hasMany');
});

