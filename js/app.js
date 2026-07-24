const productContainer = document.getElementById("product-list");

if (productContainer) {

    products.forEach(product => {

        const badge = product.badge
            ? `<span class="badge">${product.badge}</span>`
            : "";

        productContainer.innerHTML += `
        <div class="product">

            ${badge}

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.category}</p>

            <p class="price">R${product.price}</p>

            <button class="btn"
                onclick="addToCart(${product.id})">
                Add to Cart
            </button>

        </div>
        `;

    });

}

let cart = [];

function addToCart(id){

    const product = products.find(p => p.id === id);

    cart.push(product);

    alert(product.name + " added to cart!");

    console.log(cart);

}
