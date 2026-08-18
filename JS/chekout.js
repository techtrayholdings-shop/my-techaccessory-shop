/* ==========================================
   TECHTRAY HOLDINGS
   CHECKOUT.JS
   CENTRAL CHECKOUT SYSTEM
========================================== */

const CART_STORAGE_KEY = "techtray-cart";

/* ==========================================
   GET CART
========================================== */

function getCheckoutCart() {

    const savedCart =
        localStorage.getItem(CART_STORAGE_KEY);

    if (!savedCart) {
        return [];
    }

    try {

        const parsedCart =
            JSON.parse(savedCart);

        if (!Array.isArray(parsedCart)) {
            return [];
        }

        return parsedCart.map(item => ({

            ...item,

            price: Number(item.price) || 0,

            quantity:
                Number(item.quantity) || 1

        }));

    } catch (error) {

        console.error(
            "Unable to load TechTray cart:",
            error
        );

        return [];

    }

}


/* ==========================================
   CART
========================================== */

let cart = getCheckoutCart();


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

const couponCode =
    document.getElementById("couponCode");

const applyCoupon =
    document.getElementById("applyCoupon");

const successModal =
    document.getElementById("successModal");

const continueShopping =
    document.getElementById("continueShopping");


/* ==========================================
   FORMAT PRICE
========================================== */

function formatPrice(price) {

    return "R" +
        Number(price || 0).toFixed(2);

}


/* ==========================================
   UPDATE CART COUNT
========================================== */

function updateCheckoutCartCount() {

    if (!cartCountElement) return;

    const totalItems =
        cart.reduce(
            (total, item) =>
                total +
                Number(item.quantity || 0),
            0
        );

    cartCountElement.textContent =
        totalItems;

}


/* ==========================================
   CALCULATE SUBTOTAL
========================================== */

function calculateSubtotal() {

    return cart.reduce(
        (total, item) => {

            const price =
                Number(item.price) || 0;

            const quantity =
                Number(item.quantity) || 1;

            return total +
                (price * quantity);

        },
        0
    );

}


/* ==========================================
   CALCULATE TOTALS
========================================== */

function calculateCheckoutTotals() {

    const subtotal =
        calculateSubtotal();

    const discount = 0;

    let delivery = 0;

    /*
        FREE DELIVERY ON ORDERS
        OVER R1000
    */

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

            deliveryElement.textContent =
                "FREE";

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

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add products before
                    checking out.
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
                        Quantity:
                        ${quantity}
                    </p>

                    <small>
                        ${formatPrice(price)}
                        each
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


            alert(
                "Coupon code not recognised."
            );

        }
    );

}


/* ==========================================
   CHECKOUT FORM
========================================== */

if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* RELOAD CART */

            cart =
                getCheckoutCart();


            /* CHECK CART */

            if (cart.length === 0) {

                alert(
                    "Your cart is empty. " +
                    "Please add a product before checkout."
                );

                return;

            }


            /* CUSTOMER DETAILS */

            const customerName =
                document
                    .getElementById("customerName")
                    ?.value
                    .trim();

            const customerPhone =
                document
                    .getElementById("customerPhone")
                    ?.value
                    .trim();

            const customerEmail =
                document
                    .getElementById("customerEmail")
                    ?.value
                    .trim();

            const customerAddress =
                document
                    .getElementById("customerAddress")
                    ?.value
                    .trim();

            const orderNotes =
                document
                    .getElementById("orderNotes")
                    ?.value
                    .trim();


            /* REQUIRED INFORMATION */

            if (
                !customerName ||
                !customerPhone ||
                !customerAddress
            ) {

                alert(
                    "Please complete all required " +
                    "customer information."
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

                startIKhokhaPayment();

                return;

            }


            /* CASH ON COLLECTION */

            processCashOrder(
                customerName,
                customerPhone,
                customerEmail,
                customerAddress,
                orderNotes
            );

        }
    );

}


/* ==========================================
   iKHOKHA
========================================== */

function startIKhokhaPayment() {

    /*
        iKhokha integration will be connected
        here through a secure backend.

        Never place private API credentials
        inside this JavaScript file.
    */

    alert(
        "iKhokha payment is ready to be connected."
    );

}


/* ==========================================
   CASH ORDER
========================================== */

function processCashOrder(
    customerName,
    customerPhone,
    customerEmail,
    customerAddress,
    orderNotes
) {

    console.log(
        "TechTray Order:",
        {
            customerName,
            customerPhone,
            customerEmail,
            customerAddress,
            orderNotes,
            cart,
            total: calculateSubtotal()
        }
    );


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
        function () {

            window.location.href =
                "shop.html";

        }
    );

}


/* ==========================================
   INITIALISE CHECKOUT
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /*
            Reload the latest cart
            from localStorage.
        */

        cart =
            getCheckoutCart();


        displayCheckoutItems();

        updateCheckoutCartCount();

    }
);