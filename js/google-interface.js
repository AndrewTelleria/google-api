var map;
var portland;
var path;
var request;

var locationArray = [
  [45.520786, -122.677733, 114, 13, 1],//epicodus
  [45.522636, -122.673347, 100, 0, 0] //voodoo
];
// var lat;
// var long;
function initialize(lat, long, heading, pitch, zoom) {
  lat = lat;
  long = long;
  heading = heading;
  pitch = pitch;
  zoom = zoom;
  portland = {lat: lat, lng: long};
  var destination = {lat: lat, lng: long};
  var epicodus = {lat: 45.520786, lng: -122.677733};
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;


  var map = new google.maps.Map(document.getElementById('map'), {
           zoom: 14,
           center: epicodus
         });
         directionsDisplay.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsDisplay);
    document.getElementById('mode').addEventListener('change', function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
 });


function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var selectedMode = document.getElementById('mode').value;
  directionsService.route({
    origin: {lat: 45.520786, lng: -122.677733},  // Haight.
    destination: {lat: lat, lng: long},  // Ocean Beach.
    // Note that Javascript allows us to access the constant
    // using square brackets and a string value as its
    // "property."
    travelMode: google.maps.TravelMode[selectedMode]
  }, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}




  var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: portland,
        pov: {
          heading: heading,
          pitch: pitch,
          zoom: zoom
        }
      });
  map.setStreetView(panorama);

  var lineSymbol = {
    path: google.maps.SymbolPath.FORWARD_OPEN_ARROW,
    scale: 8,
    strokeColor: '#393'
  };

  var line = new google.maps.Polyline({
    path: [{lat: 45.520786, lng: -122.677733}, {lat: lat, lng: long}],
    icons: [{
      icon: lineSymbol,
      offset: '100%'
    }],
    map: map
  });

 animateCircle(line);
}

function animateCircle(line) {
  var count = 0;
  window.setInterval(function() {
    count = (count + 1) % 200;

    var icons = line.get('icons');
    icons[0].offset = (count / 2) + '%';
    line.set('icons', icons);
  }, 20);
}




$(document).ready(function() {

  initialize(45.520786, -122.677733, 114, 13, 1);

  //vodoo
  $('#voodoo').submit(function(event) {
    initialize(45.522636, -122.673347, 100, 0, 0);
    $('#voodooOptions').toggle();
    event.preventDefault();
  });

  //providence
  $('#providence').submit(function(event) {
    initialize(45.522021, -122.690165, 270, 0, 2);
    $('#providenceOptions').toggle();
    event.preventDefault();
  });

  //10 barel
  $('#10barrel').submit(function(event) {
    initialize(45.525777, -122.685391, 330, 0, 1.5);
    $('#barrelOptions').toggle();
    event.preventDefault();
  });

  //hop works
  $('#hopWorks').submit(function(event) {
    initialize(45.497276, -122.635482, 130, 0, 3.5);
    $('#hopOptions').toggle();
    event.preventDefault();
  });

  //mode center
  $('#modaCenter').submit(function(event) {
    console.log("moda");
    initialize(45.530541, -122.666653, 10, 20, 2);
    $('#modaOptions').toggle();
    event.preventDefault();
  });

  //epicodus
  $('#epicodus').submit(function(event) {
    initialize(45.520786, -122.677733, 114, 13, 1);
    $('#epiOptions').toggle();
    event.preventDefault();
  });
});
