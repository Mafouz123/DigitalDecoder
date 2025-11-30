import { Link, useLocation } from "wouter";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription, SheetHeader } from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#", label: "Articles" },
    { href: "#", label: "Tutoriels" },
    { href: "#", label: "Stratégie" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 font-heading font-bold text-xl tracking-tighter cursor-pointer">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-white">
              D
            </div>
            <span>Décoder le digital</span>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((link) => (
            link.href.startsWith("/") ? (
              <Link key={link.label} href={link.href} className={`transition-colors hover:text-primary ${isActive(link.href) ? "text-primary font-bold" : ""}`}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </a>
            )
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="hidden md:flex rounded-full font-semibold">S'abonner</Button>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                 <SheetTitle className="text-left flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-primary flex items-center justify-center text-white text-xs">
                      D
                    </div>
                    Décoder le digital
                 </SheetTitle>
                 <SheetDescription className="text-left">
                    Menu principal
                 </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {links.map((link) => (
                   link.href.startsWith("/") ? (
                    <Link 
                      key={link.label} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-primary ${isActive(link.href) ? "text-primary" : ""}`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      key={link.label} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  )
                ))}
                <div className="h-px bg-border my-2" />
                <Button className="w-full rounded-full font-semibold">S'abonner</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}