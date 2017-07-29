import firebase from 'firebase';
import {filter, map} from 'lodash';

var app = firebase.initializeApp({
	apiKey: "AIzaSyBlJ55S4-H8rp5C1v5mJi20P6jvOy-dto0" ,
    databaseURL: "https://stampapp.firebaseio.com",
});

/*const mapSnapshotToEntity = snapshot => ({ id: snapshot.key, ...snapshot.val() })
const mapSnapshotToEntities = snapshot => map(snapshot.val(), (value, id) => ({ id, ...value }))
*/

const refVal = path => firebase.database().ref(path).once('value').then(function(snapshot) {
			return snapshot.val();
    });

/*const refId = path => firebase.database().ref(path).once('id').then(function(snapshot) {
			return map(snapshot.val(), (value, id) => ({ id, ...value }));
    });*/

//const getEntity = path => getValue(path).then(mapSnapshotToEntity)
//const getEntities = path => getValue(path).then(mapSnapshotToEntities)

export default refVal;
