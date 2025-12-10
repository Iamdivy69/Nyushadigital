import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const CategoryPage = () => {
    const { id } = useParams();
    const category = categories.find((c) => c.id === id);
    const categoryProducts = products.filter(p => p.category === id);

    useEffect(() => {
        if (category) {
            document.title = `${category.name} | Nyusha Enterprise`;
        }
    }, [category]);

    if (!category) {
        return (
            <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-bold text-primary mb-4">Category Not Found</h1>
                <Link to="/">
                    <Button variant="outline">Return Home</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-cream">
            {/* Simple Header for navigation back */}
            <header className="p-6 border-b border-primary/10">
                <div className="max-w-7xl mx-auto flex items-center">
                    <Link to="/#shop-by-category" className="flex items-center text-primary font-medium hover:text-secondary transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-primary mb-6">{category.name}</h1>
                    <p className="text-xl text-primary/80 max-w-3xl">{category.description}</p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryProducts.length > 0 ? (
                        categoryProducts.map((product, index) => (
                            <CardContainer key={index} className="inter-var w-full h-full" containerClassName="py-0 h-full">
                                <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                                    <CardItem translateZ="50" className="w-full h-64 mb-4">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-contain rounded-xl group-hover/card:shadow-xl"
                                        />
                                    </CardItem>
                                    <CardItem
                                        translateZ="60"
                                        className="text-xl font-bold text-primary mb-2"
                                    >
                                        {product.name}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="50"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 mb-4"
                                    >
                                        {product.description}
                                    </CardItem>
                                    <CardItem
                                        translateZ="50"
                                        className="text-lg font-semibold text-accent"
                                    >
                                        {product.price}
                                    </CardItem>
                                </CardBody>
                            </CardContainer>
                        ))
                    ) : (
                        <div className="col-span-full bg-white p-8 rounded-3xl border border-primary/10 text-center py-20">
                            <p className="text-lg text-muted-foreground">New collection coming soon for this category!</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CategoryPage;
