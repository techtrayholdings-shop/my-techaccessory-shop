/* ==========================================
   TECHTRAY HOLDINGS
   CART.JS
   CENTRAL SHOPPING CART
========================================== */

const CART_STORAGE_KEY = "techtray-cart";


// ==========================================
// LOAD CART
// ==========================================

let cart = [];

function loadCart() {

    try {

        const savedCart =
            localStorage.getItem(CART_STORAGE_KEY);

        if (!savedCart) {

            cart = [];

            return;
        }

        const parsedCart =
            JSON.parse(savedCart);

        if (!Array.isArray(parsedCart)) {

            cart = [];

            return;
        }

        cart = parsedCart.map(item => ({

            ...item,

            id: Number(item.id),

            price: Number(item.price) || 0,

            quantity: Number(item.quantity) || 1

        }));

    } catch (error) {

        console.error(
            "TechTray Cart: Unable to load cart.",
            error
        );

        cart = [];

    }

}


// ==========================================
// SAVE CART
// ==========================================

function saveCart() {

    localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cart)
    );

    updateCartCount();

}


// ==========================================
// CART COUNT
// ==========================================

function updateCartCount() {

    const cartCount =
        document.getElementById("cart-count");

    if (!cartCount) return;

    const totalItems =
        cart.reduce(
            (total, item) => {

                return total +
                    Number(item.quantity || 0);

            },
            0
        );

    cartCount.textContent =
        totalItems;

}


// ==========================================
// DISPLAY CART
// ==========================================

function displayCart() {

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");


    if (!cartItems) {

        console.warn(
            "TechTray Cart: #cart-items not found."
        );

        return;

    }


    cartItems.innerHTML = "";


    // ======================================
    // EMPTY CART
    // ======================================

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <h2>Your cart is empty.</h2>

                <p>
                    Add some products before checking out.
                </p>

                <a
                    href="shop.html"
                    class="btn btn-primary">

                    Continue Shopping

                </a>

            </div>

        `;


        if (cartTotal) {

            cartTotal.textContent =
                "Total: R0.00";

        }


        updateCartCount();

        return;

    }


    // ======================================
    // CALCULATE TOTAL
    // ======================================

    let total = 0;


    // ======================================
    // DISPLAY ITEMS
    // ======================================

    cart.forEach(function (item) {

        const price =
            Number(item.price) || 0;

        const quantity =
            Number(item.quantity) || 1;

        const itemTotal =
            price * quantity;


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
                        Price:
                        R${price.toFixed(2)}
                    </p>

                    <p>
                        Quantity:
                        ${quantity}
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


    // ======================================
    // TOTAL
    // ======================================

    if (cartTotal) {

        cartTotal.textContent =
            "Total: R" + total.toFixed(2);

    }


    updateCartCount();

}


// ==========================================
// ADD TO CART
// ==========================================

function addToCart(id) {

    id = Number(id);


    const product =
        products.find(
            product => Number(product.id) === id
        );


    if (!product) {

        console.error(
            "TechTray Cart: Product not found:",
            id
        );

        return;

    }


    const existingItem =
        cart.find(
            item => Number(item.id) === id
        );


    if (existingItem) {

        existingItem.quantity =
            Number(existingItem.quantity) + 1;

    } else {

        cart.push({

            ...product,

            id: Number(product.id),

            price: Number(product.price),

            quantity: 1

        });

    }


    saveCart();

    updateCartCount();


    if (typeof showNotification === "function") {

        showNotification(
            product.name +
            " added to cart."
        );

    }


    console.log(
        "TechTray Cart Updated:",
        cart
    );

}


// ==========================================
// INCREASE QUANTITY
// ==========================================

function increaseQuantity(id) {

    id = Number(id);


    const item =
        cart.find(
            item => Number(item.id) === id
        );


    if (!item) return;


    item.quantity =
        Number(item.quantity) + 1;


    saveCart();

    displayCart();

}


// ==========================================
// DECREASE QUANTITY
// ==========================================

function decreaseQuantity(id) {

    id = Number(id);


    const item =
        cart.find(
            item => Number(item.id) === id
        );


    if (!item) return;


    item.quantity =
        Number(item.quantity) - 1;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => Number(item.id) !== id
            );

    }


    saveCart();

    displayCart();

}


// ==========================================
// REMOVE ITEM
// ==========================================

function removeItem(id) {

    id = Number(id);


    cart =
        cart.filter(
            item => Number(item.id) !== id
        );


    saveCart();

    displayCart();

}


// ==========================================
// CLEAR CART
// ==========================================

function clearCart() {

    if (cart.length === 0) {

        alert(
            "Your cart is already empty."
        );

        return;

    }


    const confirmed =
        confirm(
            "Are you sure you want to clear your shopping cart?"
        );


    if (!confirmed) return;


    cart = [];


    localStorage.removeItem(
        CART_STORAGE_KEY
    );


    updateCartCount();

    displayCart();

}


// ==========================================
// WHATSAPP CHECKOUT
// ==========================================

function checkoutWhatsApp() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty."
        );

        return;

    }


    let message =
        "Hello TechTray Holdings,\n\n" +
        "I would like to place the following order:\n\n";


    let total = 0;


    cart.forEach(function (item) {

        const price =
            Number(item.price) || 0;

        const quantity =
            Number(item.quantity) || 1;

        const itemTotal =
            price * quantity;


        total += itemTotal;


        message +=
            "• " +
            item.name +
            " x" +
            quantity +
            " - R" +
            itemTotal.toFixed(2) +
            "\n";

    });


    message +=
        "\nOrder Total: R" +
        total.toFixed(2);


    message +=
        "\n\nPlease confirm availability and delivery details.";


    const whatsappURL =
        "https://wa.me/27662653887?text=" +
        encodeURIComponent(message);


    window.open(
        whatsappURL,
        "_blank"
    );

}


// ==========================================
// INITIALISE CART
// ==========================================

loadCart();

updateCartCount();

displayCart();


console.log(
    "TechTray Cart Loaded:",
    cart
);