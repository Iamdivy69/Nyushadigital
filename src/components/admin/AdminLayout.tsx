import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Images, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const location = useLocation();

    const navItems = [
        {
            label: "Products",
            href: "/admin/products",
            icon: LayoutDashboard,
        },
        {
            label: "Carousel Highlights",
            href: "/admin/carousel",
            icon: Images,
        },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r shadow-sm flex flex-col hidden md:flex">
                <div className="p-6 border-b">
                    <h1 className="text-xl font-bold text-primary">Admin Panel</h1>
                    <p className="text-sm text-gray-500">Nyusha Green Craft</p>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                location.pathname === item.href
                                    ? "bg-primary text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t">
                    <Link
                        to="/"
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Back to Website
                    </Link>
                </div>
            </aside>

            {/* Mobile Nav (Simple top bar for mobile) */}
            <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b z-50 p-4 flex justify-between items-center">
                <span className="font-bold">Admin Panel</span>
                <div className="flex gap-4">
                    <Link to="/admin/products" className={cn("p-2", location.pathname === "/admin/products" ? "text-primary" : "text-gray-500")}><LayoutDashboard className="w-6 h-6" /></Link>
                    <Link to="/admin/carousel" className={cn("p-2", location.pathname === "/admin/carousel" ? "text-primary" : "text-gray-500")}><Images className="w-6 h-6" /></Link>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-20 md:pt-8">
                {children}
            </main>
        </div>
    );
};
