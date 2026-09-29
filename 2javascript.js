const button = document.querySelector("#button");

function changeMessage() {
    message.textContent = "You click the Button!";
}
button.addEventListener("click", changeMessage);

const message = document.querySelector("#message");

function changeButton () {
    button.style.backgroundColor = "red";
;
}
button.addEventListener("click", changeButton);

const imageElement = document.getElementById('myImage');
const buttonElement = document.getElementById('changeBtn');

function changeImage() {
    imageElement.src = "image6.jpg";
}

// 3. Attach the event listener to the button
buttonElement.addEventListener('click', changeImage);