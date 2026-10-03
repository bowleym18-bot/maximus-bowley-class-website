const button = document.querySelector("#button");

function changeMessage() {
    message.textContent = "You click the Button!";
}
button.addEventListener("click", changeMessage);


const message = document.querySelector("#message");

function changeButton () {
    button.style.backgroundColor = "red";
}
button.addEventListener("click", changeButton);


