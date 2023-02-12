var cell;

function makeDivs(numDivs) {
  for (let i = 0; i < numDivs; i++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    document.getElementById("container").appendChild(cell);
  }
  let cellList = document.getElementsByClassName("cell");
  for (let i = 0; i < cellList.length; i++) {
    cellList[i].addEventListener("mouseover", function () {
      cellList[i].style.backgroundColor = "pink";
    });
  }
}

makeDivs(256);

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

let side;

function promptMe() {
  do {
    side = prompt("Enter number of squares per side (max 100)");
  } while (side > 100);

  sideSquared = side * side;

  removeElementsByClass("cell");

  makeDivs(sideSquared);

  gridLayout(side);
}

document.getElementById("grid-button").addEventListener("click", promptMe);
