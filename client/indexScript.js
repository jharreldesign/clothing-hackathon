let currentIndex = 0
const totalSlides = 12
const itemsToShow = 4

const updateCarousel = () => {
  const offset = (currentIndex * -100) / itemsToShow
  document.querySelector(
    ".carousel-container"
  ).style.transform = `translateX(${offset}%)`
}

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % (totalSlides - itemsToShow + 1)
  updateCarousel()
})

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + (totalSlides - itemsToShow + 1)) %
    (totalSlides - itemsToShow + 1)
  updateCarousel()
})
