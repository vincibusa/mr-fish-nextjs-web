"use client";

import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ServiceCard from "@/components/sections/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import {
  Truck,
  MessageCircle,
  CreditCard,
  Store,
  Users,
  ChefHat,
  Clock,
  MapPin,
  Phone
} from "lucide-react";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

const whatsappNumber = "393123456789"; // Da aggiornare con numero reale

export default function Home() {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Corso+Tukory+9-11,+Palermo",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Chi Siamo Section */}
      <AboutSection />

      {/* Cosa Troverai Section */}
      <ProductsSection />

      {/* Servizi Section */}
      <ServicesSection onWhatsAppClick={handleWhatsAppClick} />

      {/* Contatti Section */}
      <ContactSection 
        onWhatsAppClick={handleWhatsAppClick} 
        onLocationClick={handleLocationClick} 
      />

    </div>
  );
}
