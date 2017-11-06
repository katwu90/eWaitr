import Ember from 'ember';

export default Ember.Component.extend({
  name: Ember.computed.oneWay('item.name'),
  price: Ember.computed.oneWay('item.price'),
  description: Ember.computed.oneWay('item.description'),
  foodCategory: Ember.computed.oneWay('item.foodCategory'),
  actions: {
    launchConfirmDialog() {
      this.toggleProperty('confirmShown');
    },
    updateMenuItem() {
      this.sendAction('updateMenuItem', this.get('item'), this.get('name'), this.get('price'), this.get('description'), this.get('foodCategory'));
      //call the onConfirm property to invoke the passed in action
      this.set('confirmShown', false);
    },
    cancelConfirm() {
      this.set('confirmShown', false);
    }
  }
});
