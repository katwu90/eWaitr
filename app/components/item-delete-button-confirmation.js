import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['delete-item-button'],
  actions: {
    launchConfirmDialog() {
      this.toggleProperty('confirmShown');
    },
    deleteItemConfirm() {
      //call the onConfirm property to invoke the passed in action
      this.sendAction('deleteItemConfirm', this.get('item'));
      this.set('confirmShown', false);
    },
    cancelConfirm() {
      this.set('confirmShown', false);
    }
  }
});
