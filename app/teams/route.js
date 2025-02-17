import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		console.log(params.team_id);
		return {
			users: this.store.findAll('user'),
			games: this.store.findAll('game'),
			teams: this.store.findRecord('team', params.team_id),
			rosters: this.store.findAll('roster'),
			stats: this.store.findAll('stat')
		};
	}
	//a user on a roster, has many stats. I want to find all the stats with a particular user_id. First just list them. Then, sum goals. 
	//

	// isOnTeam: function() {
	//   return this.get('team_id') == "complete";
	// }.property('status')
});
