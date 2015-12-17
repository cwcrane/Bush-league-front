import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  user_id: DS.belongsTo('user', {async: true}),
  date_created: DS.attr('string'),
  rosters: DS.hasMany('roster', {async: true}),
  home_games: DS.hasMany('game', {inverse: 'home_team_id'}),
  away_games: DS.hasMany('game', {inverse: 'away_team_id'}),
  stats: DS.hasMany('stat', {async: true})
});
