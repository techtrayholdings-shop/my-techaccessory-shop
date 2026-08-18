/* ==========================================
   TECHTRAY HOLDINGS
   CART.JS
   CENTRAL CART SYSTEM
========================================== */

const CART_STORAGE_KEY = "techtray-cart";

let cart = [];


// ==========================================
// LOAD CART
// ==========================================

function loadCart() {

    try {

        const savedCart =
            localStorage.getItem(CART_STORAGE_KEY);

        if (!savedCart) {
            cart = [];
            return;
        }

        const parsedCart = JSON.parse(savedCart);

        cart = Array.isArray(parsedCart)
            ? parsedCart
            : [];

        cart = cart.map(item => ({
            ...item,
            quantity: Number(item.quantity) || 1
        }));

    } catch (error) {

        console.error("Unable to load cart:", error);

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
// ADD TO CART
// ==========================================

function addToCart(id) {

    const product =
        products.find(product => product.id === Number(id));

    if (!product) {

        console.error(
            "Product not found:",
            id
        );

        return;

    }


    const existingItem =
        cart.find(item => item.id === Number(id));


    if (existingItem) {

        existingItem.quantity =
            Number(existingItem.quantity) + 1;

    } else {

        cart.push({

            ...product,

            id: Number(product.id),

            quantity: 1

        });

    }


    saveCart();

    showNotification(
        product.name + " added to cart."
    );


    console.log(
        "TechTray cart:",
        cart
    );

}


// ==========================================
// UPDATE CART COUNT
// ==========================================

function updateCartCount() {

    const cartCount =
        document.getElementById("cart-count");

    if (!cartCount) return;


    const totalItems =
        cart.reduce(
            (total, item) =>
                total + Number(item.quantity || 0),
            0
        );


    cartCount.textContent =
        totalItems;

}


// ==========================================
// INITIALISE
// ==========================================

loadCart();

updateCartCount();