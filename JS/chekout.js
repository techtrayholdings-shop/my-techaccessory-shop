// ===========================================
// TECHTRAY CHECKOUT
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    // Get cart
    let cart = JSON.parse(localStorage.getItem("techtrayCart")) || [];

    // Calculate total
    let total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    // Update total if element exists
    const totalElement = document.getElementById("checkoutTotal");

    if (totalElement) {
        totalElement.textContent = "R" + total.toFixed(2);
    }

});

// Save order
function saveOrder(orderData) {

    let orders = JSON.parse(localStorage.getItem("techtrayOrders")) || [];

    orders.unshift(orderData);

    localStorage.setItem(
        "techtrayOrders",
        JSON.stringify(orders)
    );

}