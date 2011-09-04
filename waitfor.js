'use strict';


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

