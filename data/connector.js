import firebase from 'firebase';
import {filter, map} from 'lodash';

var app = firebase.initializeApp({
	apiKey: "AIzaSyBlJ55S4-H8rp5C1v5mJi20P6jvOy-dto0" ,
    databaseURL: "https://stampapp.firebaseio.com",
});

const refVal = path => firebase.database().ref(path).once('value').then(function(snapshot) {
			return snapshot.val();
    });

export default refVal;
