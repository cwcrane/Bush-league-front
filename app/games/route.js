import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.findAll('game');
	},
	actions: {
		// updateGame: function(game){
		// 	console.log('hit games route');
		// 	console.log(game);
		// 	// this.store.findRecord('person', 1).then(function(tyrion) {
		// 	//   tyrion.set('firstName', "Yollo");
		// 	// });
		// }
	}
});

// return Ember.RSVP.hash({
  //     games: this.store.findAll('game')
  //   });