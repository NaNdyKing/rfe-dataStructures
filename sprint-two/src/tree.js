var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; //will
  newTree = extend(newTree, treeMethods);
  return newTree;
};

var extend = function (obj, objExt) {
  for (var key in objExt) {
    obj[key] = objExt[key];
  }
  return obj;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  this.children.push(Tree(value));
};



treeMethods.contains = function (target) {

  if (this.value === target) {
    return true;
  }

  if (this.children.length) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }

  return false;
};

treeMethods.size = function () {
  var count = 0;
  for (var index in this) {
    if (index >= 0) {
      count++;
    }
  }
  return count;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
