var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  extend(storage, stackMethod);
  return storage;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethod = {};
stackMethod.total = 0;
stackMethod.size = function() {
  return this.total;
};

stackMethod.push = function(value) {
  this.total ++;
  var index = this.total + '';
  this[index] = value;
};

stackMethod.pop = function() {
  if (this.total > 0) {
    index = this.total + '';
    var result = this[index];
    delete this[index];
    this.total -= 1;
    return result;
  }
};