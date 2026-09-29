const button = document.querySelector("#button");
const message = document.querySelector("#message");

function changeMessage() {
     message.textContent = "You click the Button!"
}

button.addEventListener("click", changeMessage);