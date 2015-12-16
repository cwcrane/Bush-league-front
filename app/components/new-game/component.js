import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	newGame: {
		home_team_id: null,
		away_team_id: null,
		home_goals: null,
		away_goals: null,
		date: null,
		time: null
	},
	actions: {
		createGame: function(){
      console.log('Component Action : create Game');
      this.sendAction('routeCreateGame', this.get('newGame'));
    }
	}
});
