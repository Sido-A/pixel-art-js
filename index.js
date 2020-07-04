const pixelColors = document.querySelector(".pixel-colors");
const pixelInnerBlocks = document.querySelector(".canvas-inner");
const tds = pixelInnerBlocks.querySelectorAll("td");
const colorArray = [];

pixelColors.addEventListener("click", (e) => {
  const color = e.target.classList.value;
  if (colorArray === []) {
    colorArray.push(color);
  } else if (color === "clear-all") {
    console.log("clear ALLLLL");
    tds.forEach((td) => {
      td.style.backgroundColor = "white";
    });
  } else {
    colorArray.pop();
    colorArray.push(color);
  }
});

tds.forEach((td) => {
  td.addEventListener("click", (e) => {
    const element = e.target;
    element.style.backgroundColor = colorArray;
  });
});
