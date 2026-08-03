/*==========================================
    TECHTRAY HOLDINGS
    CHECKOUT PHASE 1
==========================================*/

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Get HTML elements
const checkoutItems = document.getElementById("checkout-items");
const subtotalElement = document.getElementById("subtotal");
const deliveryElement = document.getElementById("delivery");
const totalElement = document.getElementById("checkout-total");

// Format price
function formatPrice(price) {
    return "R" + Number(price).toFixed(2);
}

// Load Checkout
function loadCheckout() {

    // Stop if page elements don't exist
    if (!checkoutItems) return;

    checkoutItems.innerHTML = "";

    let subtotal = 0;

    // Empty cart
    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Add some products before checking out.</p>

                <a href="shop.html" class="btn-primary">
                    Continue Shopping
                </a>
            </div>
        `;

        subtotalElement.textContent = "R0.00";
        deliveryElement.textContent = "R0.00";
        totalElement.textContent = "R0.00";

        return;
    }

    // Display products
    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;

        subtotal += itemTotal;

        checkoutItems.innerHTML += `

            <div class="checkout-item">

                <img src="${item.image}" alt="${item.name}">

                <div class="checkout-item-info">

                    <h4>${item.name}</h4>

                    <p>Quantity: ${item.quantity}</p>

                    <small>R${item.price.toFixed(2)} each</small>

                </div>

                <strong>${formatPrice(itemTotal)}</strong>

            </div>

        `;

    });

    // Delivery
    let delivery = subtotal >= 1000 ? 0 : 120;

    // Total
    let total = subtotal + delivery;

    // Update totals
    subtotalElement.textContent = formatPrice(subtotal);

    deliveryElement.textContent =
        delivery === 0
        ? "FREE"
        : formatPrice(delivery);

    totalElement.textContent = formatPrice(total);

}

// Start checkout
loadCheckout();