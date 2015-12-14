import Ember from 'ember';

export default Ember.Component.extend({
	credentials: {
		email: null,
		password: null
	},
	actions: {
		loginUser: function(){
			console.log('you hit the component LoginUser method');
			console.log(this.get('credentials'));
			this.sendAction('routeLoginUser', this.get('credentials'));
		}
	}
});
