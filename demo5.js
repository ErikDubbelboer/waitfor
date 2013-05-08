
var waitfor = require('./waitfor');


waitfor.each([
  1, 2, 4, 8
], function(value, next) {
  console.log(value);

  if (value == 4) {  // Stop at 4.
    next(true);
  } else {
    next(false);
  }
}, function() {
  console.log('only executed when whole array is done');
});

