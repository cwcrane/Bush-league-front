import DS from 'ember-data';

export default DS.Model.extend({
  home_team_id: DS.belongsTo('team', {async: true}),
  away_team_id: DS.belongsTo('team', {async: true}),
  home_goals: DS.attr('number'),
  away_goals: DS.attr('number'),
  date: DS.attr('string'),
  time: DS.attr('string'),
  player_stats: DS.hasMany('player_stat', {async: true})
});
