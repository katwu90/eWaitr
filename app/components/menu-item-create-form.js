import Ember from 'ember';

export default Ember.Component.extend({
  menuItem: {
    name: null,
    price: null,
    description: null,
    foodCategory: null
  },
  actions: {
    createMenuItem () {
      this.get('menuItem').menu = this.get('menu');
      console.log(this.get('menuItem'));
      this.sendAction('createMenuItem', this.get('menuItem'));
      this.set('menuItem.name', null);
      this.set('menuItem.price', null);
      this.set('menuItem.description', null);
      this.set('menuItem.foodCategory', null);
    }
  }
});
