const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll("#images img");
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const imageContainer = document.getElementById("images")

let index = 0;
function slideshow(){
    index++;
    changeImage()
}

function changeImage(){
    if (index > images.length -1){
        index = 0;
    }else if (index < 0){
        index = images.length -1;
    }
    imageContainer.style.transform = `translateX(${-index * 500}px)`;
}

next.addEventListener("click", () => {
    console.log("asdas")
    index++;
    changeImage();
})

prev.addEventListener("click", () => {
    console.log("asdas")
    index--;
    changeImage();
})






// images[counter].classList.add('active');


// prev.addEventListener('click', () => {
//     images[counter].classList.remove('active');
//     counter--;
//     if(counter < 0){
//         counter = images.length - 1;
//     }
//     images[counter].classList.add('active');
// });

// next.addEventListener('click', () => {
//     images[counter].classList.remove('active');
//     counter++;
//     if(counter >= images.length){
//         counter = 0;
//     }
//     images[counter].classList.add('active');
// });
