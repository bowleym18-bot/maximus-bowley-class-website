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


        let index = 0;

        function changePicture() {
            const picture = document.getElementById("picture");

            // Sizes
            const sizes = ["25px", "50px", "100px", "250px", "100px"];

            // Colors
            const colors = ["red", "brown", "blue", "purple", "white"];

            // Change the size and color
            picture.style.fontSize = sizes[index];
            picture.style.color = colors[index];

            // Change the placement
            if (index === 0) {
                // Center
                picture.style.left = "50%";
                picture.style.top = "50%";
                picture.style.transform = "translate(-50%, -50%)";

            } else if (index === 1) {
                // Upper top left
                picture.style.left = "60px";
                picture.style.top = "60px";
                picture.style.transform = "none";

            } else if (index === 2) {
                // Middle right
                picture.style.left = "45%";
                picture.style.top = "45%";
                picture.style.transform = "translate(55%, 55%)";

            } else if (index === 3) {
                // Bottom left
                picture.style.left = "-35px";
                picture.style.bottom = "-35px";
                picture.style.top = "left";
                picture.style.transform = "none";

            } else if (index === 4) {
                // Upper top right
                picture.style.right = "-50px";
                picture.style.left = "auto";
                picture.style.top = "-50px";
                picture.style.bottom = "bottom right";
                picture.style.transform = "none";
            }

            // Move to the next style
            index++;

            // Start over after the fifth click
            if (index === 5) {
                index = 0;
            }
        }