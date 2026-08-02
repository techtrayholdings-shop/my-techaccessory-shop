// Get the product ID from the URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

// Find the selected product
const product = products.find(p => p.id === productId);

const productDetails = document.getElementById("product-details");

if (product) {

    productDetails.innerHTML = `
        <div class="single-product">

            <div class="single-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="single-product-info">

                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}

                <h1>${product.name}</h1>

                <h2>R${product.price}</h2>

                <p>${product.description}</p>

                <button class="btn btn-primary"
                    onclick="addToCart(${product.id})">

                    Add to Cart

                </button>

                <a href="https://wa.me/27662653887?text=Hi%20TechTray,%20I'm%20interested%20in%20${encodeURIComponent(product.name)}"
                   class="btn btn-secondary"
                   target="_blank">

                   Order on WhatsApp

                </a>

            </div>

        </div>
    `;

} else {

    productDetails.innerHTML = `
        <h2>Product not found.</h2>
        <p>Please return to the shop.</p>
    `;

}