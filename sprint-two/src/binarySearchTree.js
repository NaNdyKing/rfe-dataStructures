var BinarySearchTree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.right = null;
  newTree.left = null;
  extend(newTree, binarySearchTreeMethods);
  return newTree;
};

var extend = function (obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
  return obj1;
};

binarySearchTreeMethods = {};

// this is logarithmic time.
binarySearchTreeMethods.insert = function (value) {
  console.log(this);
  if (this.value === null) {
    this.value = value;
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    }
    this.right.insert(value);
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    }
    this.left.insert(value);
  }
};

// this is logarithmic time, each contains check eliminates up to half of the nodes
binarySearchTreeMethods.contains = function (target) {
  if (this.value === null) {
    return false;
  }
  if (this.value === target) {
    return true;
  }
  if (target > this.value) {
    if (this.right === null) {
      return false;
    }
    return this.right.contains(target);
  }
  if (target < this.value) {
    if (this.left === null) {
      return false;
    }
    return this.left.contains(target);
  }
  return false;
};


//this is linear time. Each node must be checked individually
binarySearchTreeMethods.depthFirstLog = function (callback) {
  if (this.value !== null) {
    callback(this.value);
  }

  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }

};




/*
 * Complexity: What is the time complexity of the above functions?

  approaches O(log(n)) as (is there a square root modulo?) as n approaches a power of 2
 */
