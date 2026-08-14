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
        } else if (product.badge === "BEST") {
            badge = `<span class="badge best">BEST SELLER</span>`;
        } else if (product.badge === "HOT") {
            badge = `<span class="badge hot">HOT</span>`;
        }

        productList.innerHTML += `

<div class="product-card">

    <div class="product-image">

        ${badge}

        <img src="${product.image}" alt="${product.name}">

        <div class="product-overlay">

    <button class="quick-view" onclick="quickView(${product.id})">
        👁 Quick View
    </button>

</div>

    </div>

    <div class="product-info">

        <div class="product-brand">
            ${product.brand}
        </div>

        <h3>
            <a href="product.html?id=${product.id}" class="product-title">
                ${product.name}
            </a>
        </h3>

        <div class="product-rating">
            ⭐ ${product.rating}
            <span>(${product.reviews} Reviews)</span>
        </div>

        <p class="product-description">
            ${product.description}
        </p>

        <div class="price-box">

            <span class="old-price">
                R${product.oldPrice}
            </span>

            <span class="price">
                R${product.price}
            </span>

        </div>

        <div class="stock">
            ${product.stock > 0 ? "✅ In Stock" : "❌ Out of Stock"}
        </div>

        <div class="product-buttons">

            <a 
    href="./product.html?id=${product.id}" 
    class="view-btn"
    aria-label="View details for ${product.name}">
    👁 View Details
</a>

            <button class="cart-btn" onclick="addToCart(${product.id})">
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
/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        navigation.classList.toggle("show");

    });

}

/*==========================================
        WISHLIST
==========================================*/

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function toggleWishlist(id){

    const product = products.find(p => p.id === id);

    const index = wishlist.findIndex(item => item.id === id);

    if(index === -1){

        wishlist.push(product);

        showNotification(product.name + " added to Wishlist ❤️");

    }else{

        wishlist.splice(index,1);

        showNotification(product.name + " removed from Wishlist");

    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

}

/*==========================================
        QUICK VIEW
==========================================*/

const modal = document.getElementById("quick-view-modal");

function quickView(id){

    const product = products.find(p => p.id === id);

    if(!product) return;

    document.getElementById("quick-image").src = product.image;
    document.getElementById("quick-name").textContent = product.name;
    document.getElementById("quick-description").textContent = product.description;
    document.getElementById("quick-price").textContent = "R" + product.price;

    document.getElementById("quick-cart-btn").onclick = function () {
    addToCart(product.id);
};

document.getElementById("quick-product-link").href =
    "product.html?id=" + product.id;

modal.style.display = "flex";

}

const closeModal = document.querySelector(".close-modal");

if(closeModal){

    closeModal.onclick = function(){
        modal.style.display = "none";
    };

}

window.addEventListener("click", function(e){

    if(e.target === modal){
        modal.style.display = "none";
    }

});

/*==================================================
    TECHTRAY NIGHT MODE
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
        return;
    }

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeToggle.textContent = "☀️";

        } else {

            themeToggle.textContent = "🌙";

        }

    });

});