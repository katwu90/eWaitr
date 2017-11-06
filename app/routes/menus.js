import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('menu');
  },
  flashMessages: Ember.inject.service(),
  actions: {
    createMenu (menu) {
      let newMenu = this.get('store').createRecord('menu', menu);
      newMenu.save()
      .then(() => {
        this.get('flashMessages').success('Successfully created menu!');
      })
      .catch(() => {
        newMenu.rollbackAttributes();
        this.get('flashMessages').danger('Failed to create menu, please check all required fields!');
      });
    },
    updateMenu (menu, title, notes) {
      menu.set('title', title);
      menu.set('notes', notes);
      menu.save()
      .then(() => {
        this.get('flashMessages').success('Successfully updated!');
      })
      .catch(() => {
        menu.rollbackAttributes();
        this.get('flashMessages').danger('Failed to update, please check all required fields!');
      });
    }
  }
});
