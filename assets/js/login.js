const firebaseConfig = {
  apiKey: 'AIzaSyA9jO4dPCwwoN-NrIYG6FH6WkacRC_q9n8',
  authDomain: 'contactform-a3cf2.firebaseapp.com',
  databaseURL: 'https://contactform-a3cf2-default-rtdb.firebaseio.com',
  projectId: 'contactform-a3cf2',
  storageBucket: 'contactform-a3cf2.appspot.com',
  messagingSenderId: '378802102901',
  appId: '1:378802102901:web:00bbf6c0c6c446d5c30e3c',
};
firebase.initializeApp(firebaseConfig);

document.getElementById('login-admin').addEventListener('submit', submitLogin);

function submitLogin(e) {
  e.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // console.log(user);

      document.getElementById('loginScreen').style.display = 'none';
      document.body.style.backgroundColor = 'black';

      // firebase.auth().onAuthStateChanged((user) => {
      //   if (user) {
      //     document.getElementById('loginScreen').style.display = 'none';
      //   } else {
      //     document.getElementById('loginScreen').style.display = 'block';
      //   }
      // });

      retriveData();
    })
    .catch((err) => {
      if (err.code === 'auth/wrong-password') {
        alert('Wrong Email/Password');
      } else if (err.code === 'auth/user-not-found') {
        alert('User Not Found...');
      }
    });
}
function retriveData() {
  document.getElementById('dataScreen').style.display = 'block';
  //console.log('hello');
  var firebaseRef = firebase.database().ref('contact-form');
  //   window.open('./webmail.html');
  firebaseRef.once('value', function (snapshot) {
    //var data = snapshot.val();
    var data = Object.values(snapshot.val()).reverse();
    //console.log(data);
    for (let i in data) {
      // console.log(data[i]);
      getdataTable(data[i]);
    }
  });

  //   firebaseRef
  //     .child('users')
  //     .child(userId)
  //     .get()
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         console.log(snapshot.val());
  //       } else {
  //         console.log('No data available');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
}
i = 0;
function getdataTable(data) {
  alert("FunctionComplete");
  n = ++i;
  var dataScreen = document.getElementById('dataScreen');
  var bgmain = document.createElement('div');
  bgmain.className = 'col-md-12 mb-md-0 mb-5 mt-4 bgmain';
  bgmain.id = `details${n}`;
  var flexCont = document.createElement('div');
  flexCont.className = 'flexCont';
  var flexCol2 = document.createElement('div');
  flexCol2.className = 'flexCol2';
  var circle = document.createElement('div');
  circle.className = 'circle';
  var init = document.createElement('div');
  init.className = 'init';
  init.align = 'center';
  init.innerHTML = data.name[0];

  circle.append(init);
  flexCol2.append(circle);
  flexCont.append(flexCol2);
  bgmain.append(flexCont);
  dataScreen.appendChild(bgmain);

  var flexCol1 = document.createElement('div');
  flexCol1.className = 'flexCol1';
  var subject = document.createElement('div');
  subject.className = 'subject';
  subject.innerHTML = data.subject;
  var flexContD = document.createElement('div');
  flexContD.className = 'flexCont';
  var name = document.createElement('div');
  name.className = 'nameEmail';
  name.innerHTML = data.name;
  var email = document.createElement('div');
  email.className = 'nameEmail';
  email.style = 'text-transform: none;';
  email.innerHTML = data.email;
  var mobile = document.createElement('div');
  mobile.className = 'nameEmail mobileno';
  mobile.innerHTML = data.phone;

  flexContD.append(name);
  flexContD.append(email);
  flexContD.append(mobile);
  flexCol1.append(flexContD);
  flexCol1.append(subject);
  flexCont.append(flexCol1);

  var message = document.createElement('div');
  message.innerHTML = data.message;
  flexCol1.append(message);
}
