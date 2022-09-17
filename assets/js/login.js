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

//! ----------------------------------- Id/Class Initializer --------------------------------------------

const logoutBtn = document.getElementById('logoutBtn');
const loginScreen = document.getElementById('loginScreen');
const dataScreen = document.getElementById('dataScreen');
const mailPage = document.getElementById('mailPage');
const homePage = document.getElementById('homePage');
const chatPage = document.getElementById('chatPage');
const mailsBodyData = document.getElementById('mailsBodyData');

const reloadBtn = document.querySelector('.reloadBtn');

const overlay = document.getElementById('overlay');

//! -------------------------------------------- Reload Handler --------------------------------------------

reloadBtn.addEventListener('click', () => {
  getDataFirebase();
});

//! -------------------------------------------- LogOut Handler --------------------------------------------
logoutBtn.addEventListener('click', () => {
  firebase.auth().signOut();
  dataScreen.style.display = 'none';
  loginScreen.style.display = 'block';
});

//! -------------------------------------------- Login State Chekcer --------------------------------------------
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('User is signed in');
    loginScreen.style.display = 'none';
    dataScreen.style.display = 'flex';
    getDataFirebase();
    console.log('Auth Sucess');
  } else {
    console.log('No user is signed in');
    loginYourSelf();
  }
});

function loginYourSelf() {
  loginScreen.style.display = 'block';
  document
    .getElementById('login-admin')
    .addEventListener('submit', submitLogin);
}

//! -------------------------------------------- Login Firebase Chekcer --------------------------------------------

function submitLogin(e) {
  e.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      loginScreen.style.display = 'none';
      document.body.style.backgroundColor = 'black';
    })
    .catch((err) => {
      if (err.code === 'auth/wrong-password') {
        alert('Wrong Email/Password');
      } else if (err.code === 'auth/user-not-found') {
        alert('User Not Found...');
      }
    });
}

//! -------------------------------------------- Data Insertion Chekcer --------------------------------------------

// function retriveData() {
//   document.getElementById('dataScreen').style.display = 'block';
//   //console.log('hello');
//   var firebaseRef = firebase.database().ref('contact');
//   //   window.open('./webmail.html');
//   firebaseRef.once('value', function (snapshot) {
//     //var data = snapshot.val();
//     try {
//       var data = Object.values(snapshot.val()).reverse();
//     } catch (error) {
//       document.getElementById('noMsg').style.display = 'block';
//     }

//     //console.log(data);
//     for (let i in data) {
//       // console.log(data[i]);
//       getdataTable(data[i]);
//     }
//   });
// }

//! -------------------------------------------- Data Retrival Chekcer --------------------------------------------
var contactsMail = [];
var contactMailDataId = '';

function getDataFirebase() {
  reloadBtn.children[0].classList.add('fa-spin');
  mailsBodyData.innerHTML = '';

  firebase
    .database()
    .ref('contact/')
    .once('value', function (snapshot) {
      try {
        contactsMail = Object.values(snapshot.val());
      } catch (error) {
        alert("You Don't Have any Data...");
      }
      reloadBtn.children[0].classList.remove('fa-spin');
      if (contactsMail != '') {
        contactsMail.forEach((mail, index) => {
          addMailsToDOM(index, mail);
          //itemClick(index, project);
        });
      }
    });
}

function addMailsToDOM(index, mail) {
  console.log(mail);
  mailsBodyData.innerHTML += `
                      <div class="mailItem">
                            <div style="display: flex;align-items: center;">
                                <div class="mailItemImg">
                                    ${mail.name[0]}
                                </div>
                                <div id="view_${mail.id}" onclick="viewMessage(this.id)">
                                    <div
                                        style="margin-bottom: 5px;display: flex;gap: 20px; font-size: 15px;font-weight: bold;">
                                        <div class="subjectMail">${mail.subject}</div>
                                        <div class="nameMail">${mail.name}</div>
                                        <div class="timeMail">${mail.modifiedDate}</div>
                                    </div>
                                    <div class="textMail">${mail.message}</div>
                                </div>
                            </div>
                            <div class="action">
                                <div class="actionBtn delete" id="delete_${mail.id}" onclick="clickDelete(this.id)">
                                    <i class="fas fa-trash"></i>
                                    <div class="actionSelector">
                                        <div class="actionSelectorInner"></div>
                                    </div>
                                </div>
                                <div class="actionBtn reply">
                                    <i class="fas fa-reply"></i>
                                    <div class="actionSelector">
                                        <div class="actionSelectorInner"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
  `;
}

async function clickDelete(data) {
  const id = data.split('_')[1];
  var realTimeDataBase = firebase.database().ref(`contact/${id}`);
  if (confirm("Really Want to delete! You can't Revocer it.")) {
    await realTimeDataBase.remove();
    // window.location.reload();
    closeModelSet();
    getDataFirebase();
  }
}

function viewMessage(data) {
  const id = data.split('_')[1];
  openModal(document.getElementById('viewModal'));
  contactsMail.forEach((mail) => {
    if (mail.id == id) {
      contactMailDataId = mail.id;
      document.getElementById('viewModal').innerHTML = `
      <div class="boxModalInner">
      <div class="boxModalHeader" style="margin-bottom: 20px;">
          <div class="boxModalHeaderClose" id="delete_${mail.id}" onclick="clickDelete(this.id)">
            <i class="fas fa-trash"></i>
            <span style="margin-left: 10px;">Delete</span>
          </div>
          <div class="boxModalHeaderClose" onclick="closeModelSet()" style="margin-left:10px">
              <i class="fas fa-times"></i>
              <span style="margin-left: 10px;">Close</span>
          </div>
      </div>
      <div style="display: flex;align-items: center;">
          <div class="mailItemImg modalView">${mail.name[0]}</div>
          <div style="margin-left: 10px;width: 90%;">
              <div class="subjectModalView">${mail.subject}</div>
              <div style="font-size: 13px; display: flex;gap: 20px; margin-top: 10px;">
                  <div>${mail.email}</div>
                  <div>${mail.name}</div>
                  <div>${mail.phone}</div>
                  <div>${mail.modifiedDate}</div>
              </div>
          </div>
      </div>
      <div class="simpleScroll" style="display: flex;margin-top: 20px; height: 250px;overflow: auto;">${mail.message}</div>
  </div>
      `;
    }
  });
}

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.boxModal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
function closeModelSet() {
  const modals = document.querySelectorAll('.boxModal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
}
