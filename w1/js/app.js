function changeColor(newColor) {
  var elem = document.getElementById('welcome');
  elem.style.color = newColor;
  document.getElementById('welcome').innerHTML = 'Look Around';
}

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}