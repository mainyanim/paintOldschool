var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");
var ifMouseDown = false;
var mouseX = 0;
var mouseY = 0;

context.strokeStyle = "#000000"; // drawing black lines.

canvas.addEventListener("mousedown",function (evt) {
    ifMouseDown = true;

    mouseX = evt.offsetX;
    mouseY = evt.offsetY;

    context.beginPath();
    context.moveTo(mouseX, mouseY);
});

window.addEventListener("mouseup",function (evt) {
    ifMouseDown = false;
});

canvas.addEventListener("mousemove",function (evt) {
    if (ifMouseDown) {
        mouseX = evt.offsetX;
        mouseY = evt.offsetY;

        context.lineTo(mouseX, mouseY);
        context.stroke();
    }
});

var actions = document.createElement("div");
document.body.appendChild(actions);

var clearAll = document.createElement("BUTTON");
clearAll.id = "clearBtn";
clearAll.textContent = "Clear";
clearAll.addEventListener("click", function (evt) {
canvas.width = canvas.width;
});
actions.appendChild(clearAll);

   var palette = document.createElement("UL");
   palette.setAttribute("id", "myUL");
   actions.appendChild(palette);

   var col1 = document.createElement("LI");
   col1.setAttribute("id","black");
   col1.className = "active";
   col1.style.backgroundColor = "black";
   palette.appendChild(col1);

   var col2 = document.createElement("LI");
   col2.id = ("id", "red");
   col2.style.backgroundColor = "red";
   palette.appendChild(col2);

   var col3 = document.createElement("LI");
   col3.id = ("id", "green");
   col3.style.backgroundColor = "green";
   palette.appendChild(col3);

   var col4 = document.createElement("LI");
   col4.id = ("id", "blue");
   col4.style.backgroundColor = "blue";
   palette.appendChild(col4);

   var col5 = document.createElement("LI");
   col5.id = ("id", "yellow");
   col5.style.backgroundColor = "yellow";
   palette.appendChild(col5);

   var col6 = document.createElement ("LI");
   col6.id = ("id", "white");
   col6.style.backgroundColor = "white";
   palette.appendChild(col6);

   var swatches = palette.children;

   var selectedSwatch;

for (var i=0; i < swatches.length; i++) {
  var swatch = swatches[i];
  if (i == 0) {
    currentSwatch = swatch;
  }

  swatch.addEventListener("click", function (evt) {
    this.className = "active";
    currentSwatch.className = "";
    currentSwatch = this;
    context.strokeStyle = this.style.backgroundColor;
  });
}
