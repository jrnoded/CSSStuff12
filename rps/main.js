var elements = document.getElementById("computer").children;
var result = document.getElementById("result");

function getComputerChoice() {
    for (const element of elements) {
        element.style.display = "none";
    }
    let rnd = getRandomInt(3);
    elements.item(rnd).style.display = "inline";
    return rnd;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playerSelect(index) {
    let choice = getComputerChoice();
    let match = "";
    result.innerHTML = match;

    switch (index) {
        case 0:
            switch (choice) {
                case 0:
                    match = "Draw";
                    break;
                case 1:
                    match = "Lose";
                    break;
                case 2:
                    match = "Win";
                    break;
            }
            break;
        case 1:
            switch (choice) {
                case 0:
                    match = "Win";
                    break;
                case 1:
                    match = "Draw";
                    break;
                case 2:
                    match = "Lose";
                    break;
            }
            break;
        case 2:
            switch (choice) {
                case 0:
                    match = "Lose";
                    break;
                case 1:
                    match = "Win";
                    break;
                case 2:
                    match = "Draw";
                    break;
            }
            break;
    }
    result.innerHTML = match;
}


