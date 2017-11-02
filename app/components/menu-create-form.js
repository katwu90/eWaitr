import Ember from 'ember';

export default Ember.Component.extend({
  menu: {
    title: null,
    notes: null
  },
  actions: {
    createMenu () {
      this.sendAction('createMenu', this.get('menu'));
      this.set('menu.title', null);
      this.set('menu.notes', null);
    }
  }
});
