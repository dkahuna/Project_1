var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.1447034, lng: -86.8026551},
    zoom: 19
  });
}

$(function(){
// NavBar Functions
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAEqy1w_rA9vaam91TGLOswjXOkNb5I3GE",
    authDomain: "vandy-d634c.firebaseapp.com",
    databaseURL: "https://vandy-d634c.firebaseio.com",
    projectId: "vandy-d634c",
    storageBucket: "vandy-d634c.appspot.com",
    messagingSenderId: "1053278871795",
    appId: "1:1053278871795:web:6f9a35ff32a59b57"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // This is the API Key I created to use for our project
  //      AIzaSyADMNx7k6A0tejOvnLkPAKeslgegtlfhLs     //google map api key
  
  $(".map-launch").click(function() {
    $("#map").css("display","inherit");
    $(".map-launch").css("display", "none");
  });


  $("#list").click(function() {
    openNav();
  });

  $("#closebtn").click(function() {
    closeNav();
  });

  });