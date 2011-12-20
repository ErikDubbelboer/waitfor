'use strict';


// Wait for all callbacks in body() to finish before calling after().
// See demo1.js, demo2.js and demo3.js
exports.start = function(body, after) {
  var count = 0;

  var wait = function(f) {
    ++count;

    return function() {
      f.apply(this, arguments);

      if (--count == 0) {
        after();
      }
    };
  };

  wait(body)(wait);
};


// Execute function in order. See demo4.js
exports.series = function() {
  var n = 0;
  var a = arguments[0];
  var r = [];

  var callback = function(v) {
    if (n > 0) {
      r[n - 1] = v;
    }

    if (n >= a.length) {
      return;
    }

    a[n++](callback, r);
  };

  callback();
};

