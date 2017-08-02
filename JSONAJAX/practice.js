var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xmlhttp = new XMLHttpRequest();
let htmlPage;

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    debugger;
    htmlPage = JSON.parse(this.responseText);
    logPage(htmlPage);
  }
}

xmlhttp.open('GET', 'json.txt');
xmlhttp.send('');

function logPage(arr) {
  console.log(arr);
}
