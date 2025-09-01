"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { MapPin, Clock, Phone } from "lucide-react";
import Image from "next/image";

// const whatsappNumber = "393123456789"; // Da aggiornare con numero reale
const phoneNumber = "0912345678"; // Da aggiornare con numero reale

const footerLinks = [
  { name: "Chi Siamo", href: "#chi-siamo" },
  { name: "Prodotti", href: "#prodotti" },
  { name: "Servizi", href: "#servizi" },
  { name: "Contatti", href: "#contatti" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleGoogleMapsClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Corso+Tukory+9-11,+Palermo",
      "_blank"
    );
  };

  return (
    <footer className="bg-black/20 border-t border-white/10 backdrop-blur-lg">
      <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Info Negozio */}
          <div className="space-y-4">
            <Link href="#home" className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image src="/mr-fish-logo.png" alt="Mister Fish Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wide text-primary">MISTER</span>
                <span className="text-lg font-bold leading-none tracking-wide">FISH</span>
              </div>
            </Link>
            <p className="text-sm text-white/70">
              Il punto di riferimento per i surgelati di qualità a Palermo.
            </p>
          </div>

          {/* Contatti & Posizione */}
          <div className="space-y-4">
            <h3 className="font-semibold">Dove Siamo</h3>
            <div className="space-y-3 text-sm text-white/70">
              <div 
                className="flex items-start gap-3 cursor-pointer hover:text-white transition-colors"
                onClick={handleGoogleMapsClick}
              >
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Corso Tukory 9-11, 90145 Palermo (PA)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href={`tel:${phoneNumber}`} className="hover:text-white transition-colors">
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>

          {/* Orari */}
          <div className="space-y-4">
            <h3 className="font-semibold">Orari</h3>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <div>Lun - Ven: 8:00 - 20:00</div>
                  <div>Sabato: 8:00 - 19:00</div>
                  <div>Domenica: 9:00 - 13:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Collegamenti Rapidi */}
          <div className="space-y-4">
            <h3 className="font-semibold">Menu</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              {footerLinks.map(link => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Copyright & Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/50">
            © {currentYear} Mister Fish. Tutti i diritti riservati.
          </div>
          <div className="text-sm text-white/50">
            P.IVA 1234567890
          </div>
        </div>
      </div>
    </footer>
  );
}
