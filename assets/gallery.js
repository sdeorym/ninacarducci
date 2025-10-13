document.addEventListener("DOMContentLoaded", () => {

    let photoCategories = [];
    let i = 0;
    buttonCalling();
    
    function categories() { //This function creates the five categories;
        const photoGallery = document.querySelectorAll(".gallery-item");
        const gallerytags = Array.from(photoGallery).map(item =>
            item.dataset.galleryTag);        
        let i = 0;
        for (i=0; i <= gallerytags.length-1; i++) {
            if (photoCategories.includes(gallerytags[i]) == false) {
                photoCategories.push(gallerytags[i]);}};
        const categorising = photoCategories.unshift('Tous');        
    }

    function buttonry() { //This function creates the filters that can be clicked.
        categories()
        let portfolioTitle = document.querySelector("#gallery h2");
        let container = document.createElement("div");        
        portfolioTitle.insertAdjacentElement("afterend", container);   
        container.classList.add("gallery-filters");
        let galleryList = document.createElement("ul");
        container.appendChild(galleryList);
        galleryList.classList.add("gallery-filters-list");
        for (i=0; i < photoCategories.length; i++) {
            let galleryListElement = document.createElement("li");
            let galleryButtons = document.createElement("button");
            galleryList.appendChild(galleryListElement);
            galleryListElement.appendChild(galleryButtons);
            galleryButtons.innerText = photoCategories[i];
            galleryButtons.classList.add("galleryButton");
            if (photoCategories[i] === 'Tous') {
                galleryButtons.setAttribute("data-images-toggle", "all");                
            }
            else {
                galleryButtons.setAttribute("data-images-toggle", photoCategories[i]);
            }
        };        
    }

    function buttonCalling() { //By this function we choose any option in the gallery menu.
        buttonry();

        let buttonClick = document.querySelectorAll("#gallery .gallery-filters .galleryButton");
        buttonClick[0].classList.add("active");

        buttonClick.forEach((button) => {
            button.addEventListener("click", () => {
                buttonClick.forEach((button) => button.classList.remove("active"));
                button.classList.add("active");
                choice = button.getAttribute('data-images-toggle');
                let allPhotos = document.querySelectorAll(".gallery-item");
                let selectedPhotos;
                allPhotos.forEach(photo => {photo.style.display = "none";});
                if (choice === "all") {
                    selectedPhotos = allPhotos;
                } else {
                    selectedPhotos = document.querySelectorAll(`img[data-gallery-tag="${choice}"]`);
                }
                selectedPhotos.forEach(photo => {photo.style.display = "block";});
            });
        });
    }
});