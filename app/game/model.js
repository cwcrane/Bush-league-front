import DS from 'ember-data';

export default DS.Model.extend({
  home_team_id: DS.attr('number'),
  away_team_id: DS.attr('number'),
  home_goals: DS.attr('number'),
  away_goals: DS.attr('number')
});
