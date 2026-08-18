/* ==========================================
   TECHTRAY HOLDINGS
   CART.JS
   SINGLE CART SYSTEM
========================================== */

const CART_STORAGE_KEY = "techtray-cart";

/* ==========================================
   LOAD CART
========================================== */

let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];


/* ==========================================
   SAVE CART
========================================== */

function saveCart() {

    localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cart)
    );

    updateCartCount();
}


/* ==========================================
   UPDATE CART COUNT
========================================== */

function updateCartCount() {

    const cartCount = document.getElementById("cart-count");

    if (!cartCount) return;

    const totalItems = cart.reduce(
        (total, item) => total + Number(item.quantity || 0),
        0
    );

    cartCount.textContent = totalItems;
}


/* ==========================================
   ADD TO CART
========================================== */

function addToCart(id) {

    const product = products.find(
        product => Number(product.id) === Number(id)
    );

    if (!product) {
        console.error("Product not found:", id);
        return;
    }

    const existingItem = cart.find(
        item => Number(item.id) === Number(id)
    );

    if (existingItem) {

        existingItem.quantity =
            Number(existingItem.quantity || 0) + 1;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    saveCart();

    showNotification(
        product.name + " added to cart."
    );
}


/* ==========================================
   DISPLAY CART
========================================== */

function displayCart() {

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">

                <h2>Your cart is empty.</h2>

                <p>Add products from the shop to continue.</p>

                <a href="shop.html" class="btn btn-primary">
                    Continue Shopping
                </a>

            </div>
        `;

        if (cartTotal) {
            cartTotal.textContent = "Total: R0.00";
        }

        updateCartCount();

        return;
    }

    let total = 0;

    cart.forEach(item => {

        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 1;

        const itemTotal = price * quantity;

        total += itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="cart-item-image">

                <div class="cart-item-info">

                    <h3>${item.name}</h3>

                    <p class="cart-item-price">
                        R${price.toFixed(2)}
                    </p>

                    <div class="quantity-controls">

                        <button
                            type="button"
                            onclick="decreaseQuantity(${item.id})">
                            −
                        </button>

                        <span>
                            ${quantity}
                        </span>

                        <button
                            type="button"
                            onclick="increaseQuantity(${item.id})">
                            +
                        </button>

                    </div>

                    <p class="cart-item-total">
                        Item Total:
                        <strong>
                            R${itemTotal.toFixed(2)}
                        </strong>
                    </p>

                    <button
                        type="button"
                        class="remove-cart-item"
                        onclick="removeItem(${item.id})">

                        Remove

                    </button>

                </div>

            </div>
        `;

    });

    if (cartTotal) {

        cartTotal.textContent =
            `Total: R${total.toFixed(2)}`;

    }

    updateCartCount();
}


/* ==========================================
   INCREASE QUANTITY
========================================== */

function increaseQuantity(id) {

    const item = cart.find(
        item => Number(item.id) === Number(id)
    );

    if (!item) return;

    item.quantity =
        Number(item.quantity || 0) + 1;

    saveCart();

    displayCart();
}


/* ==========================================
   DECREASE QUANTITY
========================================== */

function decreaseQuantity(id) {

    const item = cart.find(
        item => Number(item.id) === Number(id)
    );

    if (!item) return;

    item.quantity =
        Number(item.quantity || 0) - 1;

    if (item.quantity <= 0) {

        cart = cart.filter(
            item => Number(item.id) !== Number(id)
        );

    }

    saveCart();

    displayCart();
}


/* ==========================================
   REMOVE ITEM
========================================== */

function removeItem(id) {

    cart = cart.filter(
        item => Number(item.id) !== Number(id)
    );

    saveCart();

    displayCart();
}


/* ==========================================
   CLEAR CART
========================================== */

function clearCart() {

    if (cart.length === 0) {
        return;
    }

    const confirmClear = confirm(
        "Are you sure you want to clear your cart?"
    );

    if (!confirmClear) return;

    cart = [];

    saveCart();

    displayCart();

    showNotification(
        "Your cart has been cleared."
    );
}


/* ==========================================
   WHATSAPP CHECKOUT
========================================== */

function checkoutWhatsApp() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    let message =
        "Hello TechTray Holdings,%0A%0A" +
        "I would like to place an order:%0A%0A";

    let total = 0;

    cart.forEach(item => {

        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 1;

        const itemTotal = price * quantity;

        total += itemTotal;

        message +=
            `• ${encodeURIComponent(item.name)}` +
            ` x${quantity}` +
            ` - R${itemTotal.toFixed(2)}%0A`;

    });

    message +=
        `%0AOrder Total: R${total.toFixed(2)}` +
        `%0A%0AThank you.`;

    const whatsappURL =
        `https://wa.me/27662653887?text=${message}`;

    window.open(
        whatsappURL,
        "_blank"
    );
}


/* ==========================================
   INITIALISE CART
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateCartCount();

        displayCart();

    }
);