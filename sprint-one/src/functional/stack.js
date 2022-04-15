var Stack = function() {
  var someInstance = {};
  var total = 0;
  // Use an object with numeric keys to store values
  var storage = {
  };

  // Implement the methods below
  someInstance.push = function(value) {
    total++;
    index = JSON.stringify(total);
    storage[index] = value;
  };

  someInstance.pop = function() {
    var result = storage[total];
    delete storage.size;
    if (total > 0) {
      total -= 1;
    }
    return result;
  };

  someInstance.size = function() {
    return total;
  };

  return someInstance;
};
