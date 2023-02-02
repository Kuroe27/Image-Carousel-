const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll("#images img");
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const imageContainer = document.getElementById("images")
const radio1 = document.getElementById('radio1');
const radio2 = document.getElementById('radio2');
const radio3 = document.getElementById('radio3');
let i = 0;

//create a function
function changeImage(){
    if (i > images.length -1){
        i = 0;
    }else if (i < 0){
        i = images.length -1;
    }
    imageContainer.style.transform = `translateX(${-i * 500}px)`;
    changeRadioButton();
}

//add function to the next button
next.addEventListener("click", () => {
    i++;
    changeImage();
})

//add function to the previous button
prev.addEventListener("click", () => {
    i--;
    changeImage();
})

radio1.addEventListener("change", () => {
    i = 0;
    changeImage()
})

radio2.addEventListener("change", () => {
    i = 1;
    changeImage()
})

radio3.addEventListener("change", () => {
    i = 2;
    changeImage()
})

function changeRadioButton() {
    if (i === 0) {
        
      radio1.checked = true;
      radio2.checked = false;
      radio3.checked = false;
    } else if (i === 1) {
      radio1.checked = false;
      radio2.checked = true;
      radio3.checked = false;
    } else if (i === 2) {
      radio1.checked = false;
      radio2.checked = false;
      radio3.checked = true;
    }
  }
