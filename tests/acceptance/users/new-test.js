import { test } from 'qunit';
import moduleForAcceptance from 'forum-frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | users/new');

test('visiting /users/new', function(assert) {
  visit('/users/new');

  andThen(function() {
    assert.equal(currentURL(), '/users/new');
  });
});
