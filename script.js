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

  // Create cart item after conditional
  const li = document.createElement("li");
 li.dataset.price = price.toFixed(2);

  li.className = "flex justify-between items-center bg-base-100/80 backdrop-blur p-3 rounded-xl shadow-md border border-primary/20 hover:scale-[1.01] transition";

  li.innerHTML = `
  <span class="font-medium">
    ${name} - <span class="text-primary">$${price.toFixed(2)}</span>
  </span>

  <button class="btn btn-sm btn-accent remove-btn">
    Remove
  </button>
`

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
addProductButton.addEventListener("click", addProduct);

cart.addEventListener("click", removeItem);
