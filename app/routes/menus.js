import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('menu');
  },
  actions: {
    createMenu (menu) {
      let newMenu = this.get('store').createRecord('menu', menu);
      newMenu.save();
    }
  }
});
