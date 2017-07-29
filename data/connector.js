import firebase from 'firebase';
import {filter, map} from 'lodash';

var app = firebase.initializeApp({
	apiKey: //your FireBase API Key 
    databaseURL: //your Firebase URL
});

const refVal = path => firebase.database().ref(path).once('value').then(function(snapshot) {
			return snapshot.val();
    });

export default refVal;
