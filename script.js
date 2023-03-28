function setSize() {
  var width = document.getElementById("width-input").value;
  var height = document.getElementById("height-input").value;
  document.querySelector(".rectangle").style.width = width;
  document.querySelector(".rectangle").style.height = height;
}

function setBorderSize() {
  var borderWidth = document.getElementById("border-width-input").value;
  document.querySelector(".rectangle").style.borderWidth = borderWidth;
}

function setBorderColor(color) {
  document.querySelector(".rectangle").style.borderColor = color;
}

function setBorderStyle(style) {
  document.querySelector(".rectangle").style.borderStyle = style;
}

function setBackgroundColor(color) {
  document.querySelector(".rectangle").style.backgroundColor = color;
}