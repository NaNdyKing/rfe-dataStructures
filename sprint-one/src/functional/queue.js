var Queue = function() {
  var someInstance = {};
  var total = 0;
  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add value at the end of the queue
    total++;
    index = total + '';
    storage[index] = value;
  };

  someInstance.dequeue = function() {
    // removes item at the beginning of the queue and moves each item 1 position forward
    if (total > 0) {
      var result = storage['1'];
      for (var i = 1; i < total; i++) {
        storage[i] = storage[i + 1];
      }
      delete storage [JSON.stringify(total)];
      total -= 1;
    }
    return result;
  };

  someInstance.size = function() {
    return total;
  };

  return someInstance;
};
