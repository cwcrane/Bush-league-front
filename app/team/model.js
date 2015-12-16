import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  user_id: DS.belongsTo('user', {async: true}),
  date_created: DS.attr('string')
  //games: DS.hasMany('game', {async: true})
});
