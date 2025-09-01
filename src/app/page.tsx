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

      {/* Servizi Dedicati Section */}
      <section id="servizi" className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20">
              I Nostri Servizi
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Servizi Dedicati
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Che tu stia pensando a una cena veloce a casa o al menù completo del tuo locale, 
              Mister Fish ha sempre la soluzione perfetta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={Truck}
              title="Fornitura Ingrosso"
              description="Quantità, qualità e puntualità sempre al tuo servizio."
              features={[
                "Consegne programmate",
                "Prezzi all'ingrosso",
                "Assistenza dedicata"
              ]}
            />
            <ServiceCard
              icon={MessageCircle}
              title="Ordini WhatsApp"
              description="Zero stress, scrivi e ricevi ciò che ti serve."
              features={[
                "Ordini rapidi",
                "Conferma immediata",
                "Supporto real-time"
              ]}
              ctaText="Ordina Ora"
              onCtaClick={handleWhatsAppClick}
              highlighted
            />
            <ServiceCard
              icon={CreditCard}
              title="Fidelity Card"
              description="Vantaggi esclusivi per chi ci sceglie ogni giorno."
              features={[
                "Sconti riservati",
                "Punti fedeltà",
                "Offerte speciali"
              ]}
            />
            <ServiceCard
              icon={Store}
              title="Consegna a Domicilio"
              description="Comodità fino a casa tua, entro 5 km dal negozio."
              features={[
                "Raggio 5 km",
                "Consegna veloce",
                "Prodotti sempre freschi"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Per i Ristoratori Section */}
      <section id="ristoratori" className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                Soluzioni Professionali
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Per i Ristoratori
              </h2>
              <p className="text-xl text-muted-foreground">
                Sappiamo che ogni piatto parte da ingredienti affidabili. 
                Per questo Mister Fish offre soluzioni dedicate ai professionali della ristorazione.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Store className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Assortimento Ampio e Sempre Disponibile
                    </h3>
                    <p className="text-muted-foreground">
                      Dal pesce surgelato alle verdure, fino ai prodotti etnici. 
                      Tutto quello che serve per il tuo menù.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <ChefHat className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Qualità Costante Tutto l'Anno
                    </h3>
                    <p className="text-muted-foreground">
                      Senza sorprese stagionali. La stessa qualità premium 
                      in ogni stagione, per ogni preparazione.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Prezzi Competitivi e Forniture Flessibili
                    </h3>
                    <p className="text-muted-foreground">
                      Anche per ordini ricorrenti. Tariffe vantaggiose 
                      per partnership a lungo termine.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Supporto Diretto
                    </h3>
                    <p className="text-muted-foreground">
                      Sei un partner, non un semplice cliente. 
                      Assistenza dedicata per ogni tua esigenza.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <CTASection
              title="Diventa Nostro Partner"
              description="Scopri i vantaggi riservati ai ristoratori e inizia una partnership che farà crescere il tuo business."
              primaryCTA={{
                text: "Contattaci per Info B2B",
                icon: MessageCircle,
                onClick: handleWhatsAppClick
              }}
              secondaryCTA={{
                text: "Vieni a Trovarci",
                icon: MapPin,
                onClick: handleLocationClick
              }}
              features={[
                "Prezzi all'ingrosso dedicati",
                "Consegne programmate e puntuali",
                "Assistenza commerciale personalizzata"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contatti & Dove Siamo Section */}
      <section id="contatti" className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Vieni a Trovarci
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Contatti & Dove Siamo
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info di Contatto */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Il Nostro Negozio
                    </h3>
                    <div className="text-muted-foreground">
                      <div className="font-medium text-lg">Corso Tukory 9-11</div>
                      <div>90145 Palermo (PA)</div>
                      <div className="text-sm text-brand-secondary mt-1">
                        Proprio di fronte alla Stazione Centrale
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Orari di Apertura
                    </h3>
                    <div className="text-muted-foreground space-y-1">
                      <div>Lunedì - Venerdì: 8:00 - 20:00</div>
                      <div>Sabato: 8:00 - 19:00</div>
                      <div>Domenica: 9:00 - 13:00</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      Contatti Rapidi
                    </h3>
                    <div className="text-muted-foreground space-y-2">
                      <div>Telefono: 091 234 5678</div>
                      <div>WhatsApp: +39 312 345 6789</div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="text-center">
                <p className="text-muted-foreground mb-6">
                  Siamo facilmente raggiungibili sia a piedi che in auto, 
                  e offriamo anche il servizio di consegna a domicilio entro 5 km.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTASection
                    title="Passa a Trovarci o Scrivici Subito!"
                    description="Scopri tutte le novità di Mister Fish"
                    primaryCTA={{
                      text: "Vieni in Negozio",
                      icon: MapPin,
                      onClick: handleLocationClick
                    }}
                    secondaryCTA={{
                      text: "Scrivici su WhatsApp",
                      icon: MessageCircle,
                      onClick: handleWhatsAppClick
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Mappa */}
            <div className="bg-muted rounded-lg p-6 h-96 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold text-foreground mb-2">
                  Google Maps Integration
                </h3>
                <p className="text-sm">
                  La mappa interattiva sarà disponibile a breve.
                  <br />
                  Nel frattempo, clicca "Vieni a Trovarci" per le indicazioni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
