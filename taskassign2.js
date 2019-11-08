var even = function(arr) {
  return arr.filter(val => {
    return val % 2 == 0;
  });
};

var odd = function(arr) {
  return arr.filter(val => {
    return val % 2 != 0;
  });
};

var max = function(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) var max = arr[i];
  }
  return max;
};

var min = function(arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) var min = arr[i];
  }
  return min;
};

var sum = function(arr) {
  return arr.reduce((pre, val) => {
    return val + pre;
  });
};

function process(arr, commands) {
  result = null;
  commands.forEach(cmd => {
    switch (cmd) {
      case "even": {
        result = even(result == null ? arr : result);
        break;
      }
      case "odd": {
        result = odd(result == null ? arr : result);
        break;
      }
      case "max": {
        result = max(result == null ? arr : result);
        break;
      }
      case "min": {
        result = min(result == null ? arr : result);
        break;
      }
      case "sum": {
        result = sum(result == null ? arr : result);
        break;
      }
    }
  });

  return result == 0 || result == null || result == undefined ? [] : result;
}

// Processing

var nums = [1, 2, 3, 5, 7, 8, 9, 6, 10, 11];
var commands = ["even"]; /* To display even numbers array */
var commands = ["even", "min"]; /* To display even minimum value from array */
var commands = ["even", "max"]; /* To display even maximum value from array */
var commands = ["even", "sum"]; /* To display even array sum */

var commands = [
  "odd"
]; /* To display odd array sum */ /* To display odd numbers array */
var commands = ["odd", "min"]; /* To display odd minimum value from array */
var commands = ["odd", "max"]; /* To display odd maximum value from array */
var commands = ["odd", "sum"]; /* To display odd array sum */

var commands = ["even", "odd"];

var res = process(nums, commands);

console.log("Result: ", res);
