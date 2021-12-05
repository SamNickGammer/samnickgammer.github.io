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
  document.getElementById('tableMain').style.display = 'block';
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
var i = 0;
function getdataTable(data) {
  n = ++i;
  var tablebody = document.getElementById('tablebody');
  var trow = document.createElement('tr');
  trow.id = `idrow${n}`;
  var td_name = document.createElement('td');
  var td_email = document.createElement('td');
  var td_phone = document.createElement('td');
  var td_subj = document.createElement('td');
  var td_mess = document.createElement('td');

  tablebody.append(trow);

  trow.appendChild(td_name);
  trow.appendChild(td_email);
  trow.appendChild(td_phone);
  trow.appendChild(td_name);
  trow.appendChild(td_subj);
  trow.appendChild(td_mess);

  td_name.innerHTML = data.name;
  td_email.innerHTML = data.email;
  td_phone.innerHTML = data.phone;
  td_subj.innerHTML = data.subject;
  td_mess.innerHTML = data.message;

  document.getElementById(`idrow${n}`).append(td_name);
  document.getElementById(`idrow${n}`).append(td_email);
  document.getElementById(`idrow${n}`).append(td_phone);
  document.getElementById(`idrow${n}`).append(td_subj);
  document.getElementById(`idrow${n}`).append(td_mess);
}
