class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    var count = 0;
    for (var key in this.storage) {
      if (key > 0) {
        count++;
      }
    }
    return count;
  }

  push(value) {
    this.storage[this.size() + 1] = value;
  }

  pop() {
    var result = this.storage[this.size()];
    delete this.storage[this.size()];
    return result;
  }

}