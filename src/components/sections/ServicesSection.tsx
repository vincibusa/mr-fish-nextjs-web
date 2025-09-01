"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, MessageCircle, CreditCard, Store } from "lucide-react";
import clsx from "clsx";

interface ServicesSectionProps {
  onWhatsAppClick: () => void;
}

const services = [
  {
    id: 1,
    icon: MessageCircle,
    title: "Ordini WhatsApp",
    description: "Zero stress, scrivi e ricevi ciò che ti serve, quando ti serve.",
    features: [
      "Ordini rapidi",
      "Conferma immediata",
      "Supporto real-time"
    ],
    ctaText: "Ordina Ora",
    featured: true,
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: 2,
    icon: Truck,
    title: "Fornitura Ingrosso",
    description: "Quantità, qualità e puntualità sempre al tuo servizio.",
    features: [
      "Consegne programmate",
      "Prezzi all&apos;ingrosso",
      "Assistenza dedicata"
    ],
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    icon: Store,
    title: "Consegna Domicilio",
    description: "La comodità fino a casa tua, entro 5 km dal nostro negozio.",
    features: [
      "Copertura 5 km",
      "Consegna veloce",
      "Prodotti freschi"
    ],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    icon: CreditCard,
    title: "Fidelity Card",
    description: "Vantaggi esclusivi per chi ci sceglie ogni giorno.",
    features: [
      "Sconti riservati",
      "Punti fedeltà",
      "Offerte speciali"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function ServicesSection({ onWhatsAppClick }: ServicesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion ? {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
        delayChildren: 0
      }
    }
  } : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = shouldReduceMotion ? {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0,
      }
    }
  } : {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      }
    }
  };

  const titleVariants = shouldReduceMotion ? {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0,
      }
    }
  } : {
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
    <section id="servizi" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-sm px-4 py-2 rounded-full">
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
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const cardClasses = clsx(
              "group relative flex flex-col overflow-hidden rounded-3xl shadow-lg cursor-pointer",
              {
                "h-[350px] md:h-[500px] lg:col-span-2": index === 0, // Featured card takes 2 columns
                "h-[350px] md:h-[400px]": index !== 0 // Other cards take 1 column each
              }
            );

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={cardClasses}
                onClick={index === 0 ? onWhatsAppClick : undefined}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-6 left-6">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-full shadow-md">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold transition-colors group-hover:text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs bg-white/10 border-white/20 text-white backdrop-blur-sm"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  {service.ctaText && (
                    <Button 
                      size="sm"
                      className="bg-primary/80 hover:bg-primary text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105"
                      onClick={(e) => {
                        e.stopPropagation();
                        onWhatsAppClick();
                      }}
                    >
                      {service.ctaText}
                    </Button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}