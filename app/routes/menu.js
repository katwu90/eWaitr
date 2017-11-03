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
    deleteMenu (menu) {
      menu.destroyRecord().then(() => this.transitionTo('menus'));
    }
  }
});
