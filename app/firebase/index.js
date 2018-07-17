import firebase from 'firebase'

try {
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    // projectId: "to-do-app-e6a09",
    storageBucket: process.env.STORAGE_BUCKET
    // messagingSenderId: "171134337673"
  };
  firebase.initializeApp(config);
}catch (e) {

}

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();
export default firebase;
