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
    gallery: [
        "images/products/EW95.jpeg"
    ],
    description: "Bluetooth 5.4 ANC wireless earbuds with charging case.",
    specifications: [
        "Introducing the Hoco EW95True Wireless Stereo Headset, engineered to elevate your audio experience with cutting-edge features and reliable performance.",

"Specifications",

"Bluetooth version: v5.3; chip: Jerry AC6983",
"Battery capacity: Charging case - 300mAh; Headset - 30mAh",
"Usage time: Up to 4 hours; Standby time: Up to 150 hours",
"Dimensions: 54.2×46.6x22mm",
"Features:"

"Master-slave switching for flexible usage scenarios.",
"Seamless song navigation for effortless control.",
"Voice assistant activation for hands-free convenience.",
"Intuitive touch-sensitive operation for easy management of calls and music playback.",
"Enjoy unparalleled sound quality and functionality with the Hoco EW95 True Wireless Stereo Headset, designed to complement your active lifestyle with style and innovation.",

"What's in the box",
"1 x Set of Headset",
"1 x Casing",
"1 x Charging cable",
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
    gallery: [
        "images/products/EW97.jpeg"
    ],
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
    oldPrice: 499,
    stock: 18,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.7,
    reviews: 56,
    badge: "NEW",
    image: "images/products/EW05.jpeg",
    gallery: [
        "images/products/EW05.jpeg"
    ],
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
    oldPrice: 549,
    stock: 15,
    featured: true,
    bestSeller: false,
    newArrival: true,
    rating: 4.8,
    reviews: 43,
    badge: "NEW",
    image: "images/products/EW72.png",
    gallery: [
        "images/products/EW72.png"
    ],
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
    gallery: [
        "images/products/HP25.jpeg"
    ],
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
    gallery: [
        "images/products/E73.jpeg"
    ],
    description: "Bluetooth wireless neckband earphones with comfortable fit.",
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
    gallery: [
        "images/products/HC22.png"
    ],
    description: "20W USB-C fast charger for smartphones.",
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
    gallery: [
        "images/products/CA102.jpeg"
    ],
    description: "Durable fast charging USB cable.",
    specifications: [
        "Fast Charge",
        "Data Transfer",
        "1m Length"
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
    gallery: [
        "images/products/J160A-BeStill-Magnetic.png"
    ],
    description: "10000mAh magnetic wireless power bank.",
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
    gallery: [
        "images/products/car-charger.jpg"
    ],
    description: "Dual USB fast charging car adapter.",
    specifications: [
        "Dual USB",
        "Fast Charge",
        "Universal Compatibility"
    ]
}

];