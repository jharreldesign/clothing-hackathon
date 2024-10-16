const userId = `67104eb1bf53bfba5bd66e3a`

const fetchCartData = async () => {
  try {
    const response = await fetch(`http://localhost:3001/carts/${userId}`)
    if (!response.ok) {
      throw new Error("Error fetching cart data")
    }

    const cart = await response.json()

    const itemsWithDetails = await Promise.all(
      cart.items.map(async (item) => {
        const productResponse = await fetch(
          `http://localhost:3001/products/${item.productId}`
        )
        if (!productResponse.ok) {
          throw new Error("Error fetching product details")
        }
        const product = await productResponse.json()
        return {
          ...item,
          product,
        }
      })
    )

    displayCartItems(itemsWithDetails)
    updateTotalPrice(itemsWithDetails)
  } catch (error) {
    console.error(error.message)
  }
}

const displayCartItems = (items) => {
  const cartItemsDiv = document.getElementById("cart-items")
  cartItemsDiv.innerHTML = ""

  items.forEach((item, index) => {
    const product = item.product // Accessing product details here
    const cartItemDiv = document.createElement("div")
    cartItemDiv.classList.add("cart-item")

    cartItemDiv.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.productName}" />
      <div class="cart-item-details">
        <h2>${product.productName}</h2>
        <p class="price">$${product.productPrice}</p>
        <label for="quantity-product-${index}">Quantity:</label>
        <input
          type="number"
          id="quantity-product-${index}"
          value="${item.quantity}"
          min="1"
        />
      </div>
      <span>$${(product.productPrice * item.quantity).toFixed(2)}</span>
    `

    cartItemsDiv.appendChild(cartItemDiv)

    const quantityInput = document.getElementById(`quantity-product-${index}`)
    quantityInput.addEventListener("change", () => updateTotalPrice(items))
  })
}

const updateTotalPrice = (items) => {
  items.forEach((item, index) => {
    const quantityInput = document.getElementById(`quantity-product-${index}`)
    item.quantity = parseInt(quantityInput.value, 10)
  })

  const totalPrice = items.reduce((total, item) => {
    return total + item.productId.productPrice * item.quantity
  }, 0)

  document.getElementById("total-price").innerText = totalPrice.toFixed(2)
}

document.addEventListener("DOMContentLoaded", function () {
  fetchCartData()
})
