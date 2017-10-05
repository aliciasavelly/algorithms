class Graph {
  constructor() {
    this.vertices = [];
    this.edges = [];
    this.numberOfEdges = 0;
  }

  addVertex(vertex) {
    this.vertices.push(vertex);
    this.edges[vertex] = [];
  }

  removeVertex(vertex) {
    const index = this.vertices.indexOf(vertex);

    if (index != -1) {
      this.vertices.splice(index, 1);
    }

    while (this.edges[vertex].length) {
      const adjVertex = this.edges[vertex].pop();
      this.removeEdge(adjVertex, vertex);
    }
  }

  addEdge(v1, v2) {
    this.edges[v1].push(v2);
    this.edges[v2].push(v1);
    this.numberOfEdges++;
  }


}
