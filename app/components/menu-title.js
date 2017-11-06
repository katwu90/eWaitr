import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['items', 'col-sm-5 col-md-5'],
  actions: {
    updateMenu (menu, title, notes) {
      this.sendAction('updateMenu', menu, title, notes);
    }
  }
});
