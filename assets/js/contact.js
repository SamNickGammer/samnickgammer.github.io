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

var messagesRef = firebase.database().ref('contact-form');

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

  document.getElementById('contact-form').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, subject, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  });
}
