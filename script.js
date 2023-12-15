
const board = document.querySelector(".board");

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

function draw(event) {
    const clickedPixel = event.target;

    if (clickedPixel.classList.contains('pixel')) {
        clickedPixel.style.backgroundColor = "black";
    }

}


createBoard(50);









