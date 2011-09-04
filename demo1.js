
var waitfor = require('./waitfor');


// Simple example, wait until setTimeout is done.
waitfor.start(function(wait) {
  console.log('example 1 starting');

  setTimeout(wait(function() {
    console.log('after 1 second');
  }), 1000);
}, function() {
  // Do everything depending on the result of the setTimeout here.
  console.log('exampe 1 done');
});

