const baseURL = 'http://localhost:3001'

// let currentIndex = 0
// const totalSlides = 12 // Total number of slides
// const itemsToShow = 4 // Number of items to show at a time

// const updateCarousel = () => {
//   const offset = (currentIndex * -100) / itemsToShow // Move left based on the index
//   document.querySelector(
//     ".carousel-container"
//   ).style.transform = `translateX(${offset}%)`
// }

// document.querySelector(".next").addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % (totalSlides - itemsToShow + 1) // Loop back to start
//   updateCarousel()
// })

// document.querySelector(".prev").addEventListener("click", () => {
//   currentIndex =
//     (currentIndex - 1 + (totalSlides - itemsToShow + 1)) %
//     (totalSlides - itemsToShow + 1) // Loop back to end
//   updateCarousel()
// })

// async function sendUserData() {
//   const userData = {
//     name: "Johnny Doe",
//     email: "john.doe@example.com",
//     address: [
//       {
//         street: "123 Maple Street",
//         city: "Springfield",
//         state: "IL",
//         zipCode: "62704",
//         country: "USA",
//       },
//     ],
//     phoneNumber: "555-123-4567",
//   }

//   try {
//     const response = await axios.post(`${baseURL}/users`, userData)

//     if (response.status === 201) {
//       console.log("User created successfully:", response.data.user)
//     } else {
//       console.error("Error creating user:", response.data.error)
//     }
//   } catch (error) {
//     console.error(
//       "Network or server error:",
//       error.response ? error.response.data : error.message
//     )
//   }
// }

// sendUserData()

const cards = document.querySelectorAll(".product-card-grid")
console.log(cards)

// async function populateProduct(cardNum, productId) {
//   const card = 

// }

async function populateProducts() {
  try {
    const response = await axios.get(`${baseURL}/products`)
    const productCards = document.querySelectorAll('.product-card-grid')

    response.data.forEach((product, index) => {
      if (productCards[index]) {
        const productCard = productCards[index]

        const image = productCard.querySelector('.product-card-image')
        image.src = product.imageUrl
        image.alt = product.productName

        const title = productCard.querySelector('.product-name')
        title.textContent = product.productName

        const price = productCard.querySelector('.product-price')
        price.textContent = product.productPrice
      }
    })
  } catch (error) {
    console.error('Error getting products:', error.message)
  }
}

window.onload = populateProducts


const getProducts = async () => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    console.log('Products:', response.data);
  } catch (error) {
    console.error('Error getting products:', error.message);
  }
}

 //getProducts()