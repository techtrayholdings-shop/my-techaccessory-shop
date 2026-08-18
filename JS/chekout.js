/* ==========================================
   TECHTRAY HOLDINGS
   CHECKOUT.JS
   CENTRAL CART SYSTEM
========================================== */

const CART_STORAGE_KEY = "techtray-cart";

/* ==========================================
   LOAD CART
========================================== */

function getCheckoutCart() {

    let savedCart = localStorage.getItem(CART_STORAGE_KEY);

    /*
        Migration support for an older cart key
    */
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

        return parsedCart.map(item => ({
            ...item,
            quantity: Number(item.quantity) || 1,
            price: Number(item.price) || 0
        }));

    } catch (error) {

        console.error("TechTray checkout cart error:", error);

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

const checkoutForm =
    document.getElementById("checkoutForm");

const cartCountElement =
    document.getElementById("cart-count");

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

function formatCheckoutPrice(price) {

    return "R" + Number(price || 0).toFixed(2);

}


/* ==========================================
   UPDATE CART COUNT
========================================== */

function updateCheckoutCartCount() {

    if (!cartCountElement) return;

    const totalItems = checkoutCart.reduce(
        (total, item) => {

            return total + Number(item.quantity || 0);

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

    checkoutCart.forEach(item => {

        const price =
            Number(item.price) || 0;

        const quantity =
            Number(item.quantity) || 1;

        subtotal += price * quantity;

    });


    /*
        DISCOUNT
    */

    let discount = 0;


    /*
        DELIVERY

        Orders of R1000 or more = FREE

        Orders below R1000 = R120
    */

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
            formatCheckoutPrice(subtotal);

    }


    /* DISCOUNT */

    if (discountElement) {

        discountElement.textContent =
            formatCheckoutPrice(discount);

    }


    /* DELIVERY */

    if (deliveryElement) {

        if (delivery === 0) {

            deliveryElement.textContent = "FREE";

        } else {

            deliveryElement.textContent =
                formatCheckoutPrice(delivery);

        }

    }


    /* TOTAL */

    if (totalElement) {

        totalElement.textContent =
            formatCheckoutPrice(total);

    }


    return {
        subtotal,
        discount,
        delivery,
        total
    };

}


/* ==========================================
   DISPLAY CHECKOUT ITEMS
========================================== */

function displayCheckoutItems() {

    if (!checkoutItems) return;

    checkoutItems.innerHTML = "";


    /* EMPTY CART */

    if (checkoutCart.length === 0) {

        checkoutItems.innerHTML = `

            <div class="empty-cart">

                <h3>Your cart is empty.</h3>

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
                        ${formatCheckoutPrice(price)} each
                    </small>

                </div>

                <strong>
                    ${formatCheckoutPrice(itemTotal)}
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

    applyCoupon.addEventListener("click", function () {

        const code =
            couponCode
                ? couponCode.value.trim().toUpperCase()
                : "";


        if (!code) {

            alert("Please enter a coupon code.");

            return;

        }


        /*
            Coupon system can be added later.
        */

        alert("Coupon code not recognised.");

    });

}


/* ==========================================
   CHECKOUT FORM
========================================== */

if (checkoutForm) {

    checkoutForm.addEventListener("submit", function (event) {

        event.preventDefault();


        /* CHECK CART */

        if (checkoutCart.length === 0) {

            alert(
                "Your cart is empty. Please add a product before checkout."
            );

            return;

        }


        /* CUSTOMER INFORMATION */

        const customerName =
            document.getElementById("customerName")?.value.trim();

        const customerPhone =
            document.getElementById("customerPhone")?.value.trim();

        const customerEmail =
            document.getElementById("customerEmail")?.value.trim();

        const customerAddress =
            document.getElementById("customerAddress")?.value.trim();

        const orderNotes =
            document.getElementById("orderNotes")?.value.trim();


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


        /* PAYMENT METHOD */

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


        /* ==========================================
           iKHOKHA
        ========================================== */

        if (payment.value === "iKhokha") {

            startIKhokhaPayment();

            return;

        }


        /* ==========================================
           CASH ON COLLECTION
        ========================================== */

        processCashOrder({

            customerName,
            customerPhone,
            customerEmail,
            customerAddress,
            orderNotes,
            payment: payment.value

        });

    });

}


/* ==========================================
   iKHOKHA PAYMENT
========================================== */

function startIKhokhaPayment() {

    alert(
        "iKhokha payment integration will be connected here."
    );

}


/* ==========================================
   CASH ORDER
========================================== */

function processCashOrder(customerDetails) {

    console.log(
        "TechTray Order:",
        customerDetails,
        checkoutCart
    );


    /* ==========================================
       CLEAR CART AFTER SUCCESSFUL ORDER
    ========================================== */

    checkoutCart = [];

    localStorage.removeItem(CART_STORAGE_KEY);

    /* Also remove any old cart system */

    localStorage.removeItem("cart");


    /* Update cart count */

    updateCheckoutCartCount();


    /* ==========================================
       SHOW SUCCESS MESSAGE
    ========================================== */

    if (successModal) {

        successModal.style.display = "flex";

    } else {

        alert(
            "Your order has been received. TechTray Holdings will contact you shortly."
        );

    }

}

/* ==========================================
   CONTINUE SHOPPING
========================================== */

if (continueShopping) {

    continueShopping.addEventListener("click", function () {

        window.location.href = "shop.html";

    });

}


/* ==========================================
   INITIALIZE CHECKOUT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /*
        Reload the latest cart from Local Storage.
        This makes sure checkout sees products
        added from shop.html.
    */

    checkoutCart = getCheckoutCart();

    displayCheckoutItems();

    updateCheckoutCartCount();

});