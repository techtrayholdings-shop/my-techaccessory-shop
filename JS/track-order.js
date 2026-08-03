const trackingForm = document.getElementById("trackingForm");
const trackingResult = document.getElementById("trackingResult");

trackingResult.style.display = "none";

trackingForm.addEventListener("submit", function(e){

    e.preventDefault();

    const order = document.getElementById("orderNumber").value.trim();
    const email = document.getElementById("email").value.trim();

    if(order === "" || email === ""){
        alert("Please complete all fields.");
        return;
    }

    trackingResult.style.display = "block";

    trackingResult.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Checking your order...</p>
        </div>
    `;

    setTimeout(function () {

    let orderStatus = [];

    if (order.toUpperCase() === "TT1001") {

        orderStatus = [
            { status: "Order Confirmed", class: "completed" },
            { status: "Preparing Order", class: "completed" },
            { status: "Shipped", class: "completed" },
            { status: "Out for Delivery", class: "active" },
            { status: "Delivered", class: "" }
        ];

    } else if (order.toUpperCase() === "TT1002") {

        orderStatus = [
            { status: "Order Confirmed", class: "completed" },
            { status: "Preparing Order", class: "active" },
            { status: "Shipped", class: "" },
            { status: "Out for Delivery", class: "" },
            { status: "Delivered", class: "" }
        ];

    } else if (order.toUpperCase() === "TT1003") {

        orderStatus = [
            { status: "Order Confirmed", class: "completed" },
            { status: "Preparing Order", class: "completed" },
            { status: "Shipped", class: "completed" },
            { status: "Out for Delivery", class: "completed" },
            { status: "Delivered", class: "completed" }
        ];

    } else {

        trackingResult.innerHTML = `
            <div class="order-not-found">
                <h3>Order Not Found</h3>
                <p>We couldn't find an order with that number.</p>
                <p>Please check your Order Number and try again.</p>
            </div>
        `;
        return;

    }

    let timeline = "";

    orderStatus.forEach(item => {

        timeline += `
            <div class="timeline-item ${item.class}">
                <div class="circle"></div>
                <p>${item.status}</p>
            </div>
        `;

    });

    trackingResult.innerHTML = `

<div class="order-summary">

    <img src="images/products/ew95.jpg" class="order-image">

    <div class="order-details">

        <h3>HOCO EW95 True Wireless Earbuds</h3>

        <p><strong>Order Number:</strong> ${order}</p>

        <p><strong>Customer Email:</strong> ${email}</p>

        <p><strong>Order Date:</strong> 03 August 2026</p>

        <p><strong>Courier:</strong> The Courier Guy</p>

        <p><strong>Estimated Delivery:</strong> 05 August 2026</p>

        <p><strong>Current Location:</strong> Johannesburg Distribution Centre</p>

        <p><strong>Total Paid:</strong> R499.00</p>

    </div>

</div>

<div class="timeline">

    ${timeline}

</div>

`;