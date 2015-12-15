import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  user_id: DS.attr('number'),
  date_created: DS.attr('string'),
  // games: DS.hasMany('games', {async: true})
});
