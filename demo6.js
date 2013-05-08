
var waitfor = require('./waitfor');


waitfor.retry([
  0, 5, 10, 30, 60  // Number of seconds after which to retry.
], function(next) {
  if (!next) {
    console.log('all failed!');
    return;
  }

  if (Math.random() < 0.5) {
    console.log('success!');
  } else {
    console.log('failed!');
    next();
  }
});

