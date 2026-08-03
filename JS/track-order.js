document.addEventListener("DOMContentLoaded", () => {

    const trackButton = document.getElementById("trackButton");
    const orderInput = document.getElementById("orderNumber");
    const emailInput = document.getElementById("email");
    const trackingResult = document.getElementById("trackingResult");

    trackButton.addEventListener("click", function () {

        const order = orderInput.value.trim();
        const email = emailInput.value.trim();

        if (order === "" || email === "") {

            trackingResult.innerHTML = `
                <div class="tracking-error">
                    <h3>⚠ Please complete all fields</h3>
                    <p>Enter your Order Number and Email Address.</p>
                </div>
            `;

            return;
        }

        trackingResult.innerHTML = `
            <div class="tracking-loading">
                <h3>Searching for your order...</h3>
            </div>
        `;

        setTimeout(() => {

            const foundOrder = orders.find(item =>
                item.orderNumber.toLowerCase() === order.toLowerCase() &&
                item.email.toLowerCase() === email.toLowerCase()
            );

            if (!foundOrder) {

                trackingResult.innerHTML = `
                    <div class="tracking-error">
                        <h3>❌ Order Not Found</h3>
                        <p>Please check your Order Number and Email Address.</p>
                    </div>
                `;

                return;
            }

            let timeline = "";

            foundOrder.status.forEach(step => {

                timeline += `
                    <div class="timeline-item ${step.done ? "completed" : ""}">
                        <div class="timeline-icon">
                            ${step.done ? "✔" : "○"}
                        </div>

                        <div class="timeline-content">
                            ${step.text}
                        </div>
                    </div>
                `;

            });

            trackingResult.innerHTML = `

                <div class="order-summary">

                    <img src="${foundOrder.image}" alt="${foundOrder.product}">

                    <div>

                        <h2>${foundOrder.product}</h2>

                        <p><strong>Customer:</strong> ${foundOrder.customer}</p>

                        <p><strong>Order Number:</strong> ${foundOrder.orderNumber}</p>

                        <p><strong>Price:</strong> ${foundOrder.price}</p>

                        <p><strong>Courier:</strong> ${foundOrder.courier}</p>

                        <p><strong>Current Location:</strong> ${foundOrder.location}</p>

                        <p><strong>Estimated Delivery:</strong> ${foundOrder.delivery}</p>

                    </div>

                </div>

                <div class="timeline">

                    ${timeline}

                </div>

            `;

        }, 1500);

    });

});