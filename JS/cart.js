/* ==========================================
   TECHTRAY HOLDINGS
   CART.JS
========================================== */

let cart = JSON.parse(localStorage.getItem("techtray-cart")) || [];

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// ===============================
// DISPLAY CART
// ===============================

function displayCart() {

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <h2>Your cart is empty.</h2>
            <br>
            <a href="shop.html" class="btn btn-primary">
                Continue Shopping
            </a>
        `;

        cartTotal.textContent = "Total: R0";
        return;
    }

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `
        <div class="product">

            <img src="${item.image}" alt="${item.name}">

            <div class="product-info">

                <h3>${item.name}</h3>

                <p>R${item.price}</p>

                <p>Quantity: ${item.quantity}</p>

                <button onclick="increaseQuantity(${item.id})">+</button>

                <button onclick="decreaseQuantity(${item.id})">-</button>

                <button onclick="removeItem(${item.id})">
                    Remove
                </button>

            </div>

        </div>
        `;
    });

    cartTotal.textContent = `Total: R${total}`;

    localStorage.setItem("techtray-cart", JSON.stringify(cart));
}

// ===============================
// QUANTITY
// ===============================

function increaseQuantity(id) {

    const item = cart.find(p => p.id === id);

    if (item) {
        item.quantity++;
    }

    displayCart();
}

function decreaseQuantity(id) {

    const item = cart.find(p => p.id === id);

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {
        cart = cart.filter(p => p.id !== id);
    }

    displayCart();
}

// ===============================
// REMOVE ITEM
// ===============================

function removeItem(id) {

    cart = cart.filter(item => item.id !== id);

    displayCart();
}

// ===============================
// CLEAR CART
// ===============================

function clearCart() {

    if (!confirm("Clear your shopping cart?")) return;

    cart = [];

    displayCart();
}

// ===============================
// WHATSAPP CHECKOUT
// ===============================

function checkoutWhatsApp() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    let message = "Hello TechTray Holdings,%0A%0AI would like to order:%0A%0A";

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        message += `• ${item.name} x${item.quantity} - R${item.price * item.quantity}%0A`;

    });

    message += `%0ATotal: R${total}`;

    window.open(
        `https://wa.me/27662653887?text=${message}`,
        "_blank"
    );
}

// ===============================

displayCart();
