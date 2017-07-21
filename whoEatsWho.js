var whoEatsWho = function(zoo) {
  let animalFood = {
    "antelope": new Set(["grass"]),
    "big-fish": new Set(["little-fish"]),
    "bug": new Set(["leaves"]),
    "bear": new Set(["big-fish", "bug", "chicken", "cow", "leaves", "sheep"]),
    "chicken": new Set(["bug"]),
    "cow": new Set(["grass"]),
    "fox": new Set(["chicken", "sheep"]),
    "giraffe": new Set(["leaves"]),
    "lion": new Set(["antelope", "cow"]),
    "panda": new Set(["leaves"]),
    "sheep": new Set(["grass"])
  };

  let dupZoo = zoo.split(",");
  let result = [];

  for (let i = 0; i < dupZoo.length; i++) {
    if (animalFood[dupZoo[i]]) {
      if (dupZoo[i - 1] && animalFood[dupZoo[i]].has(dupZoo[i - 1])) {
        result.push(dupZoo[i] + " eats " + dupZoo[i - 1]);
        dupZoo.splice(i - 1, 1);
        i = -1;
      } else if (dupZoo[i + 1] && animalFood[dupZoo[i]].has(dupZoo[i + 1])) {
        result.push(dupZoo[i] + " eats " + dupZoo[i + 1]);
        dupZoo.splice(i + 1, 1);
        i = -1;
      }
    }
  }

  result.push(dupZoo.join());
  result.unshift(zoo);
  return result;
}
