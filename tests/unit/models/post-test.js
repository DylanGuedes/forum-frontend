import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('post', 'Post', { needs: ['model:user', 'model:topic' ] });

test('it works', function(assert) {
  var model = this.subject();
  assert.ok(model);
});

test('relationship with topic', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('topic');

  assert.equal(relationship.key, 'topic');
  assert.equal(relationship.kind, 'belongsTo');
});

test('relationship with user', function(assert) {
  var klass = this.subject({}).constructor;
  var relationship = Ember.get(klass, 'relationshipsByName').get('author');

  assert.equal(relationship.key, 'author');
  assert.equal(relationship.kind, 'belongsTo');
});
