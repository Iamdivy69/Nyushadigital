import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

export const products = [
    {
        id: "artisan-woven-tote",
        name: "Artisan Woven Tote",
        category: "designer-totes",
        description: "Handcrafted jute with leather handles",
        details: "This spacious tote is woven from 100% natural jute fibers, featuring reinforced leather handles for durability. Perfect for farmers markets or beach days.",
        price: "₹2,499",
        image: product1,
        images: [product1, product2, product3, product1],
    },
    {
        id: "botanical-canvas-bag",
        name: "Botanical Canvas Bag",
        category: "eco-essentials",
        description: "Natural cotton with leaf print",
        details: "Made from organic cotton canvas, this bag features a hand-printed botanical design using eco-friendly dyes. Includes an inner pocket for valuables.",
        price: "₹1,899",
        image: product2,
        images: [product2, product3, product1, product2],
    },
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
        id: "hemp-market-shopper",
        name: "Hemp Market Shopper",
        category: "eco-essentials",
        description: "Breathable hemp fiber weave",
        details: "Ultra-strong hemp fibers make this the ideal reusable grocery bag. Naturally resistant to mold and UV light, ensuring it lasts for years.",
        price: "₹1,599",
        image: product1,
        images: [product1, product3, product2, product1],
    },
];
