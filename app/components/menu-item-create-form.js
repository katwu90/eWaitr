import Ember from 'ember';

export default Ember.Component.extend({
  menuItem: {
    name: null,
    price: null,
    description: null,
    foodCategory: null
  },
  actions: {
    launchConfirmDialog() {
      this.set('confirmShown', true);
    },
    createMenuItem () {
      this.get('menuItem').menu = this.get('menu');
      this.sendAction('createMenuItem', this.get('menuItem'));
      this.set('menuItem.name', null);
      this.set('menuItem.price', null);
      this.set('menuItem.description', null);
      this.set('menuItem.foodCategory', null);
      this.set('confirmShown', false);
    },
    cancelConfirm() {
      this.set('confirmShown', false);
    }
  }
});
