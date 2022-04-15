class Queue {
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

  enqueue(value) {
    this.storage[this.size() + 1] = value;
  }

  dequeue() {
    var result = this.storage[1];
    if (this.size()) {
      for (var i = 1; i < this.size(); i++) {
        this.storage[i] = this.storage[i + 1];
      }
      delete this.storage[this.size()];
    }
    return result;
  }

}
