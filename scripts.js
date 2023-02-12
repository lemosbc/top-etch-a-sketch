var cell;

function makeDivs(numDivs) {
  for (let i = 0; i < numDivs; i++) {
    cell = document.createElement("div");
    document.getElementById("container").appendChild(cell);
  }
}

makeDivs(256);
