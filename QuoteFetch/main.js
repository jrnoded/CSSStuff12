const button = document.getElementById("button");
const quote = document.getElementById("quote");
const author = document.getElementById("author")
const API = "http://api.quotable.io/random";
button.addEventListener("click", () => {
    fetch(API)
        .then((res) => res.json())
        .then((data) => {
            quote.innerText = data.content;
            author.innerText = data.author;
        })
        .catch(() => alert("Error fetching Quote"));
});
