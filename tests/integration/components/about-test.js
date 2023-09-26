import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-ember-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | about', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<About />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <About>
        template block text
      </About>
    `);

    assert.dom().hasText('template block text');
  });
});
