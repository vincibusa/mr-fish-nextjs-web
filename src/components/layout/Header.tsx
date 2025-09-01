"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, MapPin, Home, Users, ShoppingBag, Truck, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";

const navigation = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Chi Siamo", href: "#chi-siamo", icon: Users },
  { name: "Prodotti", href: "#prodotti", icon: ShoppingBag },
  { name: "Servizi", href: "#servizi", icon: Truck },
  { name: "Contatti", href: "#contatti", icon: Phone },
];

const whatsappNumber = "393123456789"; // Da aggiornare con numero reale

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  // Scroll spy implementation
  const updateActiveSection = useCallback(() => {
    const sections = navigation.map(nav => nav.href.slice(1)); // Remove # from href
    const scrollPosition = window.scrollY + 100; // Offset for header height

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          return;
        }
      }
    }
  }, []);

  useEffect(() => {
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, [updateActiveSection]);

  const handleNavClick = (href: string) => {
    const target = document.getElementById(href.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsSheetOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full">
      {/* Skip Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-primary-foreground px-4 py-2 rounded-md z-[60] focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Salta al contenuto principale
      </a>
      <motion.div 
        initial={shouldReduceMotion ? false : { y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
        className="w-full flex h-16 items-center justify-between px-6 bg-background/60 backdrop-blur-xl shadow-lg border-b border-white/10"
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="#home" className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
            <div className="relative h-10 w-10">
              <Image
                src="/mr-fish-logo.png"
                alt="Mister Fish Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg font-bold tracking-wide text-primary">MISTER</span>
              <span className="text-lg font-bold leading-none tracking-wide text-foreground">FISH</span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 shadow-inner backdrop-blur-sm" role="navigation" aria-label="Menu principale">
          {navigation.map((item, index) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.div
                key={item.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.1, duration: 0.4 }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background/60 ${
                    isActive 
                      ? 'text-primary bg-primary/10 border border-primary/20 shadow-sm' 
                      : 'text-muted-foreground hover:text-primary hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </button>
              </motion.div>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <Button
              variant="ghost"
              onClick={handleWhatsAppClick}
              className="rounded-full text-primary hover:bg-primary/10 hover:text-primary border border-primary/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background/60"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span className="sr-only">Contattaci su WhatsApp</span>
            </Button>
          </motion.div>
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <Button className="rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/40 ring-2 ring-primary/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background/60">
              <MapPin className="w-5 h-5 mr-2" />
              Trovaci
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
              >
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="min-h-[44px] min-w-[44px] rounded-full text-primary transition-all duration-300 hover:bg-primary/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background/60 active:scale-95 active:bg-primary/20"
                  aria-expanded={isSheetOpen}
                  aria-controls="mobile-menu"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Apri menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[340px] bg-background/95 backdrop-blur-xl border-l border-white/10"
              id="mobile-menu"
            >
              <SheetTitle className="sr-only">Menu di navigazione</SheetTitle>
              <SheetDescription className="sr-only">
                Menu di navigazione principale di Mister Fish
              </SheetDescription>
              <motion.div
                initial={shouldReduceMotion ? false : { x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3 }}
                className="flex flex-col gap-4 pt-6"
              >
                {/* Logo in Mobile Menu */}
                <Link href="#home" className="flex items-center gap-2 px-4">
                  <div className="relative h-8 w-8">
                    <Image
                      src="/mr-fish-logo.png"
                      alt="Mister Fish Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-primary">MISTER</span>
                    <span className="text-sm font-bold leading-none text-foreground">FISH</span>
                  </div>
                </Link>
                
                <Separator className="bg-white/10" />

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-2 px-4" role="navigation" aria-label="Menu mobile">
                  {navigation.map((item, index) => {
                    const isActive = activeSection === item.href.slice(1);
                    return (
                      <motion.div
                        key={item.name}
                        initial={shouldReduceMotion ? false : { x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => handleNavClick(item.href)}
                          aria-current={isActive ? 'page' : undefined}
                          className={`w-full px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background/95 active:scale-95 ${
                            isActive 
                              ? 'bg-primary/10 text-primary border border-primary/20' 
                              : 'text-muted-foreground hover:bg-white/5 hover:text-primary'
                          }`}
                        >
                          <item.icon className="w-5 h-5" />
                          {item.name}
                        </button>
                      </motion.div>
                    );
                  })}
                </nav>

                <Separator className="bg-white/10" />

                {/* Mobile Actions */}
                <div className="flex flex-col gap-3 px-4">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background/95 active:scale-95"
                  >
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    <span>Contattaci su WhatsApp</span>
                  </Button>
                  <Button className="w-full rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/40 ring-2 ring-primary/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background/95 active:scale-95">
                    <MapPin className="mr-2 h-5 w-5" />
                    <span>Vieni a Trovarci</span>
                  </Button>
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  );
}
