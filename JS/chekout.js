/* ==========================================
   TECHTRAY HOLDINGS
   CHECKOUT.JS
   SINGLE CART SYSTEM
========================================== */

const CART_STORAGE_KEY = "techtray-cart";

let cart =
    JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];


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

const checkoutForm =
    document.getElementById("checkoutForm");


/* ==========================================
   FORMAT PRICE
========================================== */

function formatPrice(price) {

    return "R" + Number(price || 0).toFixed(2);

}


/* ==========================================
   CALCULATE TOTALS
========================================== */

function calculateTotals() {

    let subtotal = 0;

    cart.forEach(item => {

        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 1;

        subtotal += price * quantity;

    });

    const discount = 0;

    const delivery =
        subtotal >= 1000
            ? 0
            : subtotal > 0
                ? 120
                : 0;

    const total =
        subtotal - discount + delivery;


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
   LOAD CHECKOUT
========================================== */

function loadCheckout() {

    if (!checkoutItems) return;

    checkoutItems.innerHTML = "";


    if (cart.length === 0) {

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

        if (subtotalElement)
            subtotalElement.textContent = "R0.00";

        if (discountElement)
            discountElement.textContent = "R0.00";

        if (deliveryElement)
            deliveryElement.textContent = "R0.00";

        if (totalElement)
            totalElement.textContent = "R0.00";

        return;

    }


    cart.forEach(item => {

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

                <div class="checkout-info">

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


    calculateTotals();

}


/* ==========================================
   UPDATE CART COUNT
========================================== */

function updateCheckoutCartCount() {

    const cartCount =
        document.getElementById("cart-count");

    if (!cartCount) return;

    const totalItems =
        cart.reduce(
            (total, item) =>
                total + Number(item.quantity || 0),
            0
        );

    cartCount.textContent = totalItems;

}


/* ==========================================
   CHECKOUT FORM
========================================== */

if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            if (cart.length === 0) {

                alert(
                    "Your cart is empty. Please add a product first."
                );

                return;

            }

            const payment =
                document.querySelector(
                    'input[name="payment"]:checked'
                );

            if (
                payment &&
                payment.value === "iKhokha"
            ) {

                /*
                    iKHOKHA PAYMENT
                    WILL BE CONNECTED HERE
                */

                alert(
                    "iKhokha payment will be connected here."
                );

                return;

            }


            /*
                CASH ON COLLECTION
            */

            alert(
                "Your order has been received."
            );

        }
    );

}


/* ==========================================
   START
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        cart =
            JSON.parse(
                localStorage.getItem(CART_STORAGE_KEY)
            ) || [];

        updateCheckoutCartCount();

        loadCheckout();

    }
);/* ==========================================
   TECHTRAY HOLDINGS
   CHECKOUT.JS
   CONNECTED TO CART
========================================== */

const CART_STORAGE_KEY = "techtray-cart";

/* ==========================================
   LOAD CART
========================================== */

function getCart() {

    // Main cart
    let savedCart = localStorage.getItem(CART_STORAGE_KEY);

    // Old cart system - migration support
    if (!savedCart) {
        savedCart = localStorage.getItem("cart");
    }

    if (!savedCart) {
        return [];
    }

    try {

        const parsedCart = JSON.parse(savedCart);

        if (!Array.isArray(parsedCart)) {
            return [];
        }

        // Make sure quantities are numbers
        return parsedCart.map(item => ({
            ...item,
            quantity: Number(item.quantity) || 1
        }));

    } catch (error) {

        console.error("Unable to load cart:", error);

        return [];
    }
}


/* ==========================================
   CART
========================================== */

let cart = getCart();


/* ==========================================
   SAVE CART
========================================== */

function saveCheckoutCart() {

    localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cart)
    );

}


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


/* ==========================================
   FORMAT PRICE
========================================== */

function formatPrice(price) {

    return "R" + Number(price || 0).toFixed(2);

}


/* ==========================================
   UPDATE CART COUNT
========================================== */

function updateCheckoutCartCount() {

    if (!cartCountElement) return;

    const totalItems = cart.reduce(
        (total, item) => {

            return total +
                (Number(item.quantity) || 0);

        },
        0
    );

    cartCountElement.textContent = totalItems;

}


/* ==========================================
   CALCULATE TOTALS
========================================== */

function calculateCheckoutTotals() {

    let subtotal = 0;

    cart.forEach(item => {

        const price =
            Number(item.price) || 0;

        const quantity =
            Number(item.quantity) || 1;

        subtotal += price * quantity;

    });


    // Coupon discount
    const discount = 0;


    // Delivery
    let delivery = 0;

    if (subtotal > 0 && subtotal < 1000) {
        delivery = 120;
    }


    const total =
        subtotal -
        discount +
        delivery;


    /* SUBTOTAL */

    if (subtotalElement) {

        subtotalElement.textContent =
            formatPrice(subtotal);

    }


    /* DISCOUNT */

    if (discountElement) {

        discountElement.textContent =
            formatPrice(discount);

    }


    /* DELIVERY */

    if (deliveryElement) {

        if (delivery === 0) {

            deliveryElement.textContent = "FREE";

        } else {

            deliveryElement.textContent =
                formatPrice(delivery);

        }

    }


    /* TOTAL */

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


    /* EMPTY CART */

    if (cart.length === 0) {

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


    /* DISPLAY PRODUCTS */

    cart.forEach(item => {

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
   COUPON
========================================== */

const applyCoupon =
    document.getElementById("applyCoupon");

const couponCode =
    document.getElementById("couponCode");


if (applyCoupon) {

    applyCoupon.addEventListener(
        "click",
        function () {

            const code =
                couponCode
                    ? couponCode.value
                        .trim()
                        .toUpperCase()
                    : "";


            if (!code) {

                alert(
                    "Please enter a coupon code."
                );

                return;

            }


            /*
                Coupon system can be expanded later.
            */

            alert(
                "Coupon code not recognised."
            );

        }
    );

}


/* ==========================================
   CHECKOUT FORM
========================================== */

const checkoutForm =
    document.getElementById("checkoutForm");


if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* CHECK CART */

            if (cart.length === 0) {

                alert(
                    "Your cart is empty. Please add a product before checkout."
                );

                return;

            }


            /* CUSTOMER DETAILS */

            const customerName =
                document.getElementById(
                    "customerName"
                )?.value.trim();

            const customerPhone =
                document.getElementById(
                    "customerPhone"
                )?.value.trim();

            const customerEmail =
                document.getElementById(
                    "customerEmail"
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


            /* iKHOKHA */

            if (
                payment.value === "iKhokha"
            ) {

                /*
                    iKHOKHA INTEGRATION
                    WILL BE CONNECTED HERE.
                */

                startIKhokhaPayment();

                return;

            }


            /* CASH ON COLLECTION */

            processCashOrder();

        }
    );

}


/* ==========================================
   iKHOKHA
========================================== */

function startIKhokhaPayment() {

    /*
        We will connect the real iKhokha
        payment process here.

        IMPORTANT:

        The secret/API credentials must
        NOT be placed inside this
        JavaScript file.

        They must be handled securely
        through a backend/server.
    */

    alert(
        "iKhokha payment is ready to be connected."
    );

}


/* ==========================================
   CASH ORDER
========================================== */

function processCashOrder() {

    const successModal =
        document.getElementById(
            "successModal"
        );


    if (successModal) {

        successModal.style.display = "flex";

    } else {

        alert(
            "Your order has been received."
        );

    }

}


/* ==========================================
   CONTINUE SHOPPING
========================================== */

const continueShopping =
    document.getElementById(
        "continueShopping"
    );


if (continueShopping) {

    continueShopping.addEventListener(
        "click",
        function () {

            window.location.href =
                "shop.html";

        }
    );

}


/* ==========================================
   INITIALISE
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
            Reload cart one more time when
            the page is fully loaded.
        */

        cart = getCart();


        /*
            Migrate old cart if necessary.
        */

        if (cart.length > 0) {

            saveCheckoutCart();

        }


        displayCheckoutItems();

        updateCheckoutCartCount();

    }
);