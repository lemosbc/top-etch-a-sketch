var cell;

function makeDivs(numDivs) {
  for (let i = 0; i < numDivs; i++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    document.getElementById("container").appendChild(cell);
  }
}

makeDivs(256);

let cellList = document.getElementsByClassName("cell");
for (let i = 0; i < cellList.length; i++) {
  cellList[i].addEventListener("mouseover", function () {
    cellList[i].style.backgroundColor = "pink";
  });
}
