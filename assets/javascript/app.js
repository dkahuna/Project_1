// Google's library call for the map
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 36.1447034, lng: -86.8026551},
    zoom: 19
  });
  var marker = new google.maps.Marker({
    position: {lat: 36.145353, lng: -86.802771},
    map: map,
    title: "A",
    animation: google.maps.Animation.BOUNCE
  });
  
  var marker01 = new google.maps.Marker({
    position: {lat: 36.144912, lng: -86.803641},
    map: map,
    title: "B",
    animation: google.maps.Animation.BOUNCE
  });

var marker02 = new google.maps.Marker({
  position: {lat: 36.144631, lng: -86.802620},
  map: map,
  title: "C",
  animation: google.maps.Animation.BOUNCE
});

var marker03 = new google.maps.Marker({
    position: {lat: 36.144437, lng: -86.803493},
    map: map,
    title: "D",
    animation: google.maps.Animation.BOUNCE
});

// These are made to demo for a bigger aspect of the app.
var pin00 = new google.maps.Marker({
  position: {lat: 36.146162, lng: -86.803352},
  map: map,
  title: "E",
  icon: "../images/mstile-150x150",
  animation: google.maps.Animation.BOUNCE,
});

var  infoWindow = new google.maps.InfoWindow;
 
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

  
var url = 'https://newsapi.org/v2/everything?' +
'q=Environment&' +
'from=2019-06-15&' +
'sortBy=popularity&' +
'apiKey=d880922dbc9a49ccb187808ce3ffcb46';

var req = new Request(url);

fetch(req)
.then(function (response) {
console.log(response.json().then(function (a) {
console.log(a.articles);
var articles = a.articles;
var clicks = 0;


$("#news-btn").click(function() {

for (var i = 0; i < articles.length; i++) {
var link = articles[i].url;
var image = articles[i].urlToImage;

var articleCard = $("<div>");
articleCard.addClass("card");
articleCard.css({
  "width": "18rem",
  "display": "inline-block",
  "margin": "5px",
  "border": "1px solid #3E3C39",
});


var articleImg = $("<img>");
articleImg.addClass("card-img-top");
articleImg.attr("src", image);
articleCard.append(articleImg);

var articleHead = $("<h5>");
articleHead.addClass("card-title");
articleHead.text(articles[i].title);
articleCard.append(articleHead);

var articleLink = $("<a>");
articleLink.addClass("btn btn-primary");
articleLink.css({
  "background-color": "#42b63e",
  "margin-bottom": "5px",
});
articleLink.attr("href", link);
articleLink.text("Go to Article");
articleCard.append(articleLink);

$("#news").append(articleCard);

};


});
}));


});

  
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