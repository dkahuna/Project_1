// Google's library call for the map
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.1447034, lng: -86.8026551},
    zoom: 19
  });
  var marker = new google.maps.Marker({
    position: {lat: 36.145353, lng: -86.802771},
    map: map,
    title: "A",
    animation: google.maps.Animation.Bounce,
    draggable: true
  });
  
  var marker01 = new google.maps.Marker({
    position: {lat: 36.144912, lng: -86.803641},
    map: map,
    title: "B",
    animation: google.maps.Animation.Bounce,
    draggable: true
  });

var marker02 = new google.maps.Marker({
  position: {lat: 36.144631, lng: -86.802620},
  map: map,
  title: "C",
  animation: google.maps.Animation.BOUNCE,
  
})

  infoWindow = new google.maps.InfoWindow;
 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('HERE');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
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
    initMap();
  });
  
  // Open and Closing tab for user(Lines 43-49)
  $("#list").click(function() {
    openNav();
  });
  
  $("#closebtn").click(function() {
    closeNav();
  });
  
  
});