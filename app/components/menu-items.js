import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['items'],
  actions: {
    deleteItem(item) {
      this.sendAction('deleteItem', item);
    }
  }
});
