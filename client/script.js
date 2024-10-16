const axios = require("axios")

let currentIndex = 0
const totalSlides = 12 // Total number of slides
const itemsToShow = 4 // Number of items to show at a time

const updateCarousel = () => {
  const offset = (currentIndex * -100) / itemsToShow // Move left based on the index
  document.querySelector(
    ".carousel-container"
  ).style.transform = `translateX(${offset}%)`
}

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % (totalSlides - itemsToShow + 1) // Loop back to start
  updateCarousel()
})

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + (totalSlides - itemsToShow + 1)) %
    (totalSlides - itemsToShow + 1) // Loop back to end
  updateCarousel()
})

async function sendUserData() {
  const userData = {
    name: "Johnny Doe",
    email: "john.doe@example.com",
    address: [
      {
        street: "123 Maple Street",
        city: "Springfield",
        state: "IL",
        zipCode: "62704",
        country: "USA",
      },
    ],
    phoneNumber: "555-123-4567",
  }

  try {
    const response = await axios.post("http://localhost:3001/users", userData)

    if (response.status === 201) {
      console.log("User created successfully:", response.data.user)
    } else {
      console.error("Error creating user:", response.data.error)
    }
  } catch (error) {
    console.error(
      "Network or server error:",
      error.response ? error.response.data : error.message
    )
  }
}

sendUserData()
