const board = document.querySelector(".board");
const container = document.querySelector(".container");

function createBoard(size) {

    let pixelSize = 600/size;
    pixelSize = pixelSize.toString();
    pixelSize = pixelSize + 'px';

    for (let i = 0; i < size*size; i++){
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
    
        pixel.style.height = pixelSize;
        pixel.style.width = pixelSize;
        board.appendChild(pixel);
    
    }
}

function getRandomColor() {

    const ranNum = Math.floor(Math.random() * 7);

    const result = ranNum === 0 ? "rgb(241, 55, 179)"
        : ranNum === 1 ? "rgb(126, 66, 238)"
        : ranNum === 2 ? "rgb(71, 157, 255)"
        : ranNum === 3 ? "rgb(46, 252, 73)"
        : ranNum === 4 ? "rgb(217, 255, 0)"
        : ranNum === 5 ? "rgb(255, 123, 0)"
        : "rgb(255, 30, 30)"

    return result;
}
  
// Event Listeners for all the buttons
let colorType = 'white';

const whiteBtn = document.getElementById("white");
whiteBtn.style.backgroundColor = "white";
whiteBtn.addEventListener('click', function (){
    colorType = 'white';
})
const purpleBtn = document.getElementById("purple");
purpleBtn.style.backgroundColor = "rgb(126, 66, 238)";
purpleBtn.addEventListener('click', function (){
    colorType = 'purple';
})
const blueBtn = document.getElementById("blue");
blueBtn.style.backgroundColor = "rgb(71, 157, 255)";
blueBtn.addEventListener('click', function (){
    colorType = 'blue';
})
const greenBtn = document.getElementById("green");
greenBtn.style.backgroundColor = "rgb(46, 252, 73)";
greenBtn.addEventListener('click', function (){
    colorType = 'green';
})
const yellowBtn = document.getElementById("yellow");
yellowBtn.style.backgroundColor = "rgb(217, 255, 0)";
yellowBtn.addEventListener('click', function (){
    colorType = 'yellow';
})
const orangeBtn = document.getElementById("orange");
orangeBtn.style.backgroundColor = "rgb(255, 123, 0)";
orangeBtn.addEventListener('click', function (){
    colorType = 'orange';
})
const redBtn = document.getElementById("red");
redBtn.style.backgroundColor = "rgb(255, 30, 30)";
redBtn.addEventListener('click', function (){
    colorType = 'red';
})
const pinkBtn = document.getElementById("pink");
pinkBtn.style.backgroundColor = "rgb(241, 55, 179)";
pinkBtn.addEventListener('click', function (){
    colorType = 'pink';
})
const rainbowBtn = document.getElementById("rainbow");
rainbowBtn.addEventListener('click', function (){
    colorType = 'rainbow';
})
const removeBtn = document.getElementById("remove");
removeBtn.addEventListener('click', function (){
    colorType = 'black';
})

// Clears the board event
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function () {

    let pixel = board.children;
    
    for(let i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = 'black';
    }
})


let isMouseDown = false;
board.addEventListener("mousedown", function (event) {
    event.preventDefault();
    isMouseDown = true;
    draw(event);
});

board.addEventListener("mouseup", function () {
    isMouseDown = false;
});

board.addEventListener("mousemove", function (event) {
    if (isMouseDown) {
        draw(event);
    }
});

board.addEventListener("mouseleave", function () {
    isMouseDown = false;
});

let prevPixel = null;

function draw(event) {
    const clickedPixel = event.target;
    if (clickedPixel.classList.contains('pixel')) {
        if (prevPixel !== clickedPixel) {

            if (colorType == 'white') {
                clickedPixel.style.backgroundColor = "white"; 
            }
            else if (colorType == 'purple') {
                clickedPixel.style.backgroundColor = "rgb(126, 66, 238)"; 
            }
            else if (colorType == 'blue') {
                clickedPixel.style.backgroundColor = "rgb(71, 157, 255)"; 
            }
            else if (colorType == 'green') {
                clickedPixel.style.backgroundColor = "rgb(46, 252, 73)";
            }
            else if (colorType == 'yellow') {
                clickedPixel.style.backgroundColor = "rgb(217, 255, 0)";
            }
            else if (colorType == 'orange') {
                clickedPixel.style.backgroundColor = "rgb(255, 123, 0)";
            }
            else if (colorType == 'red') {
                clickedPixel.style.backgroundColor = "rgb(255, 30, 30)";
            }
            else if (colorType == 'pink') {
                clickedPixel.style.backgroundColor = "rgb(241, 55, 179)";
            } 
            else if (colorType == 'rainbow') {
                clickedPixel.style.backgroundColor = getRandomColor(); 
            } 
            else if (colorType == 'black') {
                clickedPixel.style.backgroundColor = "black";
            }          
        }
    }
    prevPixel = clickedPixel;
}

createBoard(4);


document.addEventListener('DOMContentLoaded', function () {
    // Get the slider and output elements
    let slider = document.getElementById('mySlider');
    let output = document.getElementById('sliderValue');
  
    // Display the default slider value
    output.innerHTML = slider.value + " x " + slider.value;
  
    // Update the slider value when it changes
    slider.addEventListener('input', function () {
        output.innerHTML = this.value + " x " + this.value;
        board.innerHTML = '';

        createBoard(slider.value);
    });
});






















