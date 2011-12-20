
var waitfor = require('./waitfor');


// This will execute the following function in series.
// Each next function will be called once the previous has called the ret() function passed as argument to it.
waitfor.series([
  function(ret) {
    setTimeout(function() {
      console.log('first');

      ret(13);
    }, 1000);
  },
  function(ret) {
    console.log('second');

    ret(37);
    // Not calling the ret function will abort the series.
    // You can try this by commenting out this call.
  },
  function(ret, values) {
    console.dir(values);
  }
]);

