import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return {
			games: this.store.findAll('game'),
			teams: this.store.findRecord('team', 14),
			users: this.store.findAll('user'),
			rosters: this.store.findAll('roster')
		};
	}
});
