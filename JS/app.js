```javascript
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

    if (!productArray || productArray.length === 0) {

        productList.innerHTML = `
            <div class="no-products">
                <div class="no-products-icon">🔎</div>

                <h3>No products found</h3>

                <p>
                    We couldn't find products matching your selection.
                    Try another category or search term.
                </p>
            </div>
        `;

        return;
    }


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

        <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy">

        <div class="product-overlay">

            <button
                class="quick-view"
                onclick="quickView(${product.id})">

                👁 Quick View

            </button>

        </div>

    </div>


    <div class="product-info">

        <div class="product-brand">
            ${product.brand}
        </div>


        <h3>

            <a
                href="product.html?id=${product.id}"
                class="product-title">

                ${product.name}

            </a>

        </h3>


        <div class="product-rating">

            ⭐ ${product.rating}

            <span>
                (${product.reviews} Reviews)
            </span>

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

            ${
                product.stock > 0
                ? "✅ In Stock"
                : "❌ Out of Stock"
            }

        </div>


        <div class="product-buttons">

            <a
                href="./product.html?id=${product.id}"
                class="view-btn"
                aria-label="View details for ${product.name}">

                👁 View Details

            </a>


            <button
                class="cart-btn"
                onclick="addToCart(${product.id})">

                🛒 Add to Cart

            </button>

        </div>

    </div>

</div>

        `;

    });

}


// ===============================
// CATEGORY FILTER SYSTEM
// ===============================

let currentCategory = "All";
let currentSearch = "";


// Convert URL-friendly category names
// into the category names used by products.js

function formatCategory(category) {

    if (!category) return "All";


    const categoryMap = {

        "all": "All",

        "audio": "Audio",

        "power": "Power Banks",
        "power-banks": "Power Banks",

        "chargers": "Chargers",

        "cables": "Cables",

        "phone": "Phone Accessories",
        "phone-accessories": "Phone Accessories",

        "phone-cases": "Phone Cases",

        "screen-protectors": "Screen Protectors",

        "smart-watches": "Smart Watches",
        "smart-watches": "Smart Watches",

        "computer-accessories": "Computer Accessories",

        "keyboards-mice": "Keyboards & Mice",

        "laptop-accessories": "Laptop Accessories",

        "gaming": "Gaming Accessories",
        "gaming-accessories": "Gaming Accessories",

        "bluetooth-speakers": "Bluetooth Speakers",

        "storage-devices": "Storage Devices",

        "networking": "Networking",

        "car-accessories": "Car Accessories",

        "electric-razors": "Electric Razors",

        "hair-dryers": "Hair Dryers",

        "security-cameras": "Security Cameras",

        "computer-tablets": "Computer Tablets",

        "deals": "Deals & Specials",
        "deals-specials": "Deals & Specials"

    };


    const normalized = category
        .toLowerCase()
        .trim();

    return categoryMap[normalized] || category;
}


// ===============================
// APPLY FILTERS
// ===============================

function applyFilters() {

    if (typeof products === "undefined") return;


    let filteredProducts = [...products];


    // CATEGORY FILTER

    if (currentCategory !== "All") {

        if (currentCategory === "Deals & Specials") {

            filteredProducts = filteredProducts.filter(product =>

                Number(product.oldPrice) > Number(product.price)

                || product.badge === "HOT"

                || product.badge === "BEST"

            );

        } else {

            filteredProducts = filteredProducts.filter(product =>

                product.category &&
                product.category.toLowerCase().trim() ===
                currentCategory.toLowerCase().trim()

            );

        }

    }


    // SEARCH FILTER

    if (currentSearch !== "") {

        filteredProducts = filteredProducts.filter(product => {

            const name =
                product.name?.toLowerCase() || "";

            const description =
                product.description?.toLowerCase() || "";

            const category =
                product.category?.toLowerCase() || "";

            const brand =
                product.brand?.toLowerCase() || "";


            return (

                name.includes(currentSearch) ||

                description.includes(currentSearch) ||

                category.includes(currentSearch) ||

                brand.includes(currentSearch)

            );

        });

    }


    displayProducts(filteredProducts);

    updateCategoryState();

}


// ===============================
// UPDATE ACTIVE CATEGORY
// ===============================

function updateCategoryState() {

    const categoryButtons =
        document.querySelectorAll(".category-card");


    categoryButtons.forEach(button => {

        const buttonCategory =
            button.dataset.category;


        if (
            buttonCategory &&
            buttonCategory.toLowerCase() ===
            currentCategory.toLowerCase()
        ) {

            button.classList.add("active");

        } else {

            button.classList.remove("active");

        }

    });

}


// ===============================
// CATEGORY BUTTONS
// ===============================

const categoryButtons =
    document.querySelectorAll(".category-card");


categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        const selectedCategory =
            this.dataset.category;


        currentCategory =
            selectedCategory || "All";


        // Update URL

        const url =
            new URL(window.location.href);


        if (currentCategory === "All") {

            url.searchParams.delete("category");

        } else {

            const slug =
                currentCategory
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/\s+/g, "-");


            url.searchParams.set(
                "category",
                slug
            );

        }


        window.history.pushState(
            {},
            "",
            url
        );


        applyFilters();

    });

});


// ===============================
// HOMEPAGE / URL CATEGORY
// ===============================

function loadCategoryFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const categoryParam =
        params.get("category");


    if (!categoryParam) {

        currentCategory = "All";

        return;

    }


    currentCategory =
        formatCategory(categoryParam);


    applyFilters();

}


// ===============================
// SEARCH PRODUCTS
// ===============================

const searchInput =
    document.getElementById("search");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            currentSearch =
                this.value
                    .toLowerCase()
                    .trim();


            applyFilters();

        }
    );

}


// ===============================
// SORT PRODUCTS
// ===============================

const sortSelect =
    document.getElementById("sort-products");


if (sortSelect) {

    sortSelect.addEventListener(
        "change",
        function () {

            if (typeof products === "undefined") return;


            let sortedProducts =
                [...products];


            // Apply category

            if (currentCategory !== "All") {

                if (
                    currentCategory ===
                    "Deals & Specials"
                ) {

                    sortedProducts =
                        sortedProducts.filter(product =>

                            Number(product.oldPrice) >
                            Number(product.price)

                            || product.badge === "HOT"

                            || product.badge === "BEST"

                        );

                } else {

                    sortedProducts =
                        sortedProducts.filter(product =>

                            product.category &&
                            product.category.toLowerCase().trim() ===
                            currentCategory.toLowerCase().trim()

                        );

                }

            }


            // Apply search

            if (currentSearch !== "") {

                sortedProducts =
                    sortedProducts.filter(product => {

                        const name =
                            product.name?.toLowerCase() || "";

                        const description =
                            product.description?.toLowerCase() || "";

                        const category =
                            product.category?.toLowerCase() || "";

                        const brand =
                            product.brand?.toLowerCase() || "";


                        return (

                            name.includes(currentSearch) ||

                            description.includes(currentSearch) ||

                            category.includes(currentSearch) ||

                            brand.includes(currentSearch)

                        );

                    });

            }


            // SORT

            switch (this.value) {

                case "low-high":

                    sortedProducts.sort(
                        (a, b) =>
                            Number(a.price) -
                            Number(b.price)
                    );

                    break;


                case "high-low":

                    sortedProducts.sort(
                        (a, b) =>
                            Number(b.price) -
                            Number(a.price)
                    );

                    break;


                case "az":

                    sortedProducts.sort(
                        (a, b) =>
                            a.name.localeCompare(b.name)
                    );

                    break;


                case "za":

                    sortedProducts.sort(
                        (a, b) =>
                            b.name.localeCompare(a.name)
                    );

                    break;

            }


            displayProducts(sortedProducts);

        }
    );

}


// ===============================
// LOAD PRODUCTS
// ===============================

if (typeof products !== "undefined") {

    displayProducts(products);

    loadCategoryFromURL();

}


// ===============================
// SHOPPING CART
// ===============================

let cart =
    JSON.parse(
        localStorage.getItem("techtray-cart")
    ) || [];


function saveCart() {

    localStorage.setItem(
        "techtray-cart",
        JSON.stringify(cart)
    );

    updateCartCount();

}


function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) return;


    const existingItem =
        cart.find(
            item => item.id === id
        );


    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }


    saveCart();


    showNotification(
        product.name +
        " added to cart."
    );

}


function updateCartCount() {

    const cartCount =
        document.getElementById("cart-count");


    if (!cartCount) return;


    const totalItems =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    cartCount.textContent =
        totalItems;

}


updateCartCount();


// ===============================
// NOTIFICATION
// ===============================

function showNotification(message) {

    const notification =
        document.createElement("div");


    notification.className =
        "notification";


    notification.innerHTML = `
        ✅ ${message}
    `;


    document.body.appendChild(
        notification
    );


    setTimeout(() => {

        notification.classList.add(
            "show"
        );

    }, 100);


    setTimeout(() => {

        notification.classList.remove(
            "show"
        );


        setTimeout(() => {

            notification.remove();

        }, 400);

    }, 2500);

}


// ===============================
// WISHLIST
// ===============================

let wishlist =
    JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];


function toggleWishlist(id) {

    const product =
        products.find(
            p => p.id === id
        );


    if (!product) return;


    const index =
        wishlist.findIndex(
            item => item.id === id
        );


    if (index === -1) {

        wishlist.push(product);


        showNotification(
            product.name +
            " added to Wishlist ❤️"
        );

    } else {

        wishlist.splice(
            index,
            1
        );


        showNotification(
            product.name +
            " removed from Wishlist"
        );

    }


    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

}


// ===============================
// QUICK VIEW
// ===============================

const modal =
    document.getElementById(
        "quick-view-modal"
    );


function quickView(id) {

    const product =
        products.find(
            p => p.id === id
        );


    if (!product) return;


    document.getElementById(
        "quick-image"
    ).src = product.image;


    document.getElementById(
        "quick-name"
    ).textContent = product.name;


    document.getElementById(
        "quick-description"
    ).textContent =
        product.description;


    document.getElementById(
        "quick-price"
    ).textContent =
        "R" + product.price;


    document.getElementById(
        "quick-cart-btn"
    ).onclick = function () {

        addToCart(product.id);

    };


    document.getElementById(
        "quick-product-link"
    ).href =
        "product.html?id=" +
        product.id;


    modal.style.display = "flex";

}


const closeModal =
    document.querySelector(
        ".close-modal"
    );


if (closeModal) {

    closeModal.onclick = function () {

        modal.style.display =
            "none";

    };

}


window.addEventListener(
    "click",
    function (e) {

        if (e.target === modal) {

            modal.style.display =
                "none";

        }

    }
);


// ===============================
// TECHTRAY NIGHT MODE
// ===============================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const themeToggle =
            document.getElementById(
                "theme-toggle"
            );


        if (!themeToggle) return;


        // LOAD SAVED THEME

        const savedTheme =
            localStorage.getItem(
                "techtray-theme"
            );


        if (savedTheme === "dark") {

            document.body.classList.add(
                "dark-mode"
            );


            themeToggle.textContent =
                "☀️";


            themeToggle.title =
                "Switch to Light Mode";

        } else {

            document.body.classList.remove(
                "dark-mode"
            );


            themeToggle.textContent =
                "🌙";


            themeToggle.title =
                "Switch to Night Mode";

        }


        // TOGGLE THEME

        themeToggle.addEventListener(
            "click",
            function () {

                document.body.classList.toggle(
                    "dark-mode"
                );


                if (
                    document.body.classList.contains(
                        "dark-mode"
                    )
                ) {

                    localStorage.setItem(
                        "techtray-theme",
                        "dark"
                    );


                    themeToggle.textContent =
                        "☀️";


                    themeToggle.title =
                        "Switch to Light Mode";

                } else {

                    localStorage.setItem(
                        "techtray-theme",
                        "light"
                    );


                    themeToggle.textContent =
                        "🌙";


                    themeToggle.title =
                        "Switch to Night Mode";

                }

            }
        );

    }
);
