// Complete your callbacks exercises here
var funcCaller = function(func, arg) {
  return func(arg);
};

var firstVal = function(arr, func) {
  if (Array.isArray(arr) === false) {
    for(var key in arr) {
      func(arr[key], key, arr);
      break;
    }
  } else {
    func(arr[0], 0, arr)
  }
};

var once = function(func) {
  var alreadyCalled = false;
  var result;

  return function() {
    if (!alreadyCalled) {
      result = func();
      alreadyCalled = false;
    }

    return result;
  };
}

var chargeCreditCard = function(num, price) {

};

var processPaymentOnce = once(chargeCreditCard);
processPaymentOnce(12323, 200);
