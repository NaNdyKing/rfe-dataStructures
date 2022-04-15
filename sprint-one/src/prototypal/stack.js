var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(stackMethods);
  return storage;
};

var stackMethods = {};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods = {};
stackMethods.total = 0;
stackMethods.size = function() {
  return this.total;
};

stackMethods.push = function(value) {
  this.total ++;
  var index = this.total + '';
  this[index] = value;
};

stackMethods.pop = function() {
  if (this.total > 0) {
    index = this.total + '';
    var result = this[index];
    delete this[index];
    this.total -= 1;
    return result;
  }
};