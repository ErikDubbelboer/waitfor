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


// Execute functions in order. See demo4.js
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


// Perform a callback on each member of an array. See demo5.js
exports.each = function(arr, cb, after) {
  function next(i) {
    if (i == arr.length) {
      after();
      return;
    }

    cb(arr[i], function(stop) {
      if (!stop) {
        next(i + 1);
      }
    });
  }

  next(0);
};


// Try executing a callback after predefined timeouts. See demo6.js
exports.retry = function(timeouts, cb) {
  function next(i) {
    if (i == timeouts.length) {
      cb(null);
      return;
    }

    setTimeout(function() {
      cb(function() {
        next(i + 1);
      });
    }, timeouts[i] * 1000);
  }

  next(0);
};

