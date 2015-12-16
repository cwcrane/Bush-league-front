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
    },
    destroyGame: function(){
      console.log('Component Action : destroyGame');
      this.sendAction('routeDestroyGame', this.get('game'));
    }
  }
});
