// Initialize global variables

var cell;
let side;
let cellList;

// Define functions

function makeDivs(numDivs) {
  for (let i = 0; i < numDivs; i++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    document.getElementById("container").appendChild(cell);
  }
  cellList = document.getElementsByClassName("cell");
  for (let i = 0; i < cellList.length; i++) {
    cellList[i].addEventListener("mouseover", function () {
      cellList[i].style.backgroundColor = "pink";
    });
  }
}

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function gridLayout(gridSide) {
  document.getElementById(
    "container"
  ).style.gridTemplateColumns = `repeat(${gridSide}, 1fr)`;
  document.getElementById(
    "container"
  ).style.gridTemplateRows = `repeat(${gridSide}, 1fr)`;
}

function promptMe() {
  do {
    side = prompt("Enter number of squares per side (max 100)");
  } while (side > 100);

  sideSquared = side * side;

  removeElementsByClass("cell");

  makeDivs(sideSquared);

  gridLayout(side);
}

// Rainbow function

function colorChangeOnHover() {
  let chosenColor;
  function randomColor() {
    function randomBetween(min, max) {
      let number;
      number = min + Math.floor(Math.random() * (max - min + 1));
      return number;
    }
    let r = randomBetween(0, 255);
    let g = randomBetween(0, 255);
    let b = randomBetween(0, 255);
    chosenColor = `rgb(${r},${g},${b})`;
    return chosenColor;
  }
  cellList = document.getElementsByClassName("cell");
  for (let i = 0; i < cellList.length; i++) {
    cellList[i].addEventListener("mouseover", function () {
      cellList[i].style.backgroundColor = `${randomColor()}`;
    });
  }
}

// Event Listeners

document.getElementById("grid-button").addEventListener("click", promptMe);
document.getElementById("clear").addEventListener("click", function () {
  location.reload();
});

document
  .getElementById("rainbow")
  .addEventListener("click", colorChangeOnHover);

// Call default grid

makeDivs(256);
