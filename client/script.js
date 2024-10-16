let currentIndex = 0;
const totalSlides = 12; // Total number of slides
const itemsToShow = 4; // Number of items to show at a time

const updateCarousel = () => {
  const offset = (currentIndex * -100) / itemsToShow; // Move left based on the index
  document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
};

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % (totalSlides - itemsToShow + 1); // Loop back to start
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + (totalSlides - itemsToShow + 1)) % (totalSlides - itemsToShow + 1); // Loop back to end
  updateCarousel();
});

// Search bar drop down into filter options
// Go to product specific page when icon is clicked
//