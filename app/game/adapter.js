import ApplicationAdapter from '../application/adapter';
import Ember from 'ember';

export default ApplicationAdapter.extend({
	//host: 'http://localhost:3000',
	// headers: {
 //    'Content-Type': 'application/json'
 //  },
	// updateRecord: function(store, type, snapshot){
 //    console.log('HIT THE WORKOUT ADAPTER');
 //    console.log(snapshot);
 //    console.log(this.host);

 //    // var data = this.serialize({"game": snapshot}, {includeId: true});
 //    var data = this.serialize(snapshot, {includeId: true});
    
 //    var id = snapshot.id;
 //    var url = [this.host, type.modelName + 's', id].join("/");

 //    console.log(data);

 //    return new Ember.RSVP.Promise(function(resolve, reject){
 //      Ember.$.ajax({
 //        type: 'PUT',
 //        url: url,
 //        dataType: 'json',
 //        data: data
 //      }).then(function(data){
 //        Ember.run(null, resolve, data);
 //      }, function(jqXHR){
 //        jqXHR.then = null;
 //        Ember.run(null, reject, jqXHR);
 //      });
 //    });
 //  }

});
