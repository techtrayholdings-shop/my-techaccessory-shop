/* ==========================================
   TECHTRAY HOLDINGS
   PRODUCTS DATABASE
========================================== */

const products = [

{
    id: 3,
    name: "Wireless Earbuds",
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
    description: "Premium true wireless earbuds with deep bass for an immersive everyday listening experience.",
    specifications: [
        "Bluetooth Connectivity",
        "True Wireless Stereo",
        "Touch Controls",
        "Charging Case"
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
    oldPrice: 1199.99,
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
    price: 699.99,
    oldPrice: 799.99,
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
    price: 899.99,
    oldPrice: 1299.99,
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
    id: 28,
    name: "HOCO TWS Wireless EarPods",
    brand: "HOCO",
    category: "Earphones",
    price: 499,
    oldPrice: 599,
    stock: 10,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 0,
    reviews: 0,
    badge: "",
    image: "images/products/EW95.jpeg",
    gallery: ["images/products/EW95.jpeg"],
    description: "HOCO TWS wireless EarPods designed for convenient everyday listening with a compact true wireless design.",
    specifications: [
        "True Wireless Stereo (TWS)",
        "Wireless Connectivity",
        "Compact Charging Case"
    ]
},

{
    id: 28,
    name: "5-in-1 PC Gaming Bundle",
    brand: "T-WOLF",
    category: "Gaming",
    price: 1199.99,
    oldPrice: 1649.99,
    stock: 10,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviews: 0,
    badge: "SALE",
    image: "images/products/TF250.jpg",
    gallery: ["images/products/TF250.jpg"],
    description: "Complete 5-in-1 gaming bundle designed for an immersive PC gaming experience.",
    specifications: [
        "5-in-1 Gaming Set",
        "Gaming Keyboard",
        "Gaming Mouse",
        "Gaming Accessories"
    ]
},

{
    id: 29,
    name: "Retro Rainbow Gaming Keyboard",
    brand: "T-WOLF",
    category: "Gaming",
    price: 299.99,
    oldPrice: 399,
    stock: 10,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 0,
    badge: "SALE",
    image: "images/products/T80.jpg",
    gallery: ["images/products/T80.jpg"],
    description: "Retro-style gaming keyboard with colourful rainbow backlighting.",
    specifications: [
        "Rainbow Backlighting",
        "Wired USB",
        "Gaming Design"
    ]
},

{
    id: 30,
    name: "Rainbow Backlit Gaming Keyboard & Mouse Set",
    brand: "T-WOLF",
    category: "Gaming",
    price: 499.99,
    oldPrice: 599,
    stock: 10,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 0,
    badge: "SALE",
    image: "images/products/GG-TF-200.jpg",
    gallery: ["images/products/GG-TF-200.jpg"],
    description: "Gaming keyboard and mouse set with vibrant rainbow backlighting.",
    specifications: [
        "Keyboard & Mouse",
        "Rainbow Backlighting",
        "Wired Connection"
    ]
},

{
    id: 31,
    name: "Wireless Folding Bluetooth Keyboard",
    brand: "T-WOLF",
    category: "Computer Accessories",
    price: 399.99,
    oldPrice: 499,
    stock: 10,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 0,
    badge: "NEW",
    image: "images/products/FOLDING-KEYBOARD.jpg",
    gallery: ["images/products/FOLDING-KEYBOARD.jpg"],
    description: "Portable folding wireless keyboard with a compact design for work on the go.",
    specifications: [
        "Bluetooth",
        "Folding Design",
        "Rechargeable",
        "Portable"
    ]
},

{
    id: 32,
    name: "Hoco Cool Wired Professional Office Keyboard Black",
    brand: "HOCO",
    category: "Computer Accessories",
    price: 299.99,
    oldPrice: 399,
    stock: 10,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.6,
    reviews: 0,
    badge: "SALE",
    image: "images/products/GM60.jpg",
    gallery: ["images/products/GM60.jpg"],
    description: "Full-size wired keyboard and mouse combo for everyday computer use.",
    specifications: [
        "104-Key Keyboard",
        "USB Connection",
        "Keyboard & Mouse"
    ]
},

{
    id: 33,
    name: "Retro Wireless Keyboard & Mouse Combo",
    brand: "T-WOLF",
    category: "Gaming",
    price: 599.99,
    oldPrice: 699,
    stock: 10,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 0,
    badge: "SALE",
    image: "images/products/RETRO-WIRELESS.jpg",
    gallery: ["images/products/RETRO-WIRELESS.jpg"],
    description: "Stylish retro wireless keyboard and mouse combination.",
    specifications: [
        "Wireless",
        "Keyboard & Mouse",
        "Retro Design"
    ]
},

{
    id: 34,
    name: "T-WOLF One Handed Gaming Keyboard",
    brand: "T-WOLF",
    category: "Gaming",
    price: 299.99,
    oldPrice: 399,
    stock: 10,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.6,
    reviews: 0,
    badge: "SALE",
    image: "images/products/T19.jpg",
    gallery: ["images/products/T19.jpg"],
    description: "Desktop gaming keyboard designed for comfortable everyday use.",
    specifications: [
        "Wired USB",
        "Desktop Design",
        "Gaming Style"
    ]
},

{
    id: 35,
    name: "T-WOLF One Handed Gaming Keyboard and Mouse Set",
    brand: "T-WOLF",
    category: "Gaming",
    price: 549.99,
    oldPrice: 799,
    stock: 10,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviews: 0,
    badge: "HOT",
    image: "images/products/TF950.jpg",
    gallery: ["images/products/TF950.jpg"],
    description: "Complete gaming set with essential accessories for PC gamers.",
    specifications: [
        "5-in-1 Set",
        "Gaming Keyboard",
        "Gaming Mouse",
        "Mouse Pad"
    ]
},

{
    id: 36,
    name: "T-WOLF Funky Keyboard and Mouse Combo",
    brand: "T-WOLF",
    category: "Gaming",
    price: 549.99,
    oldPrice: 699,
    stock: 10,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 0,
    badge: "SALE",
    image: "images/products/TF660.jpg",
    gallery: ["images/products/TF660.jpg"],
    description: "Comfortable wired gaming keyboard and mouse combination.",
    specifications: [
        "Gaming Keyboard",
        "Gaming Mouse",
        "Wired Connection"
    ]
},

{
    id: 41,
    name: "Metal Illuminated Wired Gaming Keyboard",
    brand: "T-WOLF",
    category: "Gaming",
    price: 399.99,
    oldPrice: 499.99,
    stock: 10,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 0,
    badge: "NEW",
    image: "images/products/T16.jpg",
    gallery: ["images/products/T16.jpg"],
    description: "Metal-style wired gaming keyboard with illuminated keys.",
    specifications: [
        "Metal Design",
        "Illuminated Keys",
        "Wired USB"
    ]
},

{
    id: 42,
    name: "Retro Punk Wireless Keyboard & Mouse Bundle – Pink",
    brand: "T-WOLF",
    category: "Gaming",
    price: 599.99,
    oldPrice: 699,
    stock: 10,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviews: 0,
    badge: "NEW",
    image: "images/products/TF770-PINK.jpg",
    gallery: ["images/products/TF770-PINK.jpg"],
    description: "Stylish pink retro wireless keyboard and mouse bundle.",
    specifications: [
        "Wireless",
        "Keyboard & Mouse",
        "Retro Punk Design",
        "Pink Finish"
    ]
},

{
    id: 43,
    name: "RGB Wired Gaming Keyboard & Mouse Combo",
    brand: "T-WOLF",
    category: "Gaming",
    price: 549.99,
    oldPrice: 649.99,
    stock: 10,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviews: 0,
    badge: "HOT",
    image: "images/products/TF600.jpg",
    gallery: ["images/products/TF600.jpg"],
    description: "RGB-style wired gaming keyboard and mouse combo for an immersive gaming setup.",
    specifications: [
        "RGB Backlighting",
        "Gaming Keyboard",
        "Gaming Mouse",
        "Wired USB"
    ]
},

{
    id: 44,
    name: "Wireless Keyboard – Blue",
    brand: "XO Design",
    category: "Computer Accessories",
    price: 399.99,
    oldPrice: 499,
    stock: 10,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 0,
    badge: "NEW",
    image: "images/products/KB-12-BLUE.jpg",
    gallery: ["images/products/KB-12-BLUE.jpg"],
    description: "Compact wireless keyboard with Bluetooth and 2.4G connectivity.",
    specifications: [
        "Bluetooth",
        "2.4G Wireless",
        "85 Keys",
        "Compact Design"
    ]
}

{
    id: 37,
    name: "HOCO GM24 Mystic Wireless Mouse",
    brand: "HOCO",
    category: "Computer Accessories",
    price: 399,
    oldPrice: 499,
    stock: 0,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 0,
    badge: "NEW",
    image: "images/products/GM24.jpg",
    gallery: [
        "images/products/GM24.jpg"
    ],
    description: "Dual-mode wireless mouse with 2.4G and Bluetooth connectivity, ergonomic design and adjustable DPI for comfortable everyday computing.",
    specifications: [
        "Dual-mode 2.4G + Bluetooth wireless connection",
        "USB-A 2.4G receiver included",
        "Bluetooth 3.0 / 5.2",
        "6 buttons",
        "800 / 1200 / 1600 DPI",
        "Ergonomic design",
        "2 × AAA batteries",
        "Compatible with desktops, laptops, smartphones and tablets",
        "Size: 111 × 71 × 40 mm",
        "Weight: 65 g"
    ]
},

{
    id: 38,
    name: "HOCO DI43 Robot 2.4G Wireless Gaming Mouse",
    brand: "HOCO",
    category: "Gaming",
    price: 499,
    oldPrice: 599,
    stock: 10,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 0,
    badge: "NEW",
    image: "images/products/DI43.jpg",
    gallery: [
        "images/products/DI43.jpg"
    ],
    description: "Lightweight 2.4G wireless gaming mouse designed for responsive and comfortable computer and gaming use.",
    specifications: [
        "2.4G wireless connection",
        "Wireless gaming design",
        "1600 DPI optical sensor",
        "Lightweight construction",
        "Ergonomic design",
        "USB wireless receiver",
        "Suitable for gaming and everyday computer use"
    ]
},

{
    id: 39,
    name: "HOCO GM29 Mysterious Dual-Mode Wireless Mouse",
    brand: "HOCO",
    category: "Computer Accessories",
    price: 299,
    oldPrice:399,
    stock: 0,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 0,
    badge: "NEW",
    image: "images/products/GM29.jpg",
    gallery: [
        "images/products/GM29.jpg"
    ],
    description: "Stylish dual-mode wireless mouse with 2.4G and Bluetooth connectivity, transparent housing and silent buttons for comfortable everyday use.",
    specifications: [
        "2.4G + Bluetooth dual-mode connection",
        "USB-A wireless receiver included",
        "800 / 1200 / 1600 DPI",
        "4 silent buttons",
        "Transparent housing",
        "Magnetic top cover",
        "Ergonomic design",
        "2 × AAA batteries",
        "Compatible with desktops, laptops, smartphones and tablets",
        "Size: 110 × 60 × 31 mm",
        "Weight: 58 g"
    ]
},

{
    id: 40,
    name: "HOCO GM17 Wireless Keyboard & Mouse Set",
    brand: "HOCO",
    category: "Computer Accessories",
    price: 599,
    oldPrice: 699,
    stock: 10,
    featured: false,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 0,
    badge: "NEW",
    image: "images/products/GM17.jpg",
    gallery: [
        "images/products/GM17.jpg"
    ],
    description: "Wireless keyboard and mouse set designed for comfortable everyday computing, office work and general PC use.",
    specifications: [
        "Wireless 2.4G connection",
        "USB-A receiver",
        "104-key membrane keyboard",
        "ABS + liquid silicone keyboard body",
        "800 / 1200 / 1600 DPI mouse",
        "Ergonomic mouse design",
        "Keyboard size: 440 × 140 × 25 mm",
        "Mouse size: 105.5 × 60 × 23.5 mm",
        "Compatible with most mainstream systems",
        "English / Russian layout options"
    ]
},

];

// Make products available globally
window.products = products;