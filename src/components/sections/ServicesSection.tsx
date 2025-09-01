"use client";

import { Badge } from "@/components/ui/badge";
import ServiceCard from "@/components/sections/ServiceCard";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, MessageCircle, CreditCard, Store } from "lucide-react";

interface ServicesSectionProps {
  onWhatsAppClick: () => void;
}

export default function ServicesSection({ onWhatsAppClick }: ServicesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as any
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
        ease: "easeOut" as any
      }
    }
  };

  return (
    <section id="servizi" className="py-20 bg-gray-50/50" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-colors text-sm px-4 py-2">
            I Nostri Servizi
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Servizi <span className="text-brand-primary">Dedicati</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Che tu stia pensando a una cena veloce a casa o al menù completo del tuo locale, 
            Mister Fish ha sempre la soluzione perfetta.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div variants={cardVariants}>
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
          </motion.div>

          <motion.div variants={cardVariants}>
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
              onCtaClick={onWhatsAppClick}
              highlighted
            />
          </motion.div>

          <motion.div variants={cardVariants}>
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
          </motion.div>

          <motion.div variants={cardVariants}>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}