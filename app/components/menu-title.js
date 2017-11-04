import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['items'],
  actions: {
    updateMenu (menu, title, notes) {
      this.sendAction('updateMenu', menu, title, notes)
    }
  }
});
