const filters = [
    "none",
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

const applyFilterButton = document.getElementById("apply-filter");
const filterImage = document.getElementById("filter-image");
const msg = document.getElementById("msg");

applyFilterButton.addEventListener("click", () => {
    let fltr = filters[randomNumber(0, 10)];
    if (fltr != "none") {
        fltr += "(" + (randomNumber(25,100)) + "%)";
    }
    filterImage.style.filter = fltr;
    msg.innerText = filterImage.style.filter;
});

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
