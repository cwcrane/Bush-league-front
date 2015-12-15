import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.findAll('game');
	}
});

// return Ember.RSVP.hash({
  //     games: this.store.findAll('game')
  //   });