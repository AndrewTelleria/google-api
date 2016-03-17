var map;
var portland;
var path;
var request;

var locationArray = [
  [45.520786, -122.677733, 114, 13, 1],//epicodus
  [45.522636, -122.673347, 100, 0, 0] //voodoo
];

exports.initialize = function(lat, long, heading, pitch, zoom) {
  lat = lat;
  long = long;
  heading = heading;
  pitch = pitch;
  zoom = zoom;
  portland = {lat: lat, lng: long};
  var destination = {lat: lat, lng: long};
  var epicodus = {lat: 45.520786, lng: -122.677733};
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();


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
};

function animateCircle(line) {
  var count = 0;
  window.setInterval(function() {
    count = (count + 1) % 200;

    var icons = line.get('icons');
    icons[0].offset = (count / 2) + '%';
    line.set('icons', icons);
  }, 20);
};
