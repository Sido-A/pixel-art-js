const pixelColors = document.querySelector(".pixel-colors");
const pixelInnerBlocks = document.querySelector(".canvas-inner");
const canvasTds = pixelInnerBlocks.querySelectorAll("td");
const colorArray = [];

pixelColors.addEventListener("click", (e) => {
  const color = e.target.classList.value;
  if (colorArray === []) {
    colorArray.push(color);

  } else if (color === "clear-all") {
    canvasTds.forEach((td) => {
      td.style.backgroundColor = "white";
    });

  } else {
    colorArray.pop();
    colorArray.push(color);
  }
});


canvasTds.forEach((td) => {
  td.addEventListener("click", (e) => {
    const element = e.target;
    element.style.backgroundColor = colorArray;
  });
});
