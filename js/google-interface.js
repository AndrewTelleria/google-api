var map;
var portland;
// var lat;
// var long;
function initialize(lat, long) {
  var lat = lat;
  var long = long;
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
          heading: 34,
          pitch: 10
        }
      });
  map.setStreetView(panorama);
}

$(document).ready(function() {
  initialize(45.520786, -122.677733);
  $('#voodoo').submit(function(event) {
  initialize(45.522636, -122.673347);
  event.preventDefault();
  });

  $('#providence').submit(function(event) {
  initialize(45.522021, -122.690165);
  event.preventDefault();
  });

  $('#10barrel').submit(function(event) {
  initialize(45.525777, -122.685391);
  event.preventDefault();
  });

  $('#hopWorks').submit(function(event) {
  initialize(45.496937, -122.634874);
  event.preventDefault();
  });
});
