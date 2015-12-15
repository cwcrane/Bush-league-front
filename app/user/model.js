import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string')
  // first_name: DS.attr('string'),
  // typeOne: DS.attr('string'),
  // typeTwo: DS.attr('string'),
  // types: DS.hasMany('type', {async: true}),
  // generation: DS.belongsTo('generation', {async: true})
});
