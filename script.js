// Global variables----------------------------------------------------------------------
let totalPrice = 0;

// DOM variables-------------------------------------------------------------------------
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');


//helper functions-----------------------------------------------------------------------
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to add products
const addProduct = () => {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  //edge case validating conditional
  if (!name || isNaN(price) || price <= 0) {
    alert("Please enter a valid product name and price.");
    return;
  }

  // Create cart item
  const li = document.createElement("li");
  li.dataset.price = price;

  li.innerHTML = `
    ${name} - $${price.toFixed(2)}
    <button class="remove-btn">Remove</button>
  `;

  cart.appendChild(li);

  // Update total
  updateTotalPrice(price);

  // Clear inputs
  productNameInput.value = "";
  productPriceInput.value = "";

}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

// Event listener calls------------------------------------------------------------------
