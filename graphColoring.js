function GraphNode(label) {
  this.label = label;
  this.neighbors = new Set();
  this.color = null;
}

let a = new GraphNode("a");
let b = new GraphNode("b");
let c = new GraphNode("c");

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

let graph = [a, b, c];

let d = new GraphNode("d");
let e = new GraphNode("e");
let f = new GraphNode("f");
let g = new GraphNode("g");
let h = new GraphNode("h");
let i = new GraphNode("i");
let j = new GraphNode("j");
let k = new GraphNode("k");
let l = new GraphNode("l");
let m = new GraphNode("m");
let n = new GraphNode("n");
let o = new GraphNode("o");

d.neighbors.add(e);
d.neighbors.add(f);
d.neighbors.add(o);
e.neighbors.add(d);
e.neighbors.add(h);
e.neighbors.add(i);
f.neighbors.add(d);
f.neighbors.add(o);
f.neighbors.add(g);
g.neighbors.add(f);
g.neighbors.add(h);
g.neighbors.add(k);
h.neighbors.add(e);
h.neighbors.add(g);
h.neighbors.add(i);
i.neighbors.add(e);
i.neighbors.add(h);
i.neighbors.add(j);
j.neighbors.add(i);
j.neighbors.add(k);
j.neighbors.add(l);
k.neighbors.add(g);
k.neighbors.add(m);
k.neighbors.add(j);
l.neighbors.add(m);
l.neighbors.add(n);
l.neighbors.add(j);
m.neighbors.add(n);
m.neighbors.add(k);
m.neighbors.add(l);
n.neighbors.add(o);
n.neighbors.add(m);
n.neighbors.add(l);
o.neighbors.add(d);
o.neighbors.add(f);
o.neighbors.add(n);

let graph2 = [d, e, f, g, h, i, j, k, l, m, n, o];

function colorGraph(graph) {
  let allColors = ["red", "green", "blue", "yellow", "purple", "orange", "brown", "pink"];
  let max = 0;
  let colors = new Set();

  graph.forEach(node => {
    max = findMaxDegree(node, max);
  });

  let numColors = max + 1;

  for (let i = 0; i < numColors; i++) {
    colors.add(allColors[i]);
  }

  let coloredNodes = [];
  graph.forEach(node => {
    coloredNodes.push(node.label);
    colorNodes(node, coloredNodes, colors);
  });

  return colors;
}

function colorNodes(node, coloredNodes, colors) {

}

function findMaxDegree(startNode, max) {
  if (startNode.neighbors.size > max) {
    max = startNode.neighbors.size;
  }

  return max;
}

console.log(colorGraph(graph));
console.log("-----");
console.log(colorGraph(graph2));
