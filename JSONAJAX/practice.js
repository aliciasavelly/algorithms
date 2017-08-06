var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xmlhttp = new XMLHttpRequest();
let htmlPage;

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    htmlPage = JSON.parse(this.responseText);
    logPage(htmlPage);
  }
}

xmlhttp.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
xmlhttp.send('');

function logPage(arr) {
  console.log(arr);
  htmlPage.forEach( el => {
    console.log(el);
  });
}
