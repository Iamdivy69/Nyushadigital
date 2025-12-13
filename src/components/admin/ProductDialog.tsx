import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Product, ProductFormData } from "@/hooks/useProducts";
import { useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { categories } from "@/data/categories";
import { X } from "lucide-react";

const productSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().min(1, "Description is required"),
    price: z.coerce.number().min(0, "Price must be positive"),
    category: z.string().min(1, "Category is required"),
    product_id: z.string().min(1, "Product ID is required"),
    highlights: z.string().optional(),
    image: z.any().optional(),
    galleryFiles: z.any().optional(),
    keptGalleryImages: z.array(z.string()).optional(),
});

interface ProductDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    product?: Product | null;
    onSubmit: (data: ProductFormData) => Promise<void>;
}

export function ProductDialog({
    open,
    onOpenChange,
    product,
    onSubmit,
}: ProductDialogProps) {
    const form = useForm<ProductFormData>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            name: "",
            description: "",
            price: 0,
            category: "",
            highlights: "",
            image: null,
            galleryFiles: [],
            keptGalleryImages: [],
        },
    });

    const keptImages = form.watch("keptGalleryImages") || [];

    useEffect(() => {
        if (product) {
            form.reset({
                name: product.name,
                description: product.description || "",
                price: product.price,
                category: product.category,
                product_id: product.product_id || "",
                highlights: product.highlights ? product.highlights.join('\n') : "",
                image: null, // Don't set file input value
                galleryFiles: [],
                keptGalleryImages: product.gallery || [],
            });
        } else {
            form.reset({
                name: "",
                description: "",
                price: 0,
                category: "",
                product_id: "",
                highlights: "",
                image: null,
                galleryFiles: [],
                keptGalleryImages: [],
            });
        }
    }, [product, form, open]);

    const handleSubmit = async (data: ProductFormData) => {
        await onSubmit(data);
        onOpenChange(false);
    };

    const removeGalleryImage = (imageUrl: string) => {
        const currentImages = form.getValues("keptGalleryImages") || [];
        const newImages = currentImages.filter(url => url !== imageUrl);
        form.setValue("keptGalleryImages", newImages);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>
                        {product ? "Edit Product" : "Create New Product"}
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                        className="space-y-4"
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="product_id"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product ID (SKU)</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder="e.g. BAG-001" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <Input type="number" step="0.01" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Category</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        value={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem key={category.id} value={category.id}>
                                                    {category.name}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="highlights"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Highlights (One per line)</FormLabel>
                                    <FormControl>
                                        <Textarea {...field} placeholder="Eco-friendly&#10;Handmade&#10;Durable" className="h-24" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="galleryFiles"
                            render={({ field: { value, onChange, ...field } }) => (
                                <FormItem>
                                    <FormLabel>Add Gallery Images</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            onChange={(e) => {
                                                const files = Array.from(e.target.files || []);
                                                if (files.length > 0) {
                                                    onChange(files);
                                                }
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Existing Gallery Images Display */}
                        {keptImages.length > 0 && (
                            <div className="space-y-2">
                                <FormLabel>Current Gallery Images</FormLabel>
                                <div className="flex flex-wrap gap-2">
                                    {keptImages.map((url, index) => (
                                        <div key={index} className="relative group w-20 h-20 rounded-md overflow-hidden border">
                                            <img
                                                src={url}
                                                alt={`Gallery ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeGalleryImage(url)}
                                                className="absolute top-1 right-1 bg-red-500 rounded-full p-1 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field: { value, onChange, ...field } }) => (
                                <FormItem>
                                    <FormLabel>Main Image</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    onChange(file);
                                                }
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end space-x-2 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => onOpenChange(false)}
                            >
                                Cancel
                            </Button>
                            <Button type="submit">
                                {product ? "Update" : "Create"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
