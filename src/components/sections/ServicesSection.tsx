"use client";

import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/sections/ServiceCard";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, MessageCircle, CreditCard, Store } from "lucide-react";
import clsx from "clsx";

interface ServicesSectionProps {
  onWhatsAppClick: () => void;
}

const services = [
  {
    icon: Truck,
    title: "Fornitura Ingrosso",
    description: "Quantità, qualità e puntualità sempre al tuo servizio.",
    features: [
      "Consegne programmate",
      "Prezzi all'ingrosso",
      "Assistenza dedicata"
    ],
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: MessageCircle,
    title: "Ordini WhatsApp",
    description: "Zero stress, scrivi e ricevi ciò che ti serve, quando ti serve.",
    features: [
      "Ordini rapidi e semplici",
      "Conferma immediata",
      "Supporto diretto e real-time"
    ],
    ctaText: "Ordina Ora",
    highlighted: true,
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: CreditCard,
    title: "Fidelity Card",
    description: "Vantaggi esclusivi per chi ci sceglie ogni giorno.",
    features: [
      "Sconti riservati",
      "Raccolta punti fedeltà",
      "Offerte speciali dedicate"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: Store,
    title: "Consegna a Domicilio",
    description: "La comodità fino a casa tua, entro 5 km dal nostro negozio.",
    features: [
      "Copertura entro 5 km",
      "Consegna veloce e sicura",
      "Prodotti sempre freschi"
    ],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function ServicesSection({ onWhatsAppClick }: ServicesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      }
    }
  };

  return (
    <section id="servizi" className="py-24 bg-muted/20" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors text-sm px-4 py-2 rounded-full">
            I Nostri Servizi
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Un Servizio <span className="text-primary">pensato per Te</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dalla fornitura per ristoranti alla spesa di tutti i giorni, abbiamo la soluzione giusta per ogni tua esigenza. Velocità, qualità e convenienza sono il nostro mestiere.
          </p>
        </motion.div>

        {/* Services Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={clsx({
                "lg:col-span-2": service.highlighted, // Highlighted card takes more space
                "md:col-span-1": !service.highlighted
              })}
            >
              <ServiceCard
                {...service}
                onCtaClick={service.highlighted ? onWhatsAppClick : undefined}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
