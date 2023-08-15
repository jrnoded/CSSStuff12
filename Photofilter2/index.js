const filters = [
    "none",
    "blur",
    "brightness",
    "contrast",
    "drop-shadow",
    "grayscale",
    "hue-rotate",
    "invert",
    "opacity",
    "sepia",
    "saturate",
];

const filterRange = document.getElementById("filters");
const percentRange = document.getElementById("percent");
const filterImage = document.getElementById("filter-image");
const msg = document.getElementById("msg");
filterRange.addEventListener("change", setFilter);
percentRange.addEventListener("change", setFilter);

function setFilter() {
    let fltr = filters[filterRange.value];
    let pc = percentRange.value;
    switch (fltr) {
        case "none":
            break;
        case "blur":
            pc = pc / 4;
            fltr += "(" + pc + "px)";
            break;
        case "hue-rotate":
            pc = pc * 3.6;
            fltr += "(" + pc + "deg)";
            break;
        case "drop-shadow":
            pc = pc / 10;
            fltr += "(4px 4px " + pc + "px blue)";
            console.log(fltr);
            break;
        default:
            fltr += "(" + pc + "%)";
    }

    filterImage.style.filter = fltr;
    msg.innerText = filterImage.style.filter;
}
