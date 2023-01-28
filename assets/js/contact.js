const firebaseConfig = {
  apiKey: 'AIzaSyA9jO4dPCwwoN-NrIYG6FH6WkacRC_q9n8',
  authDomain: 'contactform-a3cf2.firebaseapp.com',
  databaseURL: 'https://contactform-a3cf2-default-rtdb.firebaseio.com',
  projectId: 'contactform-a3cf2',
  storageBucket: 'contactform-a3cf2.appspot.com',
  messagingSenderId: '378802102901',
  appId: '1:378802102901:web:00bbf6c0c6c446d5c30e3c',
};
let loc;

firebase.initializeApp(firebaseConfig);

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  saveMessage(name, email, phone, subject, message);

  console.log(name, email, phone, subject, message);
  // alert('Thank You For Your Feedback, I will contact You');
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, subject, message) {
  var uid = uuidv4();
  var messagesRef = firebase.database().ref(`contact/${uid}`);
  var message = {
    id: uid,
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
    modifiedDate: new Date().toISOString(),
    location: loc,
  };
  messagesRef
    .set(message)
    .then(() => {
      alert('Thank You For Your Feedback, I will contact You');
      document.getElementById('contact-form').reset();
    })
    .catch((err) => {
      alert('Something went wrong, Please try again :: Error: ', err);
    });
}

function getIpAddr() {
  // https://api.ipify.org?format=json
  fetch('https://api.ipify.org?format=json')
    .then((res) => res.json())
    .then((data) => {
      loc = data;
    })
    .catch((err) => {
      console.log(err);
    });
}
getIpAddr();

Object.defineProperty(window, 'console', {
  value: console,
  writable: false,
  configurable: false,
});

var i = 0;
function showWarningAndThrow() {
  if (!i) {
    setTimeout(function () {
      console.log(
        '%cWarning message',
        'font: 2em sans-serif; color: yellow; background-color: red;'
      );
    }, 1);
    i = 1;
  }
  throw 'Console is disabled';
}

var l,
  n = {
    set: function (o) {
      l = o;
    },
    get: function () {
      showWarningAndThrow();
      return l;
    },
  };
Object.defineProperty(console, '_commandLineAPI', n);
Object.defineProperty(console, '__commandLineAPI', n);
