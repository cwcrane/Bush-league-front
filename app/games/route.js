import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.findAll('game');
	},
	actions: {
		deleteGame: function(game){
      this.store.findRecord('game', game.get('id')).then(function(game){
        game.destroyRecord();
        console.log('record destroyed');
      });
    } 
	}
});