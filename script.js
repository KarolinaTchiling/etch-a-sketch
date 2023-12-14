
const container = document.querySelector(".container");

let size = 10;
let pixelSize = 800/size;
pixelSize = pixelSize.toString();
pixelSize = pixelSize + 'px';
console.log(pixelSize);

for (let i = 0; i < size*size; i++){
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');


    pixel.style.height = pixelSize;
    pixel.style.width = pixelSize;
    container.appendChild(pixel);

    pixel.addEventListener('mouseout', function() {
        pixel.style.backgroundColor = "black";

    });
}




