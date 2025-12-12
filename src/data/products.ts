import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

export const products = [
    {
        id: "designer-sage-tote",
        name: "Designer Sage Tote",
        category: "designer-totes",
        description: "Premium canvas with wooden button",
        details: "Minimalist design meets functionality. The sage green canvas is paired with a handcrafted wooden button closure. Durable, stylish, and sustainable.",
        price: "₹2,199",
        image: product3,
        images: [product3, product1, product2, product3],
    },
    {
        id: "festive-jute-potli",
        name: "Festive Jute Potli",
        category: "drawstring-potli",
        description: "Embroidered festive pouch",
        details: "A beautiful handcrafted potli with intricate golden embroidery, perfect for weddings and festivals. Comes with a silk drawstring.",
        price: "₹899",
        image: product1,
        images: [product1, product2, product3],
    },
    {
        id: "corporate-gift-bag",
        name: "Corporate Event Bag",
        category: "non-woven-bags",
        description: "Customizable event tote",
        details: "Sleek design suitable for conferences and exhibitions. Available for bulk customization with your company logo.",
        price: "₹149",
        image: product3,
        images: [product3, product2],
    },
    {
        id: "bamboo-travel-kit",
        name: "Bamboo Travel Kit",
        category: "eco-essentials",
        description: "Zero-waste travel set",
        details: "Includes a bamboo toothbrush, tongue cleaner, and a small jute pouch. A perfect step towards a plastic-free lifestyle.",
        price: "₹499",
        image: product2,
        images: [product2, product3],
    },
];
