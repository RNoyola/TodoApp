import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyB8_wY_mCMEyyKK-Qn8g-mCE5QdAIV4AJw",
    authDomain: "to-do-app-e6a09.firebaseapp.com",
    databaseURL: "https://to-do-app-e6a09.firebaseio.com",
    projectId: "to-do-app-e6a09",
    storageBucket: "to-do-app-e6a09.appspot.com",
    messagingSenderId: "171134337673"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app:  {
        name: 'TodoApp',
        version:  '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Ricardo',
      age: 26
    }
   })

   // var notesRef = firebaseRef.child('notes');

   // notesRef.on('child_added', (snapshot) => {
   //   console.log('Child added', snapshot.key, snapshot.val());
   // })
   //
   // notesRef.on('child_changed', (snapshot) => {
   //   console.log('child_changed', snapshot.key, snapshot.val());
   // })
   //
   // notesRef.on('child_removed', (snapshot) => {
   //   console.log('Child remove', snapshot.key, snapshot.val());
   // })

   var newNoteRef = notesRef.push({
     text: 'walk the dog'
   })

   // firebaseRef.child('user').on('value', (snapshot)=>{
   //   console.log('User ref changes', snapshot.val());
   // })
   //
   // firebaseRef.child('user').update({name: 'Chase'})
   //
   // firebaseRef.child('app').update({name: 'Something'})

   // firebaseRef.on('value', (snapshot) => {
   //   console.log('Got value', snapshot.val());
   // })
   //
   // firebaseRef.off()
   //
   // firebaseRef.update({
   //   isRunning: false
   // })

   // firebaseRef.update({
   //   isRunning: false,
   //   'app/name': 'Todo Application'
   // })
   //
   // firebaseRef.child('app').update({
   //   name: 'Todo Apppplication'
   // }).then(() => {
   //   console.log("Update worked");
   // }, (e) => {
   //   console.log(e);
   // })


   // firebaseRef.once('value').then((snapshot)=>{
   //   console.log('Got entire database',snapshot.val());
   // },(e)=>{
   //   console.log("Unable to fetch value");
   // })
   //
   // firebaseRef.child('app').once('value').then((snapshot)=>{
   //   console.log('Got entire database',snapshot.key,snapshot.val());
   // },(e)=>{
   //   console.log("Unable to fetch value");
   // })

  // firebaseRef.remove();//delete all

// firebaseRef.child('app/name').remove()
// firebaseRef.child('app').update({
//   vaersion:'2.0',
//   name: null
// })

//.then(() => {
//     console.log("Success");
//   }, (e) => {
//     console.log("Error");
//   }
// )
//
// firebaseRef.child('user').set({
//   user: {
//     name: 'Chase',
//
//   }
// })
//
// firebaseRef.child('app').set({
//   name: 'Todo App'
// })
