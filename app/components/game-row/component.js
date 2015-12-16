import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	isExpanded: false,
  isEditable: false,
  actions: {
    toggleEditable: function(){
      this.toggleProperty('isEditable');
    },
    toggleExpanded: function(){
      this.toggleProperty('isExpanded');
      if (!this.get('isExpanded')){
        this.set('isEditable', false);
      }
    },
    updateGame: function(){
      console.log('Component Action : updateGame');
      this.toggleProperty('isEditable');
      this.sendAction('routeUpdateGame', this.get('game'));
    }
    // destroyPokemon: function(){
    //   console.log('Component Action : destroyPokemon');
    //   this.sendAction('routeDestroyPokemon', this.get('pokemon'));
    }
});
