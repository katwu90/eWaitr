import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    launchConfirmDialog() {
      this.toggleProperty('confirmShown');
    },
    deleteMenuConfirm() {
      //call the onConfirm property to invoke the passed in action
      this.sendAction('deleteMenuConfirm', this.get('menu'));
      this.set('confirmShown', false);
    },
    cancelConfirm() {
      this.set('confirmShown', false);
    }
  }
});
