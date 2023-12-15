
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
  

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function () {

    let pixel = board.children;
    
    for(let i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = 'white';
        pixel[i].style.opacity = "1"; 
    }
})

let colorType = 'black';

const rainbowBtn = document.getElementById("rainbow");
rainbowBtn.addEventListener('click', function (){
    colorType = 'rainbow';
})

const blackBtn = document.getElementById("black");
blackBtn.addEventListener('click', function (){
    colorType = 'black';
})

const eraserBtn = document.getElementById("eraser");
eraserBtn.addEventListener('click', function (){
    colorType = 'eraser';
})

const shaderBtn = document.getElementById("shader");
shaderBtn.addEventListener('click', function (){
    colorType = 'shader';
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

            if (colorType == 'black') {
                clickedPixel.style.backgroundColor = "black"; 
                clickedPixel.style.opacity = "1"; 
            }
            else if (colorType == 'rainbow') {
                clickedPixel.style.backgroundColor = getRandomColor();
                clickedPixel.style.opacity = "1";  
            }
            else if (colorType == 'eraser') {
                clickedPixel.style.backgroundColor = "white";
                clickedPixel.style.opacity = "1"; 
            }
            else if (colorType == 'shader') {
                let currentColor = window.getComputedStyle(clickedPixel).backgroundColor;
                let currentOpacity = window.getComputedStyle(clickedPixel).opacity;
                console.log(currentColor);
    
                if (currentColor == "rgb(255, 255, 255)"){
                    clickedPixel.style.backgroundColor = "black"; 
                    clickedPixel.style.opacity = "0.1"; 
                }
                if (currentOpacity < 1) {
                    console.log(currentOpacity);
        
                    newOp = parseFloat(currentOpacity) + 0.1;
                    console.log(newOp);
                    clickedPixel.style.opacity = newOp;
                }
            }
        }
        prevPixel = clickedPixel;

    }

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


















