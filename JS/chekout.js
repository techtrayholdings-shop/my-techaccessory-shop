/*=========================================
    TECHTRAY HOLDINGS
    CHECKOUT.JS
    PHASE 3 — CHECKOUT ENGINE
=========================================*/

// ========================================
// LOAD CART
// ========================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// ========================================
// CHECKOUT ELEMENTS
// ========================================

const checkoutItems = document.getElementById("checkout-items");
const subtotalElement = document.getElementById("subtotal");
const discountElement = document.getElementById("discount");
const deliveryElement = document.getElementById("delivery");
const totalElement = document.getElementById("checkout-total");

const checkoutForm = document.getElementById("checkoutForm");
const couponInput = document.getElementById("couponCode");
const applyCouponButton = document.getElementById("applyCoupon");

const loadingOverlay = document.getElementById("loadingOverlay");
const successModal = document.getElementById("successModal");
const continueShoppingButton = document.getElementById("continueShopping");


// ========================================
// CHECKOUT STATE
// ========================================

let appliedDiscount = 0;
let appliedCoupon = "";


// ========================================
// FORMAT PRICE
// ========================================

function formatPrice(price) {

    return "R" + Number(price).toFixed(2);

}


// ========================================
// CALCULATE SUBTOTAL
// ========================================

function calculateSubtotal() {

    let subtotal = 0;

    cart.forEach(item => {

        subtotal += Number(item.price) * Number(item.quantity);

    });

    return subtotal;

}


// ========================================
// CALCULATE DELIVERY
// ========================================

function calculateDelivery(subtotal) {

    return subtotal >= 1000 ? 0 : 120;

}


// ========================================
// CALCULATE TOTALS
// ========================================

function calculateTotals() {

    const subtotal = calculateSubtotal();

    const delivery = calculateDelivery(subtotal);

    const discount = Math.min(appliedDiscount, subtotal);

    const total = Math.max(
        0,
        subtotal - discount + delivery
    );


    // Subtotal

    if (subtotalElement) {

        subtotalElement.textContent =
            formatPrice(subtotal);

    }


    // Discount

    if (discountElement) {

        discountElement.textContent =
            discount > 0
                ? "-" + formatPrice(discount)
                : "R0.00";

    }


    // Delivery

    if (deliveryElement) {

        deliveryElement.textContent =
            delivery === 0
                ? "FREE"
                : formatPrice(delivery);

    }


    // Total

    if (totalElement) {

        totalElement.textContent =
            formatPrice(total);

    }


    return {

        subtotal,
        discount,
        delivery,
        total

    };

}


// ========================================
// LOAD CHECKOUT ITEMS
// ========================================

function loadCheckout() {

    if (!checkoutItems) return;


    checkoutItems.innerHTML = "";


    // Empty cart

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


    // Display products

    cart.forEach(item => {

        const itemTotal =
            Number(item.price) *
            Number(item.quantity);


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
                        Quantity: ${item.quantity}
                    </p>

                    <small>
                        ${formatPrice(item.price)}
                        each
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


// ========================================
// COUPON SYSTEM
// ========================================

function applyCoupon() {

    if (!couponInput) return;


    const code =
        couponInput.value
            .trim()
            .toUpperCase();


    if (!code) {

        alert("Please enter a coupon code.");

        return;

    }


    /*
        TEMPORARY TEST COUPON

        We can replace this with
        your real TechTray coupon
        system later.
    */

    const coupons = {

        "TECHTRAY10": 10

    };


    if (coupons[code]) {

        const subtotal =
            calculateSubtotal();


        appliedDiscount =
            subtotal * (coupons[code] / 100);


        appliedCoupon = code;


        calculateTotals();


        alert(
            `${code} applied successfully. ` +
            `${coupons[code]}% discount added.`
        );


        couponInput.disabled = true;


        if (applyCouponButton) {

            applyCouponButton.textContent =
                "Applied";

            applyCouponButton.disabled = true;

        }

    } else {

        alert(
            "Invalid or expired coupon code."
        );

    }

}


// ========================================
// COUPON BUTTON
// ========================================

if (applyCouponButton) {

    applyCouponButton.addEventListener(
        "click",
        applyCoupon
    );

}


// ========================================
// GET PAYMENT METHOD
// ========================================

function getPaymentMethod() {

    const selectedPayment =
        document.querySelector(
            'input[name="payment"]:checked'
        );


    if (!selectedPayment) {

        return null;

    }


    return selectedPayment.value;

}


// ========================================
// GENERATE ORDER REFERENCE
// ========================================

function generateOrderReference() {

    const timestamp =
        Date.now()
            .toString()
            .slice(-6);


    const random =
        Math.floor(
            100 + Math.random() * 900
        );


    return `TT-${timestamp}-${random}`;

}


// ========================================
// GET CUSTOMER DETAILS
// ========================================

function getCustomerDetails() {

    return {

        name:
            document
                .getElementById("customerName")
                ?.value
                .trim() || "",

        phone:
            document
                .getElementById("customerPhone")
                ?.value
                .trim() || "",

        email:
            document
                .getElementById("customerEmail")
                ?.value
                .trim() || "",

        address:
            document
                .getElementById("customerAddress")
                ?.value
                .trim() || "",

        notes:
            document
                .getElementById("orderNotes")
                ?.value
                .trim() || ""

    };

}


// ========================================
// VALIDATE CUSTOMER DETAILS
// ========================================

function validateCustomerDetails(customer) {

    if (!customer.name) {

        alert("Please enter your full name.");

        return false;

    }


    if (!customer.phone) {

        alert("Please enter your phone number.");

        return false;

    }


    if (!customer.address) {

        alert("Please enter your delivery address.");

        return false;

    }


    return true;

}


// ========================================
// SHOW LOADING
// ========================================

function showLoading() {

    if (loadingOverlay) {

        loadingOverlay.classList.add(
            "active"
        );

    }

}


// ========================================
// HIDE LOADING
// ========================================

function hideLoading() {

    if (loadingOverlay) {

        loadingOverlay.classList.remove(
            "active"
        );

    }

}


// ========================================
// SHOW SUCCESS
// ========================================

function showSuccess() {

    if (successModal) {

        successModal.classList.add(
            "active"
        );

    }

}


// ========================================
// SAVE ORDER
// ========================================

function saveOrder(
    customer,
    paymentMethod,
    totals
) {

    const orderReference =
        generateOrderReference();


    const order = {

        reference:
            orderReference,

        date:
            new Date().toISOString(),

        customer,

        items:
            cart,

        subtotal:
            totals.subtotal,

        discount:
            totals.discount,

        delivery:
            totals.delivery,

        total:
            totals.total,

        coupon:
            appliedCoupon,

        paymentMethod,

        paymentStatus:
            paymentMethod === "Cash on Collection"
                ? "Pending"
                : "Awaiting Payment",

        orderStatus:
            "Order Received"

    };


    localStorage.setItem(
        "techtrayLastOrder",
        JSON.stringify(order)
    );


    return order;

}


// ========================================
// HANDLE CASH ON COLLECTION
// ========================================

function processCashOrder(
    customer,
    totals
) {

    const order =
        saveOrder(
            customer,
            "Cash on Collection",
            totals
        );


    console.log(
        "TechTray Order:",
        order
    );


    /*
        IMPORTANT:

        We are NOT clearing the cart yet.

        We will handle this properly once
        payment/order confirmation is
        fully implemented.
    */


    hideLoading();

    showSuccess();


    alert(
        `Order ${order.reference} received successfully.`
    );

}


// ========================================
// HANDLE iKHOKHA
// ========================================

function processIKhokhaOrder(
    customer,
    totals
) {

    /*
        iKHOKHA INTEGRATION WILL BE
        CONNECTED HERE.

        DO NOT place your iKhokha
        secret/API credentials in
        this JavaScript file.

        The final flow will be:

        Checkout
            ↓
        Secure Backend
            ↓
        iKhokha
            ↓
        Customer Payment
            ↓
        Payment Confirmation
            ↓
        Order Confirmation
    */


    console.log(
        "iKhokha payment requested:",
        {
            customer,
            totals
        }
    );


    hideLoading();


    alert(
        "iKhokha online payment is being prepared. " +
        "The secure payment connection will be added next."
    );

}


// ========================================
// FORM SUBMISSION
// ========================================

if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            // Prevent checkout with empty cart

            if (cart.length === 0) {

                alert(
                    "Your cart is empty. " +
                    "Please add products before checking out."
                );

                return;

            }


            // Customer

            const customer =
                getCustomerDetails();


            if (
                !validateCustomerDetails(
                    customer
                )
            ) {

                return;

            }


            // Payment

            const paymentMethod =
                getPaymentMethod();


            if (!paymentMethod) {

                alert(
                    "Please select a payment method."
                );

                return;

            }


            // Totals

            const totals =
                calculateTotals();


            console.log(
                "Checkout totals:",
                totals
            );


            // Show loading

            showLoading();


            // Cash

            if (
                paymentMethod ===
                "Cash on Collection"
            ) {

                setTimeout(
                    function() {

                        processCashOrder(
                            customer,
                            totals
                        );

                    },
                    800
                );

                return;

            }


            // iKhokha

            if (
                paymentMethod ===
                "iKhokha"
            ) {

                processIKhokhaOrder(
                    customer,
                    totals
                );

                return;

            }

        }
    );

}


// ========================================
// CONTINUE SHOPPING
// ========================================

if (continueShoppingButton) {

    continueShoppingButton.addEventListener(
        "click",
        function() {

            window.location.href =
                "shop.html";

        }
    );

}


// ========================================
// START CHECKOUT
// ========================================

loadCheckout();
calculateTotals();