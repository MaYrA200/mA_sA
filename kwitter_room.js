
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyCqxVrwT1ILrsjw_gCTsJGkshuiKNihImE",
      authDomain: "kwitter-253b0.firebaseapp.com",
      databaseURL: "https://kwitter-253b0-default-rtdb.firebaseio.com",
      projectId: "kwitter-253b0",
      storageBucket: "kwitter-253b0.appspot.com",
      messagingSenderId: "948694408725",
      appId: "1:948694408725:web:b1e5aee11fcd047893781c",
      measurementId: "G-L3NS9HWVE5"
    };
    
    // Initialize Firebase
firebas.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + ".";

function addRoom()
{
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref ("/").child (room_name).update ({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
      
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     console.log("room name is - " + Rome_names);
     row = "<div class = 'room_name' id = "+ Room_names + "onclick = 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

      });
});
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";

}

function logOut()
 {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}