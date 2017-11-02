import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  foodCategory: DS.attr('string'),
  menu: DS.belongsTo('menu')
});
