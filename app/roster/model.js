import DS from 'ember-data';

export default DS.Model.extend({
  team_id: DS.belongsTo('team', {async: true}),
  user_id: DS.belongsTo('user', {async: true})
});
