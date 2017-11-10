import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('menu', params.menu_id);
  },
  flashMessages: Ember.inject.service(),
  actions: {
    createMenuItem (menuItem) {
      let newMenuItem = this.get('store').createRecord('menuItem', menuItem);
      newMenuItem.save()
      .then(() => {
        this.get('flashMessages').success('Successfully added new item to menu');
      })
      .catch(() => {
        newMenuItem.rollbackAttributes();
        this.get('flashMessages').danger('Failed to add new item, please check all required fields.');
      });
    },
    deleteItem(item) {
      item.destroyRecord()
      .then(() => {
        this.get('flashMessages').success('Successfully deleted!');
      })
      .catch(() => {
        item.rollbackAttributes();
        this.get('flashMessages').danger('Failed to delete!');
      });
    },
    deleteMenu (menu) {
      menu.destroyRecord()
      .then(() => this.transitionTo('menus'))
      .then(() => {
        this.get('flashMessages').success('Successfully deleted!');
      })
      .catch(() => {
        menu.rollbackAttributes();
        this.get('flashMessages').danger('Failed to delete!');
      });
    },
    // messages
    updateMenuItem (item, name, price, description, foodCategory) {
      item.set('name', name);
      item.set('price', price);
      item.set('description', description);
      item.set('foodCategory', foodCategory);
      item.save()
      .then(() => {
        this.get('flashMessages').success('Successfully updated!');
      })
      .catch(() => {
        item.rollbackAttributes();
        this.get('flashMessages').danger('Failed to update, please check all required fields!');
      });
    }
  }
});
