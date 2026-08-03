// ========================================
// TECHTRAY CHECKOUT
// ========================================

const checkoutForm = document.getElementById("checkoutForm");
const orderSummary = document.getElementById("order-summary");
const totalPrice = document.getElementById("total-price");
const placeOrderBtn = document.getElementById("place-order");

// Load cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Generate order ID
function generateOrderID() {
    const random = Math.floor(Math.random() * 900000) + 100000;
    return "TT" + random;
}
// ===============================
// TECHTRAY CHECKOUT
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const checkoutItems = document.getElementById("checkoutItems");
const subtotalElement = document.getElementById("subtotal");
const shippingElement = document.getElementById("shipping");
const totalElement = document.getElementById("total");

const SHIPPING_COST = 120;

function displayCheckoutCart() {

    orderSummary.innerHTML = "";

    if (cart.length === 0) {

        orderSummary.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        placeOrderBtn.disabled = true;
        return;
    }

    let total = 0;

    cart.forEach(product => {

        total += product.price * product.quantity;

        orderSummary.innerHTML += `

            <div class="checkout-item">

                <img src="${product.image}" alt="${product.name}">

                <div>

                    <h4>${product.name}</h4>

                    <p>Qty: ${product.quantity}</p>

                    <strong>R${(product.price * product.quantity).toFixed(2)}</strong>

                </div>

            </div>

        `;

    });

    totalPrice.textContent = `R${total.toFixed(2)}`;

}

displayCheckoutCart();