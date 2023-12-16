


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
    // Generate random values for red, green, and blue (0-255)
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    // Construct the CSS color string
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
  
    return randomColor;
}
  
// Event Listeners for all the buttons
let colorType = 'white';

const whiteBtn = document.getElementById("white");
whiteBtn.addEventListener('click', function (){
    colorType = 'white';
})
const purpleBtn = document.getElementById("purple");
purpleBtn.addEventListener('click', function (){
    colorType = 'purple';
})
const blueBtn = document.getElementById("blue");
blueBtn.addEventListener('click', function (){
    colorType = 'blue';
})
const greenBtn = document.getElementById("green");
greenBtn.addEventListener('click', function (){
    colorType = 'green';
})
const yellowBtn = document.getElementById("yellow");
yellowBtn.addEventListener('click', function (){
    colorType = 'yellow';
})
const orangeBtn = document.getElementById("orange");
orangeBtn.addEventListener('click', function (){
    colorType = 'orange';
})
const redBtn = document.getElementById("red");
redBtn.addEventListener('click', function (){
    colorType = 'red';
})
const pinkBtn = document.getElementById("pink");
pinkBtn.addEventListener('click', function (){
    colorType = 'pink';
})

// Clears the board event
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function () {

    let pixel = board.children;
    
    for(let i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = 'black';
        pixel[i].style.opacity = "1"; 
    }
})


// const rainbowBtn = document.getElementById("rainbow");
// rainbowBtn.addEventListener('click', function (){
//     colorType = 'rainbow';
// })

// const blackBtn = document.getElementById("black");
// blackBtn.addEventListener('click', function (){
//     colorType = 'black';
// })

// const eraserBtn = document.getElementById("eraser");
// eraserBtn.addEventListener('click', function (){
//     colorType = 'eraser';
// })

// const shaderBtn = document.getElementById("shader");
// shaderBtn.addEventListener('click', function (){
//     colorType = 'shader';
// })




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
                clickedPixel.style.opacity = "1"; 
            }
            else if (colorType == 'purple') {
                clickedPixel.style.backgroundColor = "rgb(126, 66, 238)";
                clickedPixel.style.opacity = "1";  
            }
            else if (colorType == 'blue') {
                clickedPixel.style.backgroundColor = "rgb(71, 157, 255)";
                clickedPixel.style.opacity = "1"; 
            }
            else if (colorType == 'green') {
                clickedPixel.style.backgroundColor = "rgb(46, 252, 73)";
                clickedPixel.style.opacity = "1";
            }
            else if (colorType == 'yellow') {
                clickedPixel.style.backgroundColor = "rgb(217, 255, 0)";
                clickedPixel.style.opacity = "1";
            }
            else if (colorType == 'orange') {
                clickedPixel.style.backgroundColor = "rgb(255, 123, 0)";
                clickedPixel.style.opacity = "1";
            }
            else if (colorType == 'red') {
                clickedPixel.style.backgroundColor = "rgb(255, 30, 30)";
                clickedPixel.style.opacity = "1";
            }
            else if (colorType == 'pink') {
                clickedPixel.style.backgroundColor = "rgb(241, 55, 179)";
                clickedPixel.style.opacity = "1";
            }            
        }
    }
    prevPixel = clickedPixel;

}


// function draw(event) {
//     const clickedPixel = event.target;

//     if (clickedPixel.classList.contains('pixel')) {

//         if (prevPixel !== clickedPixel) {

//             if (colorType == 'black') {
//                 clickedPixel.style.backgroundColor = "white"; 
//                 clickedPixel.style.opacity = "1"; 
//             }
//             else if (colorType == 'rainbow') {
//                 clickedPixel.style.backgroundColor = getRandomColor();
//                 clickedPixel.style.opacity = "1";  
//             }
//             else if (colorType == 'eraser') {
//                 clickedPixel.style.backgroundColor = "white";
//                 clickedPixel.style.opacity = "1"; 
//             }
//             else if (colorType == 'shader') {
//                 let currentColor = window.getComputedStyle(clickedPixel).backgroundColor;
//                 let currentOpacity = window.getComputedStyle(clickedPixel).opacity;
//                 console.log(currentColor);
    
//                 if (currentColor == "rgb(255, 255, 255)"){
//                     clickedPixel.style.backgroundColor = "black"; 
//                     clickedPixel.style.opacity = "0.1"; 
//                 }
//                 if (currentOpacity < 1) {
//                     console.log(currentOpacity);
        
//                     newOp = parseFloat(currentOpacity) + 0.1;
//                     console.log(newOp);
//                     clickedPixel.style.opacity = newOp;
//                 }
//             }
//         }
//         prevPixel = clickedPixel;

//     }

// }



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






















