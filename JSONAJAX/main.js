let pageCounter = 1;
let animalContainer = document.getElementById("animal-info");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  let ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);

  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      let ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);

    } else {
      console.log("We connected to the server but it returned an error.");
      alert("We connected to the server but it returned an error.");
    }
  };

  ourRequest.onerror = function() {
    console.log("Connection error.");
    alert("Connection error.");
  };

  ourRequest.send();

  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});

function renderHTML(data) {
  let htmlString = "";

  for (let i = 0; i < data.length; i++) {

    htmlString += `<p>${data[i].name} the ${data[i].species} likes to eat `;
    for (let j = 0; j < data[i].foods.likes.length; j++) {
      if (j == 0) {
        htmlString += data[i].foods.likes[j];
      } else {
        htmlString += ` and ${data[i].foods.likes[j]}`;
      }
    }

    htmlString += ' and dislikes eating ';
    for (let j = 0; j < data[i].foods.dislikes.length; j++) {
      if (j == 0) {
        htmlString += data[i].foods.dislikes[j];
      } else {
        htmlString += ` and ${data[i].foods.dislikes[j]}`;
      }
    }
    
    htmlString += `.</p>`;
  }


  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
