import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  notes: DS.attr('string'),
  editable: DS.attr('boolean'),
  menuItems: DS.hasMany('menu-item')
});
