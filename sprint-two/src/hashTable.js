
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  var inserted = false;
  for (var i = 0; i < bucket.length; i += 2) {
    if (bucket[i] === k) {
      bucket[i] = k;
      bucket[i + 1] = v;
      inserted = true;
    }
  }
  if (!inserted) {
    bucket.push(k, v);
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i += 2) {
    if (k === bucket[i]) {
      return bucket[i + 1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  this.insert(k, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */