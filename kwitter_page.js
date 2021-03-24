//YOUR FIREBASE LINKS
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

    user_n=localStorage.getItem("user_name");
    room_n=localStorage.getItem("room_name");

function send() {
      messg=document.getElementById("msg").value;
      firebase.database().ref(room_n).push({
            name:user_n,
            msg:messg,
            like:0
      })
}

function getData() {
       firebase.database().ref("/"+room_n).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['msg'];
like=message_data['like'];
namewtg="<h4> "+name+"<img class='user_tick' src='tick.png'></h4>";
msgwtg="<h4 class='message_h4'>"+message+"</h4>";
like_btn="<button class='btn btn-warning' id="+firebase_message_id+ " value="+like+" onclick='upt_like(this.id)'>";
spanwtg="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

row=namewtg+msgwtg+like_btn+spanwtg;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function upt_like(message_id) {
      console.log("Clicked on like button - "+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      upt_likes=Number(likes)+1;
      console.log(upt_likes);
      firebase.database().ref(room_n).child(message_id).update({
            like:upt_likes
      });
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}