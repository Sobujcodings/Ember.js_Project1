import { module, test } from 'qunit';
import { setupTest } from 'my-ember-app/tests/helpers';

module('Unit | Route | task/new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:task/new');
    assert.ok(route);
  });
});