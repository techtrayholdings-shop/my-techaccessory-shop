/*=========================================
    TECHTRAY HOLDINGS
    CHECKOUT.JS
    PART 1
=========================================*/

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Checkout Elements
const checkoutItems = document.getElementById("checkout-items");
const subtotalElement = document.getElementById("subtotal");
const deliveryElement = document.getElementById("delivery");
const totalElement = document.getElementById("checkout-total");

// Format Price
function formatPrice(price) {
    return "R" + Number(price).toFixed(2);
}

// Calculate Totals
function calculateTotals() {

    let subtotal = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
    });

    const delivery = subtotal >= 1000 ? 0 : 120;

    const total = subtotal + delivery;

    if (subtotalElement)
        subtotalElement.textContent = formatPrice(subtotal);

    if (deliveryElement)
        deliveryElement.textContent = delivery === 0
            ? "FREE"
            : formatPrice(delivery);

    if (totalElement)
        totalElement.textContent = formatPrice(total);

}

// Load Checkout
function loadCheckout() {

    if (!checkoutItems) return;

    checkoutItems.innerHTML = "";

    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <div class="empty-cart">

                <h3>Your cart is empty</h3>

                <p>Add products before checking out.</p>

                <a href="shop.html" class="checkout-btn">

                    Continue Shopping

                </a>

            </div>
        `;

        if (subtotalElement)
            subtotalElement.textContent = "R0.00";

        if (deliveryElement)
            deliveryElement.textContent = "R0.00";

        if (totalElement)
            totalElement.textContent = "R0.00";

        return;
    }

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;

        checkoutItems.innerHTML += `

            <div class="checkout-item">

                <img
                    src="${item.image}"
                    alt="${item.name}">

                <div class="checkout-info">

                    <h4>${item.name}</h4>

                    <p>Quantity: ${item.quantity}</p>

                    <small>${formatPrice(item.price)} each</small>

                </div>

                <strong>

                    ${formatPrice(itemTotal)}

                </strong>

            </div>

        `;

    });

    calculateTotals();

}

// Start
loadCheckout();