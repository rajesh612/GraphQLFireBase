import firebase from 'firebase';
import {filter, map} from 'lodash';

var app = firebase.initializeApp({
	apiKey: //your Firebase API key ,
    databaseURL: //your firebase URL,
});

/*const mapSnapshotToEntity = snapshot => ({ id: snapshot.key, ...snapshot.val() })
const mapSnapshotToEntities = snapshot => map(snapshot.val(), (value, id) => ({ id, ...value }))
*/

const refVal = path => firebase.database().ref(path).once('value').then(function(snapshot) {
			return snapshot.val();
    });

//const getEntity = path => getValue(path).then(mapSnapshotToEntity)
//const getEntities = path => getValue(path).then(mapSnapshotToEntities)

export default refVal ;
