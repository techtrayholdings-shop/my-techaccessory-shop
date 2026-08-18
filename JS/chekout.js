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
);