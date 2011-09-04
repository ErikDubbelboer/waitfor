
var waitfor = require('./waitfor');


// Advanced example, wait until an inner waitfor and a setTimeout are done.
waitfor.start(function(wait) {
  console.log('example 3 starting');

  // Start another waitfor to wait on some tings.
  waitfor.start(function(wait2) {
    setTimeout(wait2(function() {
      console.log('after 2 seconds');
    }), 2000);
  }, wait(function() { // Removing this wait will make the outer waitfor finish without witing for this inner one.
    console.log('inner waitfor done');
  }));


  setTimeout(wait(function() {
    console.log('after 1 seconds');
  }), 1000);
}, function() {
  console.log('example 3 done');
});

