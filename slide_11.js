/*
 * Scope and context
 */

var x = 10;

(function() {
  var x = 5;

  return x;
}());
//=> 5

(function() {
  return x;
})()
//=> 10

// scope is really tricky in JS!
