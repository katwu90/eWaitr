import Ember from 'ember';

export default Ember.Component.extend({
  menu: {
    title: null,
    notes: null
  },
  actions: {
    launchConfirmDialog() {
      this.toggleProperty('confirmShown');
    },
    createMenu () {
      this.sendAction('createMenu', this.get('menu'));
      this.set('menu.title', null);
      this.set('menu.notes', null);
      this.set('confirmShown', false);
    },
    cancelConfirm() {
      this.set('confirmShown', false);
    }
  }
});
