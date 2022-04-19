var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    node = Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }

  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }

    result = list.head.value;
    next = list.head.next;
    delete list.head;
    list.head = next;
    delete list.next;
    return result;
  };

  list.contains = function(target) {
    if (list.head.value === null) {
      return false;
    }
    if (list.head.value === target) {
      return true;
    }
    if (this.next === null) {
      return false;
    }

    var checkNext = function(node) {
      if (node === null) {
        return false;
      }
      if (node.value === target) {
        return true;
      }
      if (node.next !== null) {
        return checkNext(node.next);
      }
    };
    return checkNext(list.head.next) || false;
  };


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

  linear or O(n). each node must be checked in order without skipping.
 */
