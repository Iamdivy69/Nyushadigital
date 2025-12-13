import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export type Product = {
    id: string;
    name: string;
    description: string | null;
    price: number;
    category: string;
    image_url: string | null;
    created_at: string;
    highlights: string[] | null;
    product_id: string | null;
    gallery: string[] | null;
};

export type ProductFormData = {
    name: string;
    description: string;
    price: number;
    category: string;
    highlights: string; // Received as newline separated string from form
    product_id: string;
    image: File | null;
    galleryFiles: File[];
    keptGalleryImages?: string[]; // URLs of gallery images to keep
};

export const useProducts = () => {
    const queryClient = useQueryClient();

    const fetchProducts = async (): Promise<Product[]> => {
        const { data, error } = await supabase
            .from("products")
            .select("*")
            .order("created_at", { ascending: false });

        if (error) throw error;
        return data || [];
    };

    const uploadImage = async (file: File): Promise<string> => {
        const fileName = file.name.replace(/\s+/g, "_");
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from("product-images")
            .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
            .from("product-images")
            .getPublicUrl(filePath);

        return data.publicUrl;
    };

    const deleteImage = async (imageUrl: string) => {
        try {
            const imagePath = imageUrl.split("/").pop();
            if (!imagePath) return;

            // Validate if it's a supabase storage URL to avoid trying to delete external images
            if (!imageUrl.includes("supabase")) return;

            const { error } = await supabase.storage
                .from("product-images")
                .remove([imagePath]);

            if (error) console.error("Error removing image:", error);
        } catch (e) {
            console.error("Exception removing image:", e);
        }
    };

    const { data: products, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });

    const addProduct = useMutation({
        mutationFn: async (formData: ProductFormData) => {
            let imageUrl = null;
            if (formData.image) {
                imageUrl = await uploadImage(formData.image);
            }

            const galleryUrls: string[] = [];
            if (formData.galleryFiles && formData.galleryFiles.length > 0) {
                for (const file of formData.galleryFiles) {
                    const url = await uploadImage(file);
                    if (url) galleryUrls.push(url);
                }
            }

            const { error } = await supabase.from("products").insert({
                name: formData.name,
                description: formData.description,
                price: formData.price,
                category: formData.category,
                highlights: formData.highlights ? formData.highlights.split('\n').filter(h => h.trim() !== '') : [],
                product_id: formData.product_id,
                image_url: imageUrl,
                gallery: galleryUrls,
            });

            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            toast.success("Product added successfully");
        },
        onError: (error) => {
            toast.error(`Error adding product: ${error.message}`);
        },
    });

    const updateProduct = useMutation({
        mutationFn: async ({
            id,
            formData,
            currentImageUrl,
            currentGallery,
        }: {
            id: string;
            formData: ProductFormData;
            currentImageUrl: string | null;
            currentGallery: string[] | null;
        }) => {
            let imageUrl = currentImageUrl;

            if (formData.image) {
                // Upload new image
                imageUrl = await uploadImage(formData.image);
                // Try to delete old image if it exists
                if (currentImageUrl) {
                    await deleteImage(currentImageUrl);
                }
            }

            // Handle Gallery Deletions
            // Identify images that were in currentGallery but are NOT in keptGalleryImages
            const keptImages = formData.keptGalleryImages || [];
            if (currentGallery) {
                const imagesToDelete = currentGallery.filter(url => !keptImages.includes(url));
                for (const url of imagesToDelete) {
                    await deleteImage(url);
                }
            }

            // Handle Gallery Additions
            let galleryUrls = [...keptImages];
            if (formData.galleryFiles && formData.galleryFiles.length > 0) {
                const newUrls: string[] = [];
                for (const file of formData.galleryFiles) {
                    const url = await uploadImage(file);
                    if (url) newUrls.push(url);
                }
                galleryUrls = [...galleryUrls, ...newUrls];
            }

            const { error } = await supabase
                .from("products")
                .update({
                    name: formData.name,
                    description: formData.description,
                    price: formData.price,
                    category: formData.category,
                    highlights: formData.highlights ? formData.highlights.split('\n').filter(h => h.trim() !== '') : [],
                    product_id: formData.product_id,
                    image_url: imageUrl,
                    gallery: galleryUrls,
                })
                .eq("id", id);

            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            toast.success("Product updated successfully");
        },
        onError: (error) => {
            toast.error(`Error updating product: ${error.message}`);
        },
    });

    const deleteProduct = useMutation({
        mutationFn: async ({ id, imageUrl, gallery }: { id: string; imageUrl: string | null; gallery: string[] | null }) => {
            const { error } = await supabase.from("products").delete().eq("id", id);
            if (error) throw error;

            if (imageUrl) {
                await deleteImage(imageUrl);
            }

            if (gallery && gallery.length > 0) {
                for (const url of gallery) {
                    await deleteImage(url);
                }
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            toast.success("Product deleted successfully");
        },
        onError: (error) => {
            toast.error(`Error deleting product: ${error.message}`);
        },
    });

    return {
        products,
        isLoading,
        error,
        addProduct,
        updateProduct,
        deleteProduct,
    };
};
