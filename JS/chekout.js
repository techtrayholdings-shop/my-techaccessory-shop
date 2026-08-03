/*=========================================
    TECHTRAY CHECKOUT
=========================================*/

const checkoutItems = document.getElementById("checkout-items");
const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("checkout-total");
const checkoutForm = document.getElementById("checkoutForm");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/*=========================================
    LOAD CHECKOUT ITEMS
=========================================*/

function loadCheckout() {

    if (!checkoutItems) return;

    checkoutItems.innerHTML = "";

    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <p>Your cart is empty.</p>
        `;

        subtotalElement.textContent = "R0.00";
        totalElement.textContent = "R0.00";

        return;
    }

    let subtotal = 0;

    cart.forEach(item => {

        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        checkoutItems.innerHTML += `
            <div class="checkout-item">

                <img src="${item.image}" alt="${item.name}">

                <div class="checkout-item-info">

                    <h4>${item.name}</h4>

                    <p>Quantity: ${item.quantity}</p>

                    <p>Price: R${item.price.toFixed(2)}</p>

                </div>

                <div class="checkout-item-total">

                    R${itemTotal.toFixed(2)}

                </div>

            </div>
        `;

    });

    subtotalElement.textContent = `R${subtotal.toFixed(2)}`;
    totalElement.textContent = `R${subtotal.toFixed(2)}`;

}

loadCheckout();