import DS from 'ember-data';

export default DS.Model.extend({
  game_id: DS.belongsTo('game', {async: true}),
  user_id: DS.belongsTo('user', {async: true}),
  team_id: DS.belongsTo('team', {async: true}),
  goals: DS.attr('number'),
  assists: DS.attr('number'),
  penalty_mins: DS.attr('number')
});
