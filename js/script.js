// Here's a test channel number, check the console!
console.log(getRandomColorChannel())

let button = document.querySelector(".bg");
let text = document.querySelector("p");

function setNewColor() {
    let colors = `rgb(${getRandomColorChannel()}, ${getRandomColorChannel()}, ${getRandomColorChannel()})`;
    document.body.style.backgroundColor = colors;
    text.innerHTML = colors;
}

button.addEventListener('click', setNewColor);