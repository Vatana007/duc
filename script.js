function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slidesWrapper = document.querySelector('.slides-wrapper');
    let dots = document.getElementsByClassName("dot");
    let totalSlides = document.getElementsByClassName("slide").length;

    // Loop back to start or end
    if (n > totalSlides) { slideIndex = 1 }
    if (n < 1) { slideIndex = totalSlides }

    // Update transform to slide to the correct position
    slidesWrapper.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;

    // Update dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}

// Auto slide
setInterval(() => {
    changeSlide(1);
}, 5000);
