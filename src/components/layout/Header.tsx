"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Chi Siamo", href: "#chi-siamo" },
  { name: "Cosa Troverai", href: "#prodotti" },
  { name: "Servizi", href: "#servizi" },
  { name: "Ristoratori", href: "#ristoratori" },
  { name: "Contatti", href: "#contatti" },
];

const whatsappNumber = "393123456789"; // Da aggiornare con numero reale

export default function Header() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#home" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
          <div className="relative h-12 w-12 rounded-2xl p-1 bg-gradient-to-br from-primary/20 to-secondary/20 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src="/mr-fish-logo.png"
              alt="Mister Fish Logo"
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-brand-primary tracking-wide">MISTER</span>
            <span className="text-xl font-bold text-foreground leading-none tracking-wide">FISH</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-brand-primary active:text-brand-secondary hover:bg-primary/5 active:bg-primary/10 rounded-xl transition-all duration-300 group hover:scale-105 active:scale-95"
            >
              {item.name}
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full transition-all duration-300 group-hover:w-3/4 group-active:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={handleWhatsAppClick}
            className="h-11 px-6 rounded-2xl text-brand-secondary border-brand-secondary hover:bg-brand-secondary hover:text-white hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-md"
          >
            <FaWhatsapp className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <Button className="h-11 px-6 rounded-2xl brand-primary hover:opacity-90 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg">
            <MapPin className="w-4 h-4 mr-2" />
            Vieni a Trovarci
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="default" className="rounded-2xl hover:bg-primary/10 hover:shadow-md transition-all duration-300">
                <Menu className="h-6 w-6 text-brand-primary" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-4">
                {/* Logo in Mobile Menu */}
                <Link href="#home" className="flex items-center space-x-2">
                  <div className="relative h-6 w-6">
                    <Image
                      src="/mr-fish-logo.png"
                      alt="Mister Fish Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-primary text-sm">MISTER</span>
                    <span className="font-bold text-foreground text-sm leading-none">FISH</span>
                  </div>
                </Link>
                
                <Separator />

                {/* Mobile Navigation Links */}
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative px-4 py-3 text-sm font-semibold text-muted-foreground hover:text-brand-primary active:text-brand-secondary hover:bg-primary/5 active:bg-primary/10 rounded-xl transition-all duration-300 group hover:translate-x-2 active:translate-x-1 border-l-4 border-transparent hover:border-brand-primary/30 active:border-brand-primary"
                  >
                    {item.name}
                    <span className="absolute top-1/2 right-4 transform -translate-y-1/2 w-0 h-0 border-l-4 border-transparent transition-all duration-300 group-hover:border-l-brand-primary group-active:border-l-brand-secondary"></span>
                  </Link>
                ))}

                <Separator />

                {/* Mobile Actions */}
                <div className="flex flex-col space-y-3">
                  <Button
                    variant="outline"
                    onClick={handleWhatsAppClick}
                    className="w-full h-11 rounded-2xl text-brand-secondary border-brand-secondary hover:bg-brand-secondary hover:text-white hover:shadow-lg transition-all duration-300"
                  >
                    <FaWhatsapp className="w-4 h-4 mr-2" />
                    Contattaci su WhatsApp
                  </Button>
                  <Button className="w-full h-11 rounded-2xl brand-primary hover:opacity-90 hover:shadow-lg transition-all duration-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    Vieni a Trovarci
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}