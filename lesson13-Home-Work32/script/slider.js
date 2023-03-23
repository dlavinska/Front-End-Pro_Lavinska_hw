const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg"  
];

let currentImage = 0;
const imageTag = document.getElementById("image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
    currentImage--;
    imageTag.src = images[currentImage];
    hideButton();
    
});

nextButton.addEventListener("click", () => {
    currentImage++;
    imageTag.src = images[currentImage];
    hideButton();
});

function hideButton() {
    if (currentImage === 0) {
        prevButton.disabled = true;
        nextButton.style.display = "flex";
    } else if (currentImage === images.length-1) {
        nextButton.disabled = true;
        prevButton.style.display = "flex";
    } else {
        nextButton.disabled = false;
        prevButton.disabled = false;        
    }
}

hideButton();