import { test, moduleForModel } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('topic', 'Topic', { needs: ['model:user', 'model:section', 'model:post'] });

test('it works', function(assert) {
  var model = this.subject();
  assert.ok(model);
});

test('relationship with section', function(assert) {
  var klass = this.subject({}).constructor;

  var relationship = Ember.get(klass, 'relationshipsByName').get('section');

  assert.equal(relationship.key, 'section');
  assert.equal(relationship.kind, 'belongsTo');
});

test('relationship with posts', function(assert) {
  var klass = this.subject({}).constructor;

  var relationship = Ember.get(klass, 'relationshipsByName').get('posts');

  assert.equal(relationship.key, 'posts');
  assert.equal(relationship.kind, 'hasMany');
});

test('relationship with user', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('author');

  assert.equal(relationship.key, 'author');
  assert.equal(relationship.kind, 'belongsTo');
});
