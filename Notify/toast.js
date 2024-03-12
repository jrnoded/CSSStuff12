const TIMEOUT_MS = 3000;
const show = document.getElementById("show");

show.addEventListener("click", handleClick);

function showToast() {
    var toast = document.getElementById("toast");
    toast.classList.add("visible");

    setTimeout(() => {
        toast.classList.remove("visible");
    }, TIMEOUT_MS);
}

function handleClick() {
    this.disabled = true;
    showToast();

    setTimeout(() => {
        this.disabled = false;
    }, TIMEOUT_MS);
}

