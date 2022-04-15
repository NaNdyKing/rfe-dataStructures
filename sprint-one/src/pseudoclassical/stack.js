var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.size() + 1] = value;
};

Stack.prototype.pop = function() {
  var container = this.storage;
  var index = this.size();
  var result = container[index];
  delete container[index];
  return result;
};

Stack.prototype.size = function() {
  var count = 0;
  for (var key in this.storage) {
    if (key > 0) {
      count++;
    }
  }
  return count;
};
