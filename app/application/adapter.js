import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'https://polar-mesa-2866.herokuapp.com',
	headers: {
    'Content-Type': 'application/json'
  }

});