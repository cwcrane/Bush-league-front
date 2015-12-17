import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return {
			games: this.store.findAll('game'),
			teams: this.store.findAll('team'),
			users: this.store.findAll('user'),
			rosters: this.store.findAll('roster'),
			stats: this.store.findAll('stat')
		};
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
		},
		createGame: function(newGame){
			console.log('hit index route createGame');
			console.log(newGame.home_team_id);
			

			
			//this.store.createRecord('game', newGame).save();
			var self = this;
			var nGame = this.store.createRecord('game', newGame);
			//nGame.save();
			nGame.save().then(function(savedGame){
				debugger;
				self.store.findRecord('team', newGame.home_team_id).then(function(hTeam){
					hTeam.get('home_games').pushObject(savedGame).save();
				});
				self.store.findRecord('team', newGame.away_team_id).then(function(aTeam){
					aTeam.get('away_games').pushObject(savedGame).save();
				});
			});
		},

		updateGame: function(gData){
			console.log('hit the updateGame index route');
			console.log(gData.id);
			console.log(gData.get('home_goals'));
			this.store.findRecord('game', gData.id).then(function(game) {
			//   console.log(game.get('home_goals'));
			//   game.set('home_goals', gData.get('home_goals'));
			  game.save();
			});
		},

		deleteGame: function(game){
      this.store.findRecord('game', game.get('id')).then(function(game){
        game.destroyRecord();
        console.log('record destroyed');
      });
    } 
	}
});
