const nav = byID("nav");
const move = byID("move");
var where = "top";
function byID(id) {
    return document.getElementById(id);
}
move.addEventListener("click", moveNav);

function moveNav() {
    switch (where) {
        case "top" :
            where = "right";
            setRight();
            break;
        case "right" :
            where = 'bottom';
            setBottom();
            break;
        case "bottom":
            where = "left";
            setLeft();
            break;
        case "left" :
            where = "top";
            setTop();
            break;
    }
}
function setLeft() {
    nav.style.height = "100%";
    nav.style.width = "inherit";
    nav.style.top = 0;
    nav.style.left = 0;
    nav.style.bottom = "inherit";
    nav.style.right = "inherit";
    nav.style.flexDirection = "column";
}

function setBottom() {
    nav.style.height = "inherit";
    nav.style.width = "100%";
    nav.style.top = "inherit";
    nav.style.left = 0;
    nav.style.bottom = "0";
    nav.style.right = "inherit";
    nav.style.flexDirection = "row";
}

function setRight() {
    nav.style.height = "100%";
    nav.style.width = "inherit";
    nav.style.top = "0";
    nav.style.left = "inherit";
    nav.style.bottom = "inherit";
    nav.style.right = "0";
    nav.style.flexDirection = "column";
}
function setTop() {
    nav.style.height = "inherit";
    nav.style.width = "100%";
    nav.style.top = "0";
    nav.style.left = 0;
    nav.style.bottom = "inherit";
    nav.style.right = "inherit";
    nav.style.flexDirection = "row";
}
