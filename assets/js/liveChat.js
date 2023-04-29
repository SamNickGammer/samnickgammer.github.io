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

const userList = document.querySelector(".userList");
const messageList = document.querySelector(".messageList")

const sendMessageBtn = document.querySelector(".sendMessageBtn")
const textInput = document.querySelector(".textInput")

sendMessageBtn.addEventListener("click", () => {
    var messagesRef = firebase.database().ref("messages/")
})