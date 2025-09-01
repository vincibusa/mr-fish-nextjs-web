"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, MapPin, Home, Users, ShoppingBag, Truck, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Chi Siamo", href: "#chi-siamo", icon: Users },
  { name: "Prodotti", href: "#prodotti", icon: ShoppingBag },
  { name: "Servizi", href: "#servizi", icon: Truck },
  { name: "Contatti", href: "#contatti", icon: Phone },
];

const whatsappNumber = "393123456789"; // Da aggiornare con numero reale

export default function Header() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 shadow-inner backdrop-blur-sm">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-primary hover:bg-white/5 rounded-full flex items-center gap-2"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              onClick={handleWhatsAppClick}
              className="rounded-full text-primary hover:bg-primary/10 hover:text-primary border border-primary/20 transition-all duration-300"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span className="sr-only">WhatsApp</span>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/60 shadow-lg shadow-primary/30 transition-all duration-300">
              <MapPin className="w-5 h-5 mr-2" />
              Trovaci
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className="rounded-full text-primary transition-all duration-300 hover:bg-primary/10 border border-white/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Apri menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-background/95 backdrop-blur-xl border-l border-white/10">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
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
                <nav className="flex flex-col gap-2 px-4">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="px-4 py-3 text-base font-medium text-muted-foreground transition-all duration-300 hover:bg-white/5 hover:text-primary rounded-xl flex items-center gap-3"
                      >
                        <item.icon className="w-5 h-5" />
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <Separator className="bg-white/10" />

                {/* Mobile Actions */}
                <div className="flex flex-col gap-3 px-4">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="w-full rounded-xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <FaWhatsapp className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                  <Button className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/60 transition-all duration-300">
                    <MapPin className="mr-2 h-5 w-5" />
                    Vieni a Trovarci
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
