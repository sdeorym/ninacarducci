document.addEventListener("DOMContentLoaded", () => {
    let selectedButton, currentPhoto, currentButton, selectedPhoto;
    let carouselButton = document.querySelectorAll('.bannerCursor');
    const arrows = document.querySelectorAll('[aria-controls="carousel-viewport"]');
    const totalSlides = document.querySelectorAll('.carousel-image').length;
    
    setInterval (autoAdvance, 4500);

    carouselButton.forEach((button) => {
        button.addEventListener("click", () => {
            const slideIndex = button.getAttribute('data-slide');
            classRemover();
            carouselSelector(slideIndex);
        });
    });

    arrows.forEach((button) => {
        button.addEventListener("click", () => {
            currentPhoto = document.querySelector(".carousel-image.current");
            selectedPhoto = parseInt(currentPhoto.getAttribute(`data-slide-index`));
            classRemover();
            if (button.className === "prev-arrow-button") {
                console.log(selectedPhoto);
                leftButton(selectedPhoto);}
            else if (button.className === "next-arrow-button") {
                console.log(selectedPhoto);
                rightButton(selectedPhoto);}            
        });
    });

    function carouselSelector(slideIndex) {
        selectedPhoto = document.querySelector(`img[data-slide-index="${slideIndex}"]`);
        selectedButton = document.querySelector(`button[data-slide="${slideIndex}"]`);
        classAdder(selectedPhoto, selectedButton);
    }
    
    function leftButton(slideIndex) {
        if (slideIndex == 0) {
            slideIndex = 2;
        } else {
            slideIndex--;
        }
        carouselSelector(slideIndex);
    }
    function rightButton(slideIndex) {
        if (slideIndex == 2) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        carouselSelector(slideIndex);
    }
    function classRemover() {
        currentPhoto = document.querySelector(".carousel-image.current");
        currentButton = document.querySelector('.bannerCursor[aria-current="true"]');
        currentPhoto.classList.remove("current");
        currentButton.removeAttribute('aria-current');
        currentButton.classList.remove("current");
    }
    function classAdder(selectedPhoto, selectedButton) {
        selectedPhoto.classList.add("current");
        selectedButton.classList.add("current");
        selectedButton.setAttribute('aria-current', 'true');         
    }

    function autoAdvance() {
        slideIndex = parseInt((document.querySelector(".carousel-image.current")).getAttribute(`data-slide-index`));
        classRemover();
        slideIndex++;
        if (slideIndex >= totalSlides) {slideIndex =0};
        carouselSelector(slideIndex);
    }
});
