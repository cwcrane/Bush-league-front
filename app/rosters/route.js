import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return {
			//games: this.store.findAll('game'),
			teams: this.store.findAll('team'),
			users: this.store.findAll('user'),
			rosters: this.store.findAll('roster')
		};
	}
});
