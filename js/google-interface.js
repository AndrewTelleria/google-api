var map;
var portland;
var path;
var request;
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

  var map = new google.maps.Map(document.getElementById('map'), {
    center: portland,
    zoom: 14
  });

  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });

  request = {
  destination: destination,
  origin: epicodus,
  travelMode: google.maps.TravelMode.TRANSIT

};

var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
    }
  });



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

$('#transitVoodoo').submit(function(event) {
  event.preventDefault();
  initialize(45.522636, -122.673347, 100, 0, 0);
  request.travelMode = google.maps.TravelMode.TRANSIT
});

$('#walkVoodoo').submit(function(event) {
  event.preventDefault();
  initialize(45.522636, -122.673347, 100, 0, 0);
  request.travelMode = google.maps.TravelMode.WALKING
});

$('#driveVoodoo').submit(function(event) {
  event.preventDefault();
  initialize(45.522636, -122.673347, 100, 0, 0);
  request.travelMode = google.maps.TravelMode.DRIVING
});


//providence
$('#providence').submit(function(event) {
initialize(45.522021, -122.690165, 270, 0, 2);
$('#providenceOptions').toggle();
event.preventDefault();
});

$('#transitProvidence').submit(function(event) {
  event.preventDefault();
  initialize(45.522021, -122.690165, 270, 0, 2);
  request.travelMode = google.maps.TravelMode.TRANSIT
});

$('#walkProvidence').submit(function(event) {
  event.preventDefault();
  initialize(45.522021, -122.690165, 270, 0, 2);
  request.travelMode = google.maps.TravelMode.WALKING
});

$('#driveProvidence').submit(function(event) {
  event.preventDefault();
  initialize(45.522021, -122.690165, 270, 0, 2);
  request.travelMode = google.maps.TravelMode.DRIVING
});

//10 barel
$('#10barrel').submit(function(event) {
initialize(45.525777, -122.685391, 330, 0, 1.5);
$('#barrelOptions').toggle();
event.preventDefault();
});

$('#transitBarrel').submit(function(event) {
  event.preventDefault();
  initialize(45.525777, -122.685391, 330, 0, 1.5);
  request.travelMode = google.maps.TravelMode.TRANSIT
});

$('#walkBarrel').submit(function(event) {
  event.preventDefault();
  initialize(45.525777, -122.685391, 330, 0, 1.5);
  request.travelMode = google.maps.TravelMode.WALKING
});

$('#driveBarrel').submit(function(event) {
  event.preventDefault();
  initialize(45.525777, -122.685391, 330, 0, 1.5);
  request.travelMode = google.maps.TravelMode.DRIVING
});

//hop works
$('#hopWorks').submit(function(event) {
initialize(45.497276, -122.635482, 130, 0, 3.5);
$('#hopOptions').toggle();
event.preventDefault();
});

$('#transitHop').submit(function(event) {
  event.preventDefault();
  initialize(45.497276, -122.635482, 130, 0, 3.5);
  request.travelMode = google.maps.TravelMode.TRANSIT
});

$('#walkHop').submit(function(event) {
  event.preventDefault();
  initialize(45.497276, -122.635482, 130, 0, 3.5);
  request.travelMode = google.maps.TravelMode.WALKING
});

$('#driveHop').submit(function(event) {
  event.preventDefault();
  initialize(45.497276, -122.635482, 130, 0, 3.5);
  request.travelMode = google.maps.TravelMode.DRIVING
});

//mode center
$('#modaCenter').submit(function(event) {
  console.log("moda");
initialize(45.530541, -122.666653, 10, 20, 2);
$('#modaOptions').toggle();
event.preventDefault();
});

$('#transitModa').submit(function(event) {
  event.preventDefault();
  initialize(45.530541, -122.666653, 10, 20, 2);
  request.travelMode = google.maps.TravelMode.TRANSIT
});

$('#walkModa').submit(function(event) {
  event.preventDefault();
  initialize(45.530541, -122.666653, 10, 20, 2);
  request.travelMode = google.maps.TravelMode.WALKING
});

$('#driveModa').submit(function(event) {
  event.preventDefault();
  initialize(45.530541, -122.666653, 10, 20, 2);
  request.travelMode = google.maps.TravelMode.DRIVING
});

//epicodus
$('#epicodus').submit(function(event) {
  initialize(45.520786, -122.677733, 114, 13, 1);
  $('#epiOptions').toggle();
event.preventDefault();
});

$('#transitEpi').submit(function(event) {
  event.preventDefault();
  initialize(45.520786, -122.677733, 114, 13, 1);
  request.travelMode = google.maps.TravelMode.TRANSIT
});

$('#walkEpi').submit(function(event) {
  event.preventDefault();
  initialize(45.520786, -122.677733, 114, 13, 1);
  request.travelMode = google.maps.TravelMode.WALKING
});

$('#driveEpi').submit(function(event) {
  event.preventDefault();
  initialize(45.520786, -122.677733, 114, 13, 1);
  request.travelMode = google.maps.TravelMode.DRIVING
});

});
