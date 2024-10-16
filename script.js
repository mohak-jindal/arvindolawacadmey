document.getElementById('lead-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    // Here you would add your form handling logic
});

// IMAGE SLIDER
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.querySelector('.next').addEventListener('click', () => {
  goToSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
  goToSlide(currentSlide - 1);
});

function goToSlide(slideNumber) {
  if (slideNumber >= slides.length) {
    currentSlide = 0;
  } else if (slideNumber < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = slideNumber;
  }

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}


// Testimonial Section

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function autoPlayCarousel() {
    currentIndex = (currentIndex + 1) % totalItems;
    document.querySelector('.carousel-slide').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(autoPlayCarousel, 5000);


