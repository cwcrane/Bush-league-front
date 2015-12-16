import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('games', function(){ 
  	this.route('/:game_id')
  });
  this.route('teams', function(){ 
  	this.route('/:team_id')
  });
  this.route('rosters', function(){ 
  	this.route('/:roster_id')
  });
});

export default Router;
