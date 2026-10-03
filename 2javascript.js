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


const images = ["image6.jpg", "image5.jpg", "image7.jpg", "image8.jpg"];
let currentIndex = 0;

const imageElement = document.getElementById("galleryImage");
const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");

function updateImage() {
  imageElement.src = images[currentIndex];
}
nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateImage();
});

prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateImage();
});