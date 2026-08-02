/* ==========================================
   TECHTRAY HOLDINGS
   APP.JS
========================================== */

// ===============================
// DISPLAY PRODUCTS
// ===============================

const productList = document.getElementById("product-list");

function displayProducts(productArray) {

    if (!productList) return;

    productList.innerHTML = "";

    productArray.forEach(product => {

        let badge = "";

        if (product.badge === "NEW") {
            badge = `<span class="badge new">NEW</span>`;
        }

        if (product.badge === "BEST") {
            badge = `<span class="badge best">BEST SELLER</span>`;
        }

        productList.innerHTML += `

<div class="product">

    ${badge}

    <a href="product.html?id=${product.id}" class="product-link">

        <div class="product-image">

            <img src="${product.image}" alt="${product.name}">

        </div>

    </a>

    <div class="product-info">

        <h3>

            <a href="product.html?id=${product.id}" class="product-title">

                ${product.name}

            </a>

        </h3>

        <div class="product-rating">

            ⭐⭐⭐⭐⭐ <span>(4.9)</span>

        </div>

        <p>${product.description}</p>

        <div class="price">

            R${product.price}

        </div>

        <div class="product-buttons">

            <a href="product.html?id=${product.id}" class="view-btn">

                👁 View Details

            </a>

            <button onclick="addToCart(${product.id})">

                🛒 Add to Cart

            </button>

        </div>

    </div>

</div>

        `;
    });

}

// Load all products when the page opens
displayProducts(products);// Load all products when the page opens
displayProducts(products);
// ===============================
// SHOPPING CART
// ===============================

let cart = JSON.parse(localStorage.getItem("techtray-cart")) || [];

function saveCart() {
    localStorage.setItem("techtray-cart", JSON.stringify(cart));
    updateCartCount();
}

function addToCart(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();

    showNotification(product.name + " added to cart.");

}
function updateCartCount() {

    const cartCount = document.getElementById("cart-count");

    if (!cartCount) return;

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    cartCount.textContent = totalItems;
}

// Update cart when page loads
updateCartCount();
// ===============================
// SEARCH PRODUCTS
// ===============================

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(keyword) ||
            product.description.toLowerCase().includes(keyword) ||
            product.category.toLowerCase().includes(keyword)
        );

        displayProducts(filteredProducts);

    });

}
// ===============================
// CATEGORY FILTERS
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));

        // Add active class to clicked button
        button.classList.add("active");

        const category = button.dataset.category;

        if (category === "All") {

            displayProducts(products);

        } else {

            const filteredProducts = products.filter(product =>
                product.category === category
            );

            displayProducts(filteredProducts);

        }

    });

});
/* ==========================================
   NOTIFICATION
========================================== */

function showNotification(message){

    const notification=document.createElement("div");

    notification.className="notification";

    notification.innerHTML=`
        ✅ ${message}
    `;

    document.body.appendChild(notification);

    setTimeout(()=>{

        notification.classList.add("show");

    },100);

    setTimeout(()=>{

        notification.classList.remove("show");

        setTimeout(()=>{

            notification.remove();

        },400);

    },2500);

}