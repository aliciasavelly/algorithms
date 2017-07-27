let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  let ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
  ourRequest.onload = function() {
    let ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
  };
  ourRequest.send();
});
