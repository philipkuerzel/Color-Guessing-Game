
const resetButton = document.getElementById("reset");
const rgbNumber = document.querySelector("h1");
const boxes = document.querySelectorAll(".clickButton");
const outputMessage = document.querySelector(".output");

let colors = [];
let unknownColor;

const getRandomColor = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
console.log(getRandomColor());

const generateRandomColors = (num) => {
    const colorArray = [];
    for (let i = 0; i < num; i++) {
        colorArray.push(getRandomColor());
    }
    return colorArray;
}

const pickRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const checkColor = (event) => {
    const selectedColor = event.target.style.backgroundColor;
    outputMessage.textContent = selectedColor === unknownColor ? "Correct! " : "Try again!";
    boxes.forEach((box) => {
        box.style.backgroundColor = unknownColor;
        box.removeEventListener("click", checkColor);
    });
};

const resetGame = () => {
    colors = generateRandomColors(6);
    unknownColor = pickRandomColor();
    rgbNumber.textContent = unknownColor;

    boxes.forEach((box, index) => {
        box.style.backgroundColor = colors[index];
        box.addEventListener("click", checkColor);
    });

    outputMessage.textContent = "";
};

resetButton.addEventListener("click", resetGame);

resetGame();

