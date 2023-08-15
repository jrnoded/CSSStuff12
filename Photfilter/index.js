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
    switch (fltr) {
        case "none":
            break;
        case "blur":            
            fltr += "(" + randomNumber(1,25) + "px)";
            break;
        case "hue-rotate":
            fltr += "(" + randomNumber(1,360) + "deg)";
            break;
        default: 
        fltr += "(" + randomNumber(10,100 )+ "%)";
    }
   
    filterImage.style.filter = fltr;
    msg.innerText = filterImage.style.filter;
});

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
