import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.findAll('game');
	},
	renderTemplate: function() {
    this.render('games');
    // this.render('games', {outlet: 'gamez'});
  },
	actions: {
		LoginUser: function(credentials){
			console.log('loginUser hit index route');
			// var creds = {
			// 	credentials: {
			// 		email: credentials.email,
			// 		password: credentials.password
			// 	}
			// }
			// console.log(creds);
			var user = this.store.createRecord('users', credentials);
			user.save();
      // this.store.findRecord('generation', generationNum).then(function(generation){
      //   generation.get('pokemon').addObject(newPokemon);
      //   newPokemon.save();
      // });
		}
	}
});
