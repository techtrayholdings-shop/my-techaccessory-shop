const products = [

    {
        id: 1,
        name: "HOCO EW95 ANC Earbuds",
        brand: "HOCO",
        category: "Audio",
        price: 499,
        stock: 25,
        featured: true,
        bestSeller: true,
        newArrival: true,
        rating: 4.9,
        reviews: 128,
        image: "images/products/ew95.jpg",
        description: "Premium ANC wireless earbuds with crystal-clear sound."
    },

    {
        id: 2,
        name: "HOCO Power Bank 10000mAh",
        brand: "HOCO",
        category: "Power Banks",
        price: 599,
        stock: 18,
        featured: true,
        bestSeller: false,
        newArrival: true,
        rating: 4.8,
        reviews: 76,
        image: "images/products/ew95.jpg",
        description: "Compact fast-charging power bank."
    },

    {
        id: 3,
        name: "HOCO 65W Fast Charger",
        brand: "HOCO",
        category: "Chargers",
        price: 399,
        stock: 40,
        featured: true,
        bestSeller: true,
        newArrival: false,
        rating: 4.7,
        reviews: 52,
        image: "images/products/ew95.jpg",
        description: "USB-C fast charger for phones, tablets and laptops."
    },

    {
        id: 4,
        name: "HOCO USB-C Cable",
        brand: "HOCO",
        category: "Cables",
        price: 149,
        stock: 60,
        featured: false,
        bestSeller: true,
        newArrival: false,
        rating: 4.6,
        reviews: 41,
        image: "images/products/ew95.jpg",
        description: "Durable USB-C fast charging cable."
    },

    {
        id: 5,
        name: "HOCO Phone Holder",
        brand: "HOCO",
        category: "Phone Accessories",
        price: 199,
        stock: 20,
        featured: true,
        bestSeller: false,
        newArrival: true,
        rating: 4.5,
        reviews: 18,
        image: "images/products/ew95.jpg",
        description: "Universal adjustable phone holder."
    },

    {
        id: 6,
        name: "HOCO Phone Case",
        brand: "HOCO",
        category: "Phone Cases",
        price: 149,
        stock: 30,
        featured: false,
        bestSeller: true,
        newArrival: false,
        rating: 4.6,
        reviews: 34,
        image: "images/products/ew95.jpg",
        description: "Shockproof protective phone case."
    },

    {
        id: 7,
        name: "Tempered Glass Protector",
        brand: "HOCO",
        category: "Screen Protectors",
        price: 99,
        stock: 50,
        featured: false,
        bestSeller: true,
        newArrival: false,
        rating: 4.7,
        reviews: 42,
        image: "images/products/ew95.jpg",
        description: "Premium tempered glass screen protector."
    },

    {
        id: 8,
        name: "HOCO Smart Watch",
        brand: "HOCO",
        category: "Smart Watches",
        price: 1299,
        stock: 12,
        featured: true,
        bestSeller: true,
        newArrival: true,
        rating: 4.9,
        reviews: 85,
        image: "images/products/ew95.jpg",
        description: "Smart fitness watch with Bluetooth calling."
    },

    {
        id: 9,
        name: "Wireless Keyboard & Mouse",
        brand: "HOCO",
        category: "Keyboards & Mice",
        price: 599,
        stock: 15,
        featured: true,
        bestSeller: false,
        newArrival: true,
        rating: 4.8,
        reviews: 20,
        image: "images/products/ew95.jpg",
        description: "Wireless keyboard and mouse combo."
    },

    {
        id: 10,
        name: "Laptop Cooling Pad",
        brand: "HOCO",
        category: "Laptop Accessories",
        price: 499,
        stock: 10,
        featured: false,
        bestSeller: false,
        newArrival: true,
        rating: 4.7,
        reviews: 11,
        image: "images/products/ew95.jpg",
        description: "USB-powered laptop cooling stand."
    },

    {
        id: 11,
        name: "Gaming Headset",
        brand: "HOCO",
        category: "Gaming Accessories",
        price: 899,
        stock: 14,
        featured: true,
        bestSeller: true,
        newArrival: true,
        rating: 4.9,
        reviews: 58,
        image: "images/products/ew95.jpg",
        description: "Gaming headset with surround sound."
    },

    {
        id: 12,
        name: "Bluetooth Speaker",
        brand: "HOCO",
        category: "Bluetooth Speakers",
        price: 799,
        stock: 16,
        featured: true,
        bestSeller: false,
        newArrival: true,
        rating: 4.8,
        reviews: 36,
        image: "images/products/ew95.jpg",
        description: "Portable waterproof Bluetooth speaker."
    },

    {
        id: 13,
        name: "128GB Flash Drive",
        brand: "HOCO",
        category: "Storage Devices",
        price: 299,
        stock: 40,
        featured: false,
        bestSeller: true,
        newArrival: false,
        rating: 4.6,
        reviews: 28,
        image: "images/products/ew95.jpg",
        description: "High-speed USB flash drive."
    },

    {
        id: 14,
        name: "WiFi Router",
        brand: "TP-Link",
        category: "Networking",
        price: 999,
        stock: 8,
        featured: true,
        bestSeller: false,
        newArrival: false,
        rating: 4.7,
        reviews: 25,
        image: "images/products/ew95.jpg",
        description: "Dual-band wireless router."
    },

    {
        id: 15,
        name: "Car Charger",
        brand: "HOCO",
        category: "Car Accessories",
        price: 249,
        stock: 22,
        featured: false,
        bestSeller: true,
        newArrival: false,
        rating: 4.5,
        reviews: 19,
        image: "images/products/ew95.jpg",
        description: "Dual USB fast car charger."
    },

    {
        id: 16,
        name: "Electric Razor",
        brand: "HOCO",
        category: "Electric Razors",
        price: 699,
        stock: 15,
        featured: true,
        bestSeller: false,
        newArrival: true,
        rating: 4.8,
        reviews: 23,
        image: "images/products/ew95.jpg",
        description: "Rechargeable precision electric razor."
    },

    {
        id: 17,
        name: "Professional Hair Dryer",
        brand: "HOCO",
        category: "Hair Dryers",
        price: 899,
        stock: 10,
        featured: true,
        bestSeller: false,
        newArrival: true,
        rating: 4.7,
        reviews: 17,
        image: "images/products/ew95.jpg",
        description: "Professional ionic hair dryer."
    },

    {
        id: 18,
        name: "HOCO EW05 Wireless EarBuds
        brand: "TechTray", 
        category: "Audio EarBuds & Speakers
        price: 1499,
        stock: 8,
        featured: true,
        bestSeller: true,
        newArrival: true,
        rating: 4.9,
        reviews: 63,
        image: "images/products/EW05.jpg",
        description: "1080p Wi-Fi security camera with night vision."
    },

    {
        id: 19,
        name: "HOCO EW72 Wireless EarBuds",
        brand: "HOCO",
        category: "Audio Earbuds & Speakers
        price: 3499,
        stock: 6,
        featured: true,
        bestSeller: false,
        newArrival: true,
        rating: 4.8,
        reviews: 35,
        image: "images/products/EW72.png",
        description: "Android tablet for work, school and entertainment."
    }

];
,

{
    id: 8,
    name: "HOCO Car Mount",
    category: "Car Accessories",
    price: 199,
    image: "images/products/car-mount.jpg",
    description: "Universal dashboard and windshield phone holder.",
    badge: ""
},

{
    id: 9,
    name: "HOCO E73 Wireless Neckband",
    category: "Audio",
    price: 299,
    image: "images/products/E73.jpeg",
    description: "Comfortable Bluetooth neckband earphones.",
    badge: "NEW"
},

{
    id: 10,
    name: "HOCO EW05 Wireless Earbuds",
    category: "Audio",
    price: 399,
    image: "images/products/EW05.jpeg",
    description: "True wireless earbuds with charging case.",
    badge: ""
},

{
    id: 11,
    name: "HOCO EW72 Wireless Earbuds",
    category: "Audio",
    price: 449,
    image: "images/products/EW72.png",
    description: "Premium Bluetooth earbuds with deep bass.",
    badge: "BEST"
},

{
    id: 12,
    name: "HOCO G100-5 Bluetooth Speaker",
    category: "Bluetooth Speakers",
    price: 599,
    image: "images/products/G100-5.jpeg",
    description: "Portable Bluetooth speaker with rich sound.",
    badge: "NEW"
},

{
    id: 13,
    name: "HOCO HC1 Charger",
    category: "Chargers",
    price: 149,
    image: "images/products/HC1.jpeg",
    description: "Compact USB wall charger.",
    badge: ""
},

{
    id: 14,
    name: "HOCO HC17 Fast Charger",
    category: "Chargers",
    price: 179,
    image: "images/products/HC17.jpg",
    description: "Fast charging wall adapter.",
    badge: ""
},

{
    id: 15,
    name: "HOCO J101A Power Bank",
    category: "Power Banks",
    price: 499,
    image: "images/products/J101A.jpeg",
    description: "10000mAh portable power bank.",
    badge: "BEST"
},

{
    id: 16,
    name: "HOCO J115 Power Bank",
    category: "Power Banks",
    price: 799,
    image: "images/products/j115.jpeg",
    description: "High-capacity fast charging power bank.",
    badge: "NEW"
},

{
    id: 17,
    name: "HOCO N34 Charger",
    category: "Chargers",
    price: 249,
    image: "images/products/N34.png",
    description: "Dual-port fast charger.",
    badge: ""
},

{
    id: 18,
    name: "HOCO X88 Smart Watch",
    category: "Smart Watches",
    price: 999,
    image: "images/products/X88.png",
    description: "Smart watch with fitness tracking and notifications.",
    badge: "BEST"
}