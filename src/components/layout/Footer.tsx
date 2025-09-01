"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Clock, Phone, MessageCircle, Mail } from "lucide-react";

const whatsappNumber = "393123456789"; // Da aggiornare con numero reale
const phoneNumber = "0912345678"; // Da aggiornare con numero reale

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleGoogleMapsClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Corso+Tukory+9-11,+Palermo",
      "_blank"
    );
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Info Negozio */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-lg font-bold text-brand-primary">MISTER</div>
              <div className="text-lg font-bold text-foreground">FISH</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Il punto di riferimento per i surgelati di qualità a Palermo. 
              Dalla colazione al dessert, tutto quello che cerchi con la 
              freschezza garantita dal freddo.
            </p>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleWhatsAppClick}
                className="text-brand-secondary border-brand-secondary hover:bg-brand-secondary hover:text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Contatti & Posizione */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Dove Siamo</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div 
                className="flex items-start space-x-2 cursor-pointer hover:text-foreground transition-colors"
                onClick={handleGoogleMapsClick}
              >
                <MapPin className="w-4 h-4 mt-0.5 text-brand-primary" />
                <div>
                  <div>Corso Tukory 9-11</div>
                  <div>90145 Palermo (PA)</div>
                  <div className="text-xs text-brand-secondary">Di fronte alla Stazione Centrale</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-primary" />
                <a href={`tel:${phoneNumber}`} className="hover:text-foreground transition-colors">
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>

          {/* Orari */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Orari di Apertura</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-brand-primary" />
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
            <h3 className="font-semibold text-foreground">Menu</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link 
                href="#chi-siamo" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Chi Siamo
              </Link>
              <Link 
                href="#prodotti" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                I Nostri Prodotti
              </Link>
              <Link 
                href="#servizi" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Servizi Dedicati
              </Link>
              <Link 
                href="#ristoratori" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Per i Ristoratori
              </Link>
              <Link 
                href="#contatti" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contatti
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright & Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div>© {currentYear} Mister Fish. Tutti i diritti riservati.</div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div>Consegna entro 5km</div>
            <Separator orientation="vertical" className="h-4" />
            <div>Fidelity Card disponibile</div>
          </div>
        </div>
      </div>
    </footer>
  );
}