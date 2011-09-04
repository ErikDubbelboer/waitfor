
var waitfor = require('./waitfor');


// Intermediate example, wait until multiple setTimeouts are done.
waitfor.start(function(wait) {
  console.log('example 2 starting');

  setTimeout(wait(function() {
    console.log('after 1 second');

    for (var i = 0; i < 5; ++i) {
      setTimeout(wait(function() {
        console.log('after waiting some more seconds');
      }), i*1000);
    }
  }), 1000);
}, function() {
  // Do things here that require waiting for all the setTimeouts.
  console.log('exampe 2 done');
});

