let slideIndex = 0; // Initialize slide index to 0

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    // Wrap slide index if it goes beyond the number of slides
    if (slideIndex >= slides.length) { 
        slideIndex = 0; 
    }
    if (slideIndex < 0) { 
        slideIndex = slides.length - 1; 
    }
    // Move slides horizontally based on slide index
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
}

function prevSlide() {
    slideIndex--; // Move to the previous slide
    showSlides(); // Update slide display
}

function nextSlide() {
    slideIndex++; // Move to the next slide
    showSlides(); // Update slide display
}

showSlides(); // Show slides when the page loads

function updateButtonVisibility(currentSlide, totalSlides) {
    var prevButton = document.querySelector('.prev');
    var nextButton = document.querySelector('.next');
    
    // Hide previous button if on the first slide
    if (currentSlide === 0) {
        prevButton.style.display = 'none';
        nextButton.style.display = 'block'; // Show next button
    } 
    // Hide next button if on the last slide
    else if (currentSlide === totalSlides - 1) {
        prevButton.style.display = 'block'; // Show previous button
        nextButton.style.display = 'none';
    } 
    // Show both buttons for slides in between
    else {
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
    }
}