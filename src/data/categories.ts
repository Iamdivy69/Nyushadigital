import drawstringCover from "@/assets/drawstring-potli/drawstring-potli-1.png";
import nonWovenCover from "@/assets/non-woven-bags/non-woven-bags-1.png";
import designerCover from "@/assets/designer-totes/designer-totes-1.png";
import ecoCover from "@/assets/eco-essentials/eco-essentials-1.png";

export const categories = [
    {
        id: "daily-totes",
        name: "Daily Totes",
        description: "Daily essentials crafted from natural fibers to reduce your environmental footprint.",
        image: ecoCover,
    },
    {
        id: "drawstring-potli",
        name: "Drawstring (potli)",
        description: "Natural jute and cotton weaves with authentic texture and durability for everyday use.",
        image: drawstringCover,
    },
    {
        id: "non-woven-bags",
        name: "Non-Woven Bags",
        description: "Modern structured designs with eco-friendly materials perfect for work and travel.",
        image: nonWovenCover,
    },
    {
        id: "designer-totes",
        name: "Designer Totes",
        description: "Premium handcrafted pieces combining style with sustainable craftsmanship.",
        image: designerCover,
    },
];
