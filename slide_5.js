/*
 * Applying arguments to functions
 */

(function (x) { return x; })(4);
//=> 4

(function () { return function() { return 2; }; })()()
//=> 2

(function (x) { return function (y) { return x + y }; })(2)(3)
//=> 5
