// Complete your closures exercises here
var nonsense = function(string) {
  var blab = function() {
    alert(string);
  };
  return blab;
};

var blabLater = nonsense('hello');
var blabAgainLater = nonsense('goodbye');

var lastNameTrier = function(firstName) {
  var innerFunction = function(lastName) {
    return firstName + lastName;
  };

  return innerFunction;
};

var firstNameFarmer = lastNameTrier('Farmer');
firstNameFarmer('Brown');

var storyWriter = function() {
  var story = '';

  return {
    addWords: function(word) {
      story += word;
      return story;
    },
    erase: function() {
      story = '';
    }
  };
};

var Toaster = function() {
  var state = 0; // off

  var offOn = function() {
    state = !state;
  }

  return {
    toast: function(food) {
      return 'Your ' + food + ' is now toasty';
    },
    turnOn: function() {
      if (state) {
        return 'The toaster is already on!';
      } else {
        switchState();
        return 'The toaster is now on';
      }
    },
    turnOff: function() {
      if (state) {
        switchState();
        return 'The toaster is now off';
      } else {
        return 'The toaster is already off!';
      }
    }
  }
};

var checkAttendanceFunc = function(nameArr){
    var resultArr = [];
    for(var i = 0; i < nameArr.length; i++){
      (function(idx){
        resultArr.push(function(){ console.log('Is', nameArr[idx], 'present?', idx)})
      })(i);
    };
    return resultArr;
};








































