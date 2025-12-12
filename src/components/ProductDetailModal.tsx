import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    category: string;
    highlights?: string[];
    gallery?: string[];
    product_id?: string;
}

interface ProductDetailModalProps {
    product: Product | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ProductDetailModal({
    product,
    open,
    onOpenChange,
}: ProductDetailModalProps) {
    const [activeImage, setActiveImage] = useState<string>("");

    // Sync activeImage with product when it changes
    useEffect(() => {
        if (product) {
            setActiveImage(product.image_url);
        }
    }, [product]);

    if (!product) return null;

    const phoneNumber = "917359392396";
    const message = encodeURIComponent(
        `Hello, I'm interested in this product:\n\n*Name:* ${product.name}\n*ID:* ${product.product_id || "N/A"}`
    );

    // Using api.whatsapp.com which is robust for text pre-filling on desktop
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    const highlights = product.highlights && product.highlights.length > 0
        ? product.highlights
        : [
            "100% Biodegradable Materials",
            "Hand-stitched by skilled artisans",
            "Durable natural fibers",
            "Plastic-free packaging",
        ];

    // Combine main image and gallery for the carousel
    const allImages = [product.image_url, ...(product.gallery || [])].filter(Boolean);

    const tags = ["Natural Fiber", "Handmade", "Sustainable"];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white rounded-3xl">
                <div className="flex flex-col md:flex-row h-full max-h-[90vh] md:max-h-[600px] overflow-y-auto md:overflow-hidden">
                    {/* Left Side - Image Gallery */}
                    <div className="w-full md:w-1/2 bg-gray-50 flex flex-col items-center p-8 relative">
                        <button
                            onClick={() => onOpenChange(false)}
                            className="absolute top-4 left-4 md:hidden p-2 bg-white rounded-full shadow-md z-10"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        {/* Main Active Image */}
                        <div className="relative w-full flex-grow flex items-center justify-center h-[300px] md:h-auto mb-4">
                            <img
                                src={activeImage || product.image_url}
                                alt={product.name}
                                className="w-full h-full object-contain mix-blend-multiply transition-opacity duration-300"
                            />
                        </div>

                        {/* Thumbnails */}
                        {allImages.length > 1 && (
                            <div className="w-full flex justify-center gap-2 px-4 pb-2 overflow-x-auto no-scrollbar">
                                {allImages.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveImage(img)}
                                        className={`w-16 h-16 flex-shrink-0 rounded-lg border-2 ${activeImage === img ? 'border-[#1B4332]' : 'border-transparent'} overflow-hidden bg-white p-1 transition-all`}
                                    >
                                        <img src={img} className="w-full h-full object-cover" alt={`View ${i + 1}`} />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right Side - Details */}
                    <div className="w-full md:w-1/2 p-8 flex flex-col h-full overflow-y-auto">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-3xl font-bold text-[#1B4332] mb-2">{product.name}</h2>
                                <div className="text-2xl font-medium text-[#40916C] mb-4">
                                    ₹{product.price}
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="h-px bg-gray-100 w-full my-4" />

                        <div className="mb-6">
                            <h3 className="font-semibold text-[#1B4332] mb-3">Product Highlights</h3>
                            <ul className="space-y-2">
                                {highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-center text-gray-600">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[#1B4332] mr-2" />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        variant="secondary"
                                        className="bg-gray-100 text-[#1B4332] hover:bg-gray-200 px-3 py-1 font-normal"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            <Button
                                className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-lg py-6 rounded-xl"
                                asChild
                            >
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                    Buy Now
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
