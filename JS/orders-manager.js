function generateOrderNumber() {

    return "TT" +
        Date.now().toString().slice(-8) +
        Math.floor(Math.random() * 900 + 100);

}

function getOrders() {

    return JSON.parse(localStorage.getItem("techtrayOrders")) || [];

}

function saveOrder(order) {

    const orders = getOrders();

    orders.unshift(order);

    localStorage.setItem(
        "techtrayOrders",
        JSON.stringify(orders)
    );

}