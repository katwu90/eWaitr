import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-delete-button-confirmation', 'Integration | Component | item delete button confirmation', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{item-delete-button-confirmation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#item-delete-button-confirmation}}
      template block text
    {{/item-delete-button-confirmation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
