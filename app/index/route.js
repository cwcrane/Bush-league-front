import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		LoginUser: function(credentials){
			console.log('loginUser hit index route');
		}
	}
});
