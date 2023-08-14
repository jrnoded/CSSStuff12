
const filters = [
    "blur",
    "brightness",
    "contrast",
    "drop_shadow",
    "grayscale",
    "hue-rotate",
    "invert",
    "opacity",
    "sepia",
    "saturate",
];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const applyFilterButton = document.getElementById("apply-filter");
const filterImage = document.getElementById("filter-image");
const msg = document.getElementById("msg");
let filterOn = false;
applyFilterButton.addEventListener("click", () => {
    // filterOn = !filterOn;
    // if (filterOn) {
        let fltr = filters[getRandomInt(9)] + "(" + getRandomInt(100) + "%)";
        filterImage.style.filter = fltr;
        // applyFilterButton.textContent = "Remove Filter";
    // } else {
    //     filterImage.style.filter = "none";    
    //     applyFilterButton.textContent = "Apply Filter";
    // }
    msg.innerText = filterImage.style.filter;
});
