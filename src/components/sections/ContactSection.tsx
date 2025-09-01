"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, MessageSquare, Navigation } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues
const Map = dynamic(() => import("@/components/ui/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
      <div className="text-gray-600 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
        <div>Caricamento mappa...</div>
      </div>
    </div>
  )
});

interface ContactSectionProps {
  onWhatsAppClick: () => void;
  onLocationClick: () => void;
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Il Nostro Negozio",
    lines: [
      "Corso Tukory 9-11",
      "90145 Palermo (PA)",
    ],
    note: "Proprio di fronte alla Stazione Centrale",
    color: "primary"
  },
  {
    icon: Clock,
    title: "Orari di Apertura",
    lines: [
      "Lunedì - Venerdì: 8:00 - 20:00",
      "Sabato: 8:00 - 19:00",
      "Domenica: 9:00 - 13:00"
    ],
    color: "secondary"
  },
  {
    icon: Phone,
    title: "Contatti Rapidi",
    lines: [
      "Telefono: 091 234 5678",
      "WhatsApp: +39 312 345 6789"
    ],
    onClick: (line: string) => {
      if (line.startsWith("WhatsApp")) {
        window.open(`https://wa.me/393123456789`, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = `tel:0912345678`;
      }
    },
    color: "primary"
  }
];

export default function ContactSection({ onWhatsAppClick, onLocationClick }: ContactSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion ? {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0, delayChildren: 0 }
    }
  } : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = shouldReduceMotion ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0 } }
  } : {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="contatti" 
      className="relative py-20 overflow-hidden" 
      ref={ref}
      role="region"
      aria-labelledby="contact-heading"
    >
      {/* Background with glassmorphism layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-blue-50/60 to-slate-100/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-white/30 backdrop-blur-sm text-gray-800 hover:bg-white/40 transition-colors text-sm px-4 py-2 rounded-full shadow-sm">
            Sempre a Disposizione
          </Badge>
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Contatti & <span className="text-primary">Dove Siamo</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Siamo qui per te. Contattaci per qualsiasi informazione o vieni a trovarci nel nostro punto vendita.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <div className="group flex items-start gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:bg-white/15">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm text-gray-800 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{info.title}</h3>
                      <div className="text-gray-700 space-y-1">
                        {info.lines.map((line, i) => (
                          <div 
                            key={i} 
                            onClick={() => info.onClick && info.onClick(line)}
                            className={info.onClick ? "cursor-pointer hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded px-1 py-0.5" : ""}
                            tabIndex={info.onClick ? 0 : undefined}
                            role={info.onClick ? "button" : undefined}
                            aria-label={info.onClick ? `Contatta tramite ${line}` : undefined}
                          >
                            {line}
                          </div>
                        ))}
                        {info.note && <div className="text-xs text-primary font-medium pt-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full inline-block">{info.note}</div>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="pt-4">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl">
                <h3 className="font-bold text-lg text-gray-900 mb-4 text-center">Contattaci Subito</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={onWhatsAppClick}
                    className="flex-1 rounded-full bg-white/20 backdrop-blur-sm text-gray-900 border border-white/30 hover:bg-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    aria-label="Contattaci su WhatsApp"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                  <Button 
                    onClick={onLocationClick}
                    className="flex-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    aria-label="Visualizza la posizione su Google Maps"
                  >
                    <Navigation className="mr-2 h-5 w-5" />
                    Come Arrivare
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-2xl h-full">
              <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                La Nostra Posizione
              </h3>
              <div className="rounded-2xl overflow-hidden h-[400px] lg:h-[500px] shadow-lg">
                <Map 
                  center={[38.1157, 13.3615]} // Coordinates for Palermo, Corso Tukory
                  zoom={16}
                  markerText="Mister Fish - Corso Tukory 9-11, Palermo"
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <p className="text-sm text-gray-800 text-center font-medium">
                  📍 Corso Tukory 9-11, 90145 Palermo (PA)
                </p>
                <p className="text-xs text-gray-600 text-center mt-1">
                  Proprio di fronte alla Stazione Centrale
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}