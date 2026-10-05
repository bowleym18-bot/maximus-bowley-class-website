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


const images = [
  "image6.jpg",
  "image5.jpg",
  "image7.jpg",
  "image8.jpg"
];

function changeMessage() {
    message.textContent = "You click the Button!";
}
button.addEventListener("click", changeMessage);

let currentIndex = 0;

function changeImage(direction) {
  currentIndex = currentIndex + direction;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  const imgElement = document.getElementById("slider-image");
  imgElement.src = images[currentIndex];
}