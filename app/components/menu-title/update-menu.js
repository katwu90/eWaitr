import Ember from 'ember';

export default Ember.Component.extend({
  title: Ember.computed.oneWay('menu.title'),
  notes: Ember.computed.oneWay('menu.notes'),
  actions: {
    launchConfirmDialog() {
      this.toggleProperty('confirmShown');
    },
    updateMenu() {
      this.sendAction('updateMenu', this.get('menu'), this.get('title'), this.get('notes'));
      this.set('confirmShown', false);
    },
    cancelConfirm() {
      this.set('confirmShown', false);
    }
  }
});
