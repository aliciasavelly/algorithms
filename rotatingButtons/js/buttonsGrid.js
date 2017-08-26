function rotate() {
  let buttons = ["1", "2", "3", "6", "9", "8", "7", "4"];
  let lastHTML = document.getElementById("btn1").innerHTML;

  for (let i = 1; i < buttons.length; i++) {
    let currentButton = document.getElementById("btn" + buttons[i]);
    let newHTML = currentButton.innerHTML;
    currentButton.innerHTML = lastHTML;
    lastHTML = newHTML;
  }

  document.getElementById("btn1").innerHTML = lastHTML;
}
