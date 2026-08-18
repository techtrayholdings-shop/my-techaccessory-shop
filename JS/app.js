/* ==========================================
   TECHTRAY HOLDINGS
   CART.JS
   CENTRAL CART SYSTEM
========================================== */

const CART_STORAGE_KEY = "techtray-cart";

// ===============================
// LOAD CART
// ===============================

let cart = JSON.parse(
    localStorage.getItem(CART_STORAGE_KEY)
) || [];

// ===============================
// CART ELEMENTS
// ===============================

const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// ===============================
// SAVE CART
// ===============================

function saveCart() {

    localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cart)
    );

    updateCartCount();
}

// ===============================
// UPDATE CART COUNT
// ===============================

function updateCartCount() {

    const cartCount = document.getElementById("cart-count");

    if (!cartCount) return;

    const totalItems = cart.reduce(
        (total, item) => total + Number(item.quantity || 0),
        0
    );

    cartCount.textContent = totalItems;
}

// ===============================
// DISPLAY CART
// ===============================

function displayCart() {

    if (!cartItems) return;

    cartItems.innerHTML = "";

    // EMPTY CART
    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">

                <h2>Your cart is empty.</h2>

                <p>Add some products before checking out.</p>

                <a
                    href="shop.html"
                    class="btn btn-primary">

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

            <div class="product cart-product">

                <img
                    src="${item.image}"
                    alt="${item.name}">

                <div class="product-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        Price: R${price.toFixed(2)}
                    </p>

                    <p>
                        Quantity: ${quantity}
                    </p>

                    <p>
                        Item Total:
                        <strong>
                            R${itemTotal.toFixed(2)}
                        </strong>
                    </p>

                    <div class="cart-actions">

                        <button
                            type="button"
                            onclick="increaseQuantity(${item.id})">

                            +

                        </button>

                        <button
                            type="button"
                            onclick="decreaseQuantity(${item.id})">

                            −

                        </button>

                        <button
                            type="button"
                            onclick="removeItem(${item.id})">

                            Remove

                        </button>

                    </div>

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

// ===============================
// INCREASE QUANTITY
// ===============================

function increaseQuantity(id) {

    const item = cart.find(
        product => product.id === id
    );

    if (!item) return;

    item.quantity++;

    saveCart();

    displayCart();
}

// ===============================
// DECREASE QUANTITY
// ===============================

function decreaseQuantity(id) {

    const item = cart.find(
        product => product.id === id
    );

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

        cart = cart.filter(
            product => product.id !== id
        );

    }

    saveCart();

    displayCart();
}

// ===============================
// REMOVE ITEM
// ===============================

function removeItem(id) {

    cart = cart.filter(
        item => item.id !== id
    );

    saveCart();

    displayCart();
}

// ===============================
// CLEAR CART
// ===============================

function clearCart() {

    if (cart.length === 0) {

        alert("Your cart is already empty.");

        return;
    }

    const confirmed = confirm(
        "Are you sure you want to clear your shopping cart?"
    );

    if (!confirmed) return;

    cart = [];

    saveCart();

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

    let message =
        "Hello TechTray Holdings,%0A%0A" +
        "I would like to place the following order:%0A%0A";

    let total = 0;

    cart.forEach(item => {

        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 1;

        const itemTotal = price * quantity;

        total += itemTotal;

        message +=
            `• ${item.name} x${quantity} - R${itemTotal.toFixed(2)}%0A`;

    });

    message +=
        `%0AOrder Total: R${total.toFixed(2)}`;

    message +=
        `%0A%0APlease confirm availability and delivery details.`;

    window.open(
        `https://wa.me/27662653887?text=${message}`,
        "_blank"
    );
}

// ===============================
// INITIALIZE CART
// ===============================

displayCart();

updateCartCount();