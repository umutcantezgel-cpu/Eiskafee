"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, Package, Settings, LogOut } from "lucide-react";
import StoreToggle from "@/components/admin/StoreToggle";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Orders", href: "/admin/orders", icon: ShoppingBag },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-cream flex">
      {/* Sidebar */}
      <aside className="w-72 bg-bark text-cream flex flex-col justify-between hidden md:flex shrink-0">
        <div className="p-8">
          <div className="mb-12">
            <h1 className="text-3xl font-display tracking-tight text-mint">
              Hey Fede
            </h1>
            <p className="text-cream/60 text-sm mt-1">Admin Portal</p>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-mint text-bark font-medium shadow-lg shadow-mint/20"
                      : "text-cream/70 hover:bg-white/5 hover:text-cream"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-8 border-t border-white/10 space-y-6">
          <div className="flex flex-col space-y-4">
            <p className="text-xs uppercase tracking-wider text-cream/40 font-semibold">
              Store Status
            </p>
            {/* The Toggle wrapped to blend into dark sidebar */}
            <div className="bg-white/5 rounded-pill p-1">
               <StoreToggle />
            </div>
          </div>

          <button className="flex items-center space-x-3 px-4 py-3 w-full text-left rounded-xl transition-all duration-300 text-cream/70 hover:bg-white/5 hover:text-cream">
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-bark text-cream p-4 flex justify-between items-center">
          <h1 className="text-xl font-display text-mint">Hey Fede</h1>
          {/* Mobile menu toggle could go here */}
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 scroll-hide">
          {children}
        </div>
      </main>
    </div>
  );
}
