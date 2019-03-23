function submit() {
  nom = document.getElementById("text1").value;

  var select = document.getElementsByClassName("track")[0];
  console.log(select);
  var strUser = select.value;

  slideN = document.getElementById("text2").value;
  message = document.getElementById("text3").value;
  var data = {
    name: nom,
    track: strUser,
    slidename: slideN,
    message: message
  };
  ref.push(data);
  alert("merci");
}
// Initialize Firebase
var config = {
  apiKey: "AIzaSyC0fZv1aMLGewFHlUZS1NmQ4nHXd1zVZaY",
  authDomain: "checkpoint-a957f.firebaseapp.com",
  databaseURL: "https://checkpoint-a957f.firebaseio.com",
  projectId: "checkpoint-a957f",
  storageBucket: "checkpoint-a957f.appspot.com",
  messagingSenderId: "245042287173"
};
firebase.initializeApp(config);
var database = firebase.database();
var ref = database.ref("forms");

document.querySelector("#form").addEventListener("submit", function(e) {
  e.preventDefault();
  console.log(e);
  submit();
});
