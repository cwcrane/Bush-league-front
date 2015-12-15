import Ember from 'ember';

export default Ember.Component.extend({
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
    }
    // updatePokemon: function(){
    //   console.log('Component Action : updatePokemon');
    //   this.sendAction('routeUpdatePokemon');
    // },
    // destroyPokemon: function(){
    //   console.log('Component Action : destroyPokemon');
    //   this.sendAction('routeDestroyPokemon', this.get('pokemon'));
    }
});
