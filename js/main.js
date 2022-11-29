function toggleMenu() {
  document.getElementsByClassName("left").item(0).classList.toggle('change')
}

function includeHTML(elmnt, file) {
  var xhttp;
  if (file) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        elmnt.innerHTML = this.responseText;
      }
    }
    xhttp.open("GET", file, true);
    xhttp.send();
  }  
}