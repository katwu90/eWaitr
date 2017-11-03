import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('menu', params.menu_id);
  },
  actions: {
    createMenuItem (menuItem) {
      let newMenuItem = this.get('store').createRecord('menuItem', menuItem);
      newMenuItem.save();
    },
    deleteItem(item) {
      item.destroyRecord();
    },
    deleteMenu (menu) {
      menu.destroyRecord().then(() => this.transitionTo('menus'));
    },
    updateMenuItem (item, name, price, description, foodCategory) {
      item.set('name', name);
      item.set('price', price);
      item.set('description', description);
      item.set('foodCategory', foodCategory);
      item.save();
    }
  }
});
