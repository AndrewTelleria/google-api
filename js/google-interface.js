var initialize = require('./../js/map.js').initialize;



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
