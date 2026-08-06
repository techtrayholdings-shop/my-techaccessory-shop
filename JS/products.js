/* ==========================================
   TECHTRAY HOLDINGS
   PRODUCTS DATABASE
========================================== */

const products = [

{
    id: 1,
    name: "HOCO EW95 ANC Earbuds",
    brand: "HOCO",
    category: "Audio",
    price: 499,
    oldPrice: 599,
    stock: 25,
    featured: true,
    bestSeller: true,
    newArrival: true,
    rating: 4.9,
    reviews: 128,
    badge: "NEW",
    image: "images/products/EW95.jpeg",
    gallery: ["images/products/EW95.jpeg"],
    description: "Bluetooth 5.4 ANC wireless earbuds with charging case.",
    specifications: [
        "Bluetooth 5.4",
        "ANC Noise Cancellation",
        "USB-C Charging",
        "20 Hour Battery"
    ]
},

{
    id: 2,
    name: "HOCO EW97 Wireless Earbuds",
    brand: "HOCO",
    category: "Audio",
    price: 549,
    oldPrice: 649,
    stock: 20,
    featured: true,
    bestSeller: true,
    newArrival: false,
    rating: 4.8,
    reviews: 95,
    badge: "BEST",
    image: "images/products/EW97.jpeg",
    gallery: ["images/products/EW97.jpeg"],
    description: "Premium true wireless earbuds with deep bass.",
    specifications: [
        "Bluetooth 5.4",
        "Touch Controls",
        "USB-C Charging"
    ]
},

{
    id: 3,
    name: "HOCO EW05 Wireless Earbuds",
    brand: "HOCO",
    category: "Audio",
    price: 599,
    oldPrice: 699,
    stock: 18,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 56,
    badge: "NEW",
    image: "images/products/EW05.jpeg",
    gallery: ["images/products/EW05.jpeg"],
    description: "Compact wireless earbuds with charging case.",
    specifications: [
        "Bluetooth",
        "Touch Controls",
        "Charging Case"
    ]
},

{
    id: 4,
    name: "HOCO EW72 Wireless Earbuds",
    brand: "HOCO",
    category: "Audio",
    price: 649,
    oldPrice: 749,
    stock: 15,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviews: 43,
    badge: "NEW",
    image: "images/products/EW72.png",
    gallery: ["images/products/EW72.png"],
    description: "Premium wireless earbuds with rich sound.",
    specifications: [
        "Bluetooth 5.4",
        "Fast Charging",
        "Touch Control"
    ]
},

{
    id: 5,
    name: "HOCO HP25 Headphones",
    brand: "HOCO",
    category: "Audio",
    price: 399,
    oldPrice: 499,
    stock: 30,
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.7,
    reviews: 61,
    badge: "BEST",
    image: "images/products/HP25.jpeg",
    gallery: ["images/products/HP25.jpeg"],
    description: "Comfortable over-ear headphones.",
    specifications: [
        "Stereo Sound",
        "Adjustable Headband",
        "Comfort Ear Cushions"
    ]
},

{
    id: 6,
    name: "HOCO E73 Wireless Neckband",
    brand: "HOCO",
    category: "Audio",
    price: 299,
    oldPrice: 349,
    stock: 20,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 42,
    badge: "NEW",
    image: "images/products/E73.jpeg",
    gallery: ["images/products/E73.jpeg"],
    description: "Bluetooth wireless neckband earphones.",
    specifications: [
        "Bluetooth 5.3",
        "Magnetic Earbuds",
        "Long Battery Life"
    ]
},

{
    id: 7,
    name: "HOCO HC22 Fast Charger",
    brand: "HOCO",
    category: "Chargers",
    price: 199,
    oldPrice: 249,
    stock: 30,
    featured: true,
    bestSeller: true,
    newArrival: false,
    rating: 4.8,
    reviews: 73,
    badge: "BEST",
    image: "images/products/HC22.png",
    gallery: ["images/products/HC22.png"],
    description: "20W USB-C Fast Charger.",
    specifications: [
        "20W Output",
        "USB-C",
        "Fast Charging"
    ]
},

{
    id: 8,
    name: "HOCO CA102 Charging Cable",
    brand: "HOCO",
    category: "Cables",
    price: 99,
    oldPrice: 129,
    stock: 50,
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.6,
    reviews: 39,
    badge: "",
    image: "images/products/CA102.jpeg",
    gallery: ["images/products/CA102.jpeg"],
    description: "Durable fast charging cable.",
    specifications: [
        "Fast Charge",
        "1m Length",
        "Data Transfer"
    ]
},

{
    id: 9,
    name: "HOCO J160A Magnetic Power Bank",
    brand: "HOCO",
    category: "Power Banks",
    price: 699,
    oldPrice: 799,
    stock: 18,
    featured: true,
    bestSeller: true,
    newArrival: true,
    rating: 4.9,
    reviews: 95,
    badge: "BEST",
    image: "images/products/J160A-BeStill-Magnetic.png",
    gallery: ["images/products/J160A-BeStill-Magnetic.png"],
    description: "10000mAh Magnetic Wireless Power Bank.",
    specifications: [
        "10000mAh",
        "MagSafe Compatible",
        "USB-C Fast Charging"
    ]
},

{
    id: 10,
    name: "HOCO Car Charger",
    brand: "HOCO",
    category: "Car Accessories",
    price: 249,
    oldPrice: 299,
    stock: 25,
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.7,
    reviews: 34,
    badge: "",
    image: "images/products/car-charger.jpg",
    gallery: ["images/products/car-charger.jpg"],
    description: "Dual USB Fast Charging Car Adapter.",
    specifications: [
        "Dual USB",
        "Fast Charge",
        "Universal Compatibility"
    ]
},

{
    id: 11,
    name: "HOCO G100-5 Gaming Headset",
    brand: "HOCO",
    category: "Gaming",
    price: 499,
    oldPrice: 599,
    stock: 15,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviews: 31,
    badge: "NEW",
    image: "images/products/G100-5.jpeg",
    gallery: ["images/products/G100-5.jpeg"],
    description: "Gaming headset with immersive stereo sound.",
    specifications: [
        "Noise Isolation",
        "Gaming Microphone",
        "3.5mm Jack"
    ]
},

{
    id: 12,
    name: "HOCO HC1 Car Holder",
    brand: "HOCO",
    category: "Car Accessories",
    price: 149,
    oldPrice: 199,
    stock: 20,
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.6,
    reviews: 22,
    badge: "BEST",
    image: "images/products/HC1.jpeg",
    gallery: ["images/products/HC1.jpeg"],
    description: "Universal dashboard phone holder.",
    specifications: [
        "360° Rotation",
        "Universal Fit"
    ]
},

{
    id: 13,
    name: "HOCO HC17 Car Holder",
    brand: "HOCO",
    category: "Car Accessories",
    price: 199,
    oldPrice: 249,
    stock: 18,
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.7,
    reviews: 27,
    badge: "",
    image: "images/products/HC17.jpg",
    gallery: ["images/products/HC17.jpg"],
    description: "Air vent magnetic phone holder.",
    specifications: [
        "Magnetic Mount",
        "360° Rotation"
    ]
},

{
    id: 14,
    name: "Wireless Headphones",
    brand: "HOCO",
    category: "Audio",
    price: 399,
    oldPrice: 499,
    stock: 25,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 20,
    badge: "",
    image: "images/products/headphones.jpg",
    gallery: ["images/products/headphones.jpg"],
    description: "Comfortable wireless headphones.",
    specifications: [
        "Bluetooth",
        "Built-in Microphone"
    ]
},

{
    id: 15,
    name: "Premium Wireless Headphones",
    brand: "HOCO",
    category: "Audio",
    price: 499,
    oldPrice: 599,
    stock: 20,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviews: 38,
    badge: "NEW",
    image: "images/products/headphones2.jpg",
    gallery: ["images/products/headphones2.jpg"],
    description: "Premium headphones with rich bass.",
    specifications: [
        "Bluetooth 5.3",
        "Long Battery"
    ]
},

{
    id: 16,
    name: "Foldable Wireless Headphones",
    brand: "HOCO",
    category: "Audio",
    price: 549,
    oldPrice: 649,
    stock: 15,
    featured: true,
    bestSeller: true,
    newArrival: false,
    rating: 4.9,
    reviews: 42,
    badge: "BEST",
    image: "images/products/headphones3.png",
    gallery: ["images/products/headphones3.png"],
    description: "Foldable Bluetooth headphones.",
    specifications: [
        "Foldable Design",
        "Bluetooth 5.4"
    ]
},

{
    id: 17,
    name: "HOCO J101A Power Bank",
    brand: "HOCO",
    category: "Power Banks",
    price: 499,
    oldPrice: 599,
    stock: 20,
    featured: true,
    bestSeller: true,
    newArrival: false,
    rating: 4.8,
    reviews: 40,
    badge: "BEST",
    image: "images/products/J101A.jpeg",
    gallery: ["images/products/J101A.jpeg"],
    description: "10000mAh Fast Charging Power Bank.",
    specifications: [
        "10000mAh",
        "Fast Charge"
    ]
},

{
    id: 18,
    name: "HOCO J115 Power Bank",
    brand: "HOCO",
    category: "Power Banks",
    price: 599,
    oldPrice: 699,
    stock: 18,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviews: 29,
    badge: "NEW",
    image: "images/products/j115.jpeg",
    gallery: ["images/products/j115.jpeg"],
    description: "20000mAh High Capacity Power Bank.",
    specifications: [
        "20000mAh",
        "USB-C Output"
    ]
},

{
    id: 19,
    name: "HOCO J115 Power Bank Black",
    brand: "HOCO",
    category: "Power Banks",
    price: 599,
    oldPrice: 699,
    stock: 15,
    featured: false,
    bestSeller: false,
    newArrival: false,
    rating: 4.7,
    reviews: 18,
    badge: "",
    image: "images/products/j115(2).jpeg",
    gallery: ["images/products/j115(2).jpeg"],
    description: "High-capacity fast charging power bank.",
    specifications: [
        "20000mAh",
        "LED Display"
    ]
},

{
    id: 20,
    name: "HOCO N34 Charger",
    brand: "HOCO",
    category: "Chargers",
    price: 249,
    oldPrice: 299,
    stock: 22,
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.8,
    reviews: 36,
    badge: "",
    image: "images/products/N34.png",
    gallery: ["images/products/N34.png"],
    description: "Fast charging wall adapter.",
    specifications: [
        "USB-C",
        "Fast Charge",
        "Compact Design"
    ]
},

{
    id: 21,
    name: "Wireless Mouse",
    brand: "HOCO",
    category: "Computer Accessories",
    price: 249,
    oldPrice: 299,
    stock: 20,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 18,
    badge: "NEW",
    image: "images/products/mouse.jpeg",
    gallery: ["images/products/mouse.jpeg"],
    description: "Ergonomic wireless mouse for home, office and gaming.",
    specifications: [
        "2.4GHz Wireless",
        "Silent Click",
        "Adjustable DPI"
    ]
},

{
    id: 22,
    name: "Smart Watch",
    brand: "HOCO",
    category: "Smart Watches",
    price: 899,
    oldPrice: 1099,
    stock: 15,
    featured: true,
    bestSeller: true,
    newArrival: true,
    rating: 4.9,
    reviews: 41,
    badge: "HOT",
    image: "images/products/smart-watch.jpg",
    gallery: ["images/products/smart-watch.jpg"],
    description: "Smart watch with fitness tracking, heart rate monitoring and notifications.",
    specifications: [
        "Heart Rate Monitor",
        "Sleep Tracking",
        "Bluetooth Calling"
    ]
},

{
    id: 23,
    name: "Laptop Stand",
    brand: "HOCO",
    category: "Computer Accessories",
    price: 399,
    oldPrice: 499,
    stock: 18,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviews: 23,
    badge: "NEW",
    image: "images/products/laptop-stand.jpeg",
    gallery: ["images/products/laptop-stand.jpeg"],
    description: "Foldable aluminium laptop stand for improved comfort.",
    specifications: [
        "Foldable",
        "Adjustable Height",
        "Aluminium Alloy"
    ]
},

{
    id: 24,
    name: "Wi-Fi Security Camera",
    brand: "HOCO",
    category: "Smart Home",
    price: 999,
    oldPrice: 1199,
    stock: 10,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.9,
    reviews: 26,
    badge: "NEW",
    image: "images/products/security-camera.jpg",
    gallery: ["images/products/security-camera.jpg"],
    description: "Indoor Wi-Fi smart security camera with motion detection.",
    specifications: [
        "1080P HD",
        "Night Vision",
        "Motion Alerts"
    ]
},

{
    id: 25,
    name: "Wireless Charging Station",
    brand: "HOCO",
    category: "Chargers",
    price: 699,
    oldPrice: 799,
    stock: 15,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviews: 17,
    badge: "NEW",
    image: "images/products/charging-station.jpg",
    gallery: ["images/products/charging-station.jpg"],
    description: "Fast wireless charging station for multiple devices.",
    specifications: [
        "15W Fast Charge",
        "Qi Compatible",
        "USB-C Input"
    ]
},

{
    id: 26,
    name: "Magnetic Wireless Charger",
    brand: "HOCO",
    category: "Chargers",
    price: 349,
    oldPrice: 449,
    stock: 20,
    featured: false,
    bestSeller: true,
    newArrival: true,
    rating: 4.8,
    reviews: 15,
    badge: "HOT",
    image: "images/products/magnet-wireless.jpeg",
    gallery: ["images/products/magnet-wireless.jpeg"],
    description: "Magnetic wireless charger for compatible smartphones.",
    specifications: [
        "MagSafe Compatible",
        "15W Charging",
        "USB-C"
    ]
},

{
    id: 27,
    name: "Phone Ring Holder",
    brand: "HOCO",
    category: "Phone Accessories",
    price: 99,
    oldPrice: 149,
    stock: 50,
    featured: false,
    bestSeller: true,
    newArrival: false,
    rating: 4.6,
    reviews: 33,
    badge: "",
    image: "images/products/ring-holder.jpg",
    gallery: ["images/products/ring-holder.jpg"],
    description: "360° rotating metal ring holder and phone stand.",
    specifications: [
        "360° Rotation",
        "Strong Adhesive",
        "Universal Fit"
    ]
}

];

// Make products available globally
window.products = products;