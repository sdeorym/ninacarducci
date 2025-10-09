/* THINGS TO DO:
    2. WE GOTTA AUTHOMATISE THE ADVANCING OF CAROUSEL. TEMP FUNCTION?
*/
document.addEventListener("DOMContentLoaded", () => {
    let selectedButton, currentPhoto, currentButton, selectedPhoto;
    let carouselButton = document.querySelectorAll('.bannerCursor');
    const arrows = document.querySelectorAll('[aria-controls="carousel-viewport"]');

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
            if (button.className = ".prev-arrow-button") {
                console.log(selectedPhoto);
                leftButton(selectedPhoto);}
            else if (button.className = ".next-arrow-button") {
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
        if (slideIndex === 0) {
            slideIndex = 2;
        } else {
            slideIndex--;
        }
        console.log(slideIndex);
        carouselSelector(slideIndex);
    }
    function rightButton(slideIndex) {
        if (slideIndex === 2) {
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
        selectedButton.setAttribute('aria-current', 'true');
        selectedButton.classList.add("current"); 
    }
});
