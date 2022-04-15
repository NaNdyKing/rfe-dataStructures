var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  extend(storage, queueMethods);
  return storage;
};

var extend = function(base, extension) {
  for (var key in extension) {
    base[key] = extension[key];
    //replaces shared key/property keys in base with extension
  }
};

var queueMethods = {};

queueMethods.total = 0;

queueMethods.enqueue = function(item) {
  //add item at end and increase total
  var index = (this.total + 1) + '';
  this[index] = item;
  this.total ++;
};

queueMethods.dequeue = function() {
  //remove first item and -1 to each index

  if (this.total) {
    var result = this[1];
    for (var i = 1; i < this.total; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.total];
    this.total --;
  }

  return result;
};

queueMethods.size = function() {
  return this.total;
};


