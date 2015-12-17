import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return {
			games: this.store.findAll('game'),
			teams: this.store.findAll('team'),
			users: this.store.findAll('user'),
			rosters: this.store.findAll('roster')
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
			

			var nGame = this.store.createRecord('game', newGame).save();
			// var nGame = this.store.createRecord('game', newGame);
			this.store.findRecord('team', newGame.home_team_id).then(function(team){
				console.log(team);
				team.get('home_games').addObject(nGame.get('id')).save();
			});
			// nGame.set('home_team_id', tId);
			// nGame.save();
			// then(function(team){
   //       console.log(team.id);
   //       nGame.set('home_team_id', team.id);
   //       console.log(nGame.get('home_team_id'));
   //       nGame.save();
   //    });

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
		destroyGame: function(game){
      this.store.findRecord('game', game.get('id')).then(function(game){
        game.destroyRecord();
        console.log('record destroyed');
      });
    } 
	}
});
