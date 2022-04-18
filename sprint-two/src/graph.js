

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.count = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var index = this.count;
  index++;
  this.storage[node] = {value: node};
  this.storage[node].edge = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var connectedNodes = this.storage[node].edge;
  // for (var edgeNode in connectedNodes) {
  //   edgeNode.edge[node] = undefined;
  // }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var to = this.storage[toNode];
  var fro = this.storage[fromNode];

  if ((to === undefined) || (fro === undefined)) {
    return false;
  }

  if (to.edge[fromNode]) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var to = this.storage[toNode];
  var fro = this.storage[fromNode];
  to.edge[fromNode] = fro;
  fro.edge[toNode] = to;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var to = this.storage[toNode];
  var fro = this.storage[fromNode];
  delete to.edge[fromNode];
  delete fro.edge[toNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var vertex in this.storage) {
    cb(vertex);
  }
};

Graph.prototype.size = function() {
  var count = 0;
  for (var key in this.storage) {
    if (key > 0) {
      count++;
    }
  }
  return count;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


