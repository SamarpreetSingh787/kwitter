
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC4z0eXt7YHjuYsO2BVNW7mMtVibVwB3g4",
    authDomain: "kwitter-5633b.firebaseapp.com",
    databaseURL: "https://kwitter-5633b-default-rtdb.firebaseio.com",
    projectId: "kwitter-5633b",
    storageBucket: "kwitter-5633b.appspot.com",
    messagingSenderId: "405310834853",
    appId: "1:405310834853:web:32b2a59640cc923a19654c"
  };
  firebase.initializeApp(firebaseConfig);

  user_n = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome "+user_n+"!";

  function add_room() {
    Room_n = document.getElementById("room_name").value;
    firebase.database().ref("/").child(Room_n).update({purpose : "adding room name"});
    localStorage.setItem("room_name" , Room_n);
    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       //console.log("Room name - " +Room_n);
       row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)' >#"+Room_names + "</div> <hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect(name) {
   console.log(name);
   localStorage.setItem("room_name" , name);
   window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}