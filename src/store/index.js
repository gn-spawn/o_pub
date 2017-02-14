import firebase from 'firebase';

const config = {
  databaseURL: 'https://ticketz-c299b.firebaseio.com',
};
/* global Vue, firebase */
const db = firebase.initializeApp(config).database();
const ItemRef = db.ref('todos');

export default ItemRef;
