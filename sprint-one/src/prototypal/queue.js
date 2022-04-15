var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = Object.create(queueMethods);
  return storage;
};

var queueMethods = {};


queueMethods.total = 0;

// add new item at index of total + 1
queueMethods.enqueue = function(item) {
  var index = (this.total + 1) + '';
  this[index] = item;
  this.total ++;
};

// if 1st, return 1st, decrement each, delete last
queueMethods.dequeue = function() {
  if (this.total) {
    var result = this[1];
    for (var i = 1; i < this.total; i++) {
      this[i] = this[JSON.stringify(i + 1)];
    }
    delete this[this.total + ''];
    this.total - 1;
  }
  return result;
};

queueMethods.size = function() {
  return this.total;
};