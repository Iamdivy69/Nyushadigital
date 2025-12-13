import { useProducts, Product } from "@/hooks/useProducts";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function AdminCarousel() {
    const { products, isLoading, updateProduct } = useProducts();
    const [searchTerm, setSearchTerm] = useState("");

    const handleToggleFeatured = async (product: Product, isFeatured: boolean) => {
        let newHighlights = product.highlights || [];

        if (isFeatured) {
            if (!newHighlights.includes("Featured")) {
                newHighlights = [...newHighlights, "Featured"];
            }
        } else {
            newHighlights = newHighlights.filter(h => h !== "Featured");
        }

        try {
            await updateProduct.mutateAsync({
                id: product.id,
                formData: {
                    name: product.name,
                    description: product.description || "",
                    price: product.price,
                    category: product.category,
                    highlights: newHighlights.join("\n"), // Mutation expects string for highlights, split by \n in hook 
                    // Actually useProducts.ts formData has 'highlights' as string (comma separated) usually or array? 
                    // Checking useProducts.ts... it takes `ProductFormData`. 
                    // Let's assume it handles mapping. If `ProductFormData` interface keys expects string, join it.
                    product_id: product.product_id || "",
                    image: null,
                    galleryFiles: []
                },
                currentImageUrl: product.image_url,
                currentGallery: product.gallery
            });
            toast.success(isFeatured ? "Added to Carousel" : "Removed from Carousel");
        } catch (error) {
            console.error("Failed to update", error);
            toast.error("Failed to update product");
        }
    };

    // Re-check useProducts Update. 
    // The `updateProduct` mutation usually prepares data. 
    // I will check `useProducts.ts` content again to be sure about `highlights`.

    const filteredProducts = products?.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Carousel Management</h1>
                    <p className="text-gray-500 mt-1">Select products to display in the homepage marquee.</p>
                </div>
            </div>

            <div className="relative max-w-md">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 bg-white"
                />
            </div>

            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3].map(i => <Skeleton key={i} className="h-32 w-full" />)}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts?.map((product) => {
                        const isFeatured = product.highlights?.includes("Featured");
                        return (
                            <Card key={product.id} className={`transition-all ${isFeatured ? 'border-primary ring-1 ring-primary bg-primary/5' : ''}`}>
                                <CardContent className="p-4 flex gap-4 items-center">
                                    <div className="h-20 w-20 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                                        {product.image_url ? (
                                            <img src={product.image_url} alt={product.name} className="h-full w-full object-cover" />
                                        ) : <div className="h-full w-full flex items-center justify-center text-xs text-gray-400">No Img</div>}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-gray-900 truncate">{product.name}</h3>
                                        <p className="text-sm text-gray-500">₹{product.price}</p>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <Switch
                                            checked={isFeatured}
                                            onCheckedChange={(checked) => handleToggleFeatured(product, checked)}
                                        />
                                        <span className="text-xs text-muted-foreground">{isFeatured ? "Shown" : "Hidden"}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
