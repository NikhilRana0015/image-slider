let currentIdx = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Handle loop boundaries
    if (index >= slides.length) currentIdx = 0;
    else if (index < 0) currentIdx = slides.length - 1;
    else currentIdx = index;

    // Update active state for slides and dots
    slides.forEach((slide, i) => {
        if (i === currentIdx) {
            slide.classList.add('active');
            dots[i].classList.add('active');
        } else {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        }
    });
}

// Triggered by Arrow buttons
function changeSlide(direction) {
    showSlide(currentIdx + direction);
}

// Triggered by Dot clicks
function currentSlide(index) {
    showSlide(index);
}

// Optional: Auto-play every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);