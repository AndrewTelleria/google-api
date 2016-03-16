var map;
var portland;
// var lat;
// var long;
function initialize(lat, long, heading, pitch, zoom) {
  var lat = lat;
  var long = long;
  var heading = heading;
  var pitch = pitch;
  var zoom = zoom;
  var portland = {lat: lat, lng: long};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: portland,
    zoom: 14
  });



  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);

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








}

$(document).ready(function() {
  initialize(45.520786, -122.677733, 114, 13, 1);
  $('#voodoo').submit(function(event) {
  initialize(45.522636, -122.673347, 100, 0);
  event.preventDefault();
  });

  $('#providence').submit(function(event) {
  initialize(45.522021, -122.690165, 270, 0, 2);
  event.preventDefault();
  });

  $('#10barrel').submit(function(event) {
  initialize(45.525777, -122.685391, 330, 0, 1.5);
  event.preventDefault();
  });

  $('#hopWorks').submit(function(event) {
  initialize(45.497276, -122.635482, 130, 0, 3.5);
  event.preventDefault();
  });

  $('#modaCenter').submit(function(event) {
  initialize(45.530541, -122.666653, 10, 20, 2);
  event.preventDefault();
  });

  $('#epicodus').submit(function(event) {
    initialize(45.520786, -122.677733, 114, 13, 1);
  event.preventDefault();
  });

  $('#falls').submit(function(event) {
    initialize(45.57462, -122.12762, 280, 9, 1);
  event.preventDefault();
  });

});
