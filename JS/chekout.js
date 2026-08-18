/* ==========================================
   TECHTRAY HOLDINGS
   CHECKOUT.JS
   CENTRAL CART CONNECTION
========================================== */

const CHECKOUT_CART_KEY = "techtray-cart";


/* ==========================================
   GET CART
========================================== */

function getCheckoutCart() {

    const savedCart =
        localStorage.getItem(CHECKOUT_CART_KEY);

    if (!savedCart) {
        return [];
    }

    try {

        const parsedCart = JSON.parse(savedCart);

        if (!Array.isArray(parsedCart)) {
            return [];
        }

        return parsedCart.map(item => ({

            ...item,

            id: Number(item.id),

            price: Number(item.price) || 0,

            quantity: Number(item.quantity) || 1

        }));

    } catch (error) {

        console.error(
            "TechTray: Unable to load cart.",
            error
        );

        return [];

    }

}


/* ==========================================
   CART
========================================== */

let checkoutCart = getCheckoutCart();


/* ==========================================
   ELEMENTS
========================================== */

const checkoutItems =
    document.getElementById("checkout-items");

const subtotalElement =
    document.getElementById("subtotal");

const discountElement =
    document.getElementById("discount");

const deliveryElement =
    document.getElementById("delivery");

const totalElement =
    document.getElementById("checkout-total");

const cartCountElement =
    document.getElementById("cart-count");

const checkoutForm =
    document.getElementById("checkoutForm");

const successModal =
    document.getElementById("successModal");

const continueShopping =
    document.getElementById("continueShopping");


/* ==========================================
   PRICE FORMAT
========================================== */

function formatPrice(price) {

    return "R" + Number(price || 0).toFixed(2);

}


/* ==========================================
   CART COUNT
========================================== */

function updateCheckoutCartCount() {

    if (!cartCountElement) return;

    const totalItems =
        checkoutCart.reduce(
            (total, item) => {

                return total +
                    Number(item.quantity || 0);

            },
            0
        );

    cartCountElement.textContent =
        totalItems;

}


/* ==========================================
   CALCULATE TOTALS
========================================== */

function calculateCheckoutTotals() {

    let subtotal = 0;

    checkoutCart.forEach(item => {

        const price =
            Number(item.price) || 0;

        const quantity =
            Number(item.quantity) || 1;

        subtotal +=
            price * quantity;

    });


    const discount = 0;


    let delivery = 0;

    if (subtotal > 0 && subtotal < 1000) {

        delivery = 120;

    }


    const total =
        subtotal -
        discount +
        delivery;


    if (subtotalElement) {

        subtotalElement.textContent =
            formatPrice(subtotal);

    }


    if (discountElement) {

        discountElement.textContent =
            formatPrice(discount);

    }


    if (deliveryElement) {

        deliveryElement.textContent =
            delivery === 0
                ? "FREE"
                : formatPrice(delivery);

    }


    if (totalElement) {

        totalElement.textContent =
            formatPrice(total);

    }

}


/* ==========================================
   DISPLAY CHECKOUT ITEMS
========================================== */

function displayCheckoutItems() {

    if (!checkoutItems) return;


    checkoutItems.innerHTML = "";


    /* EMPTY */

    if (checkoutCart.length === 0) {

        checkoutItems.innerHTML = `

            <div class="empty-cart">

                <h3>Your cart is empty</h3>

                <p>
                    Add products before checking out.
                </p>

                <a
                    href="shop.html"
                    class="checkout-btn">

                    Continue Shopping

                </a>

            </div>

        `;

        calculateCheckoutTotals();

        updateCheckoutCartCount();

        return;

    }


    /* PRODUCTS */

    checkoutCart.forEach(item => {

        const price =
            Number(item.price) || 0;

        const quantity =
            Number(item.quantity) || 1;

        const itemTotal =
            price * quantity;


        checkoutItems.innerHTML += `

            <div class="checkout-item">

                <img
                    src="${item.image}"
                    alt="${item.name}">

                <div class="checkout-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        Quantity: ${quantity}
                    </p>

                    <small>
                        ${formatPrice(price)} each
                    </small>

                </div>

                <strong>
                    ${formatPrice(itemTotal)}
                </strong>

            </div>

        `;

    });


    calculateCheckoutTotals();

    updateCheckoutCartCount();

}


/* ==========================================
   CHECKOUT FORM
========================================== */

if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            /* RELOAD CART */

            checkoutCart =
                getCheckoutCart();


            /* CHECK CART */

            if (checkoutCart.length === 0) {

                alert(
                    "Your cart is empty. Please add a product first."
                );

                return;

            }


            /* CUSTOMER */

            const customerName =
                document.getElementById(
                    "customerName"
                )?.value.trim();

            const customerPhone =
                document.getElementById(
                    "customerPhone"
                )?.value.trim();

            const customerAddress =
                document.getElementById(
                    "customerAddress"
                )?.value.trim();


            if (
                !customerName ||
                !customerPhone ||
                !customerAddress
            ) {

                alert(
                    "Please complete all required customer information."
                );

                return;

            }


            /* PAYMENT */

            const payment =
                document.querySelector(
                    'input[name="payment"]:checked'
                );


            if (!payment) {

                alert(
                    "Please select a payment method."
                );

                return;

            }


            /* IKHOKHA */

            if (
                payment.value === "iKhokha"
            ) {

                alert(
                    "iKhokha payment will be connected next."
                );

                return;

            }


            /* CASH */

            processCashOrder();

        }
    );

}


/* ==========================================
   PROCESS CASH ORDER
========================================== */

function processCashOrder() {

    /*
        Order successfully received.
        Clear the cart.
    */

    checkoutCart = [];

    localStorage.removeItem(
        CHECKOUT_CART_KEY
    );


    /* Update header */

    updateCheckoutCartCount();


    /* Show success */

    if (successModal) {

        successModal.style.display =
            "flex";

    } else {

        alert(
            "Your order has been received."
        );

    }

}


/* ==========================================
   CONTINUE SHOPPING
========================================== */

if (continueShopping) {

    continueShopping.addEventListener(
        "click",
        function() {

            window.location.href =
                "shop.html";

        }
    );

}


/* ==========================================
   INITIALIZE
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
            Get the latest cart again.
        */

        checkoutCart =
            getCheckoutCart();


        displayCheckoutItems();

        updateCheckoutCartCount();

    }
);