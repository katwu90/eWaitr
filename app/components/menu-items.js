import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['menu-item'],
  actions: {
    deleteItem (item) {
      this.sendAction('deleteItem', item);
    },
    updateMenuItem (item, name, price, description, foodCategory) {
      this.sendAction('updateMenuItem', item, name, price, description, foodCategory);
    }
  }
});
