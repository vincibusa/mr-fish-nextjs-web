"use client";

import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Store, ChefHat, CreditCard, Users, MessageCircle, MapPin } from "lucide-react";

interface RestaurantSectionProps {
  onWhatsAppClick: () => void;
  onLocationClick: () => void;
}

export default function RestaurantSection({ onWhatsAppClick, onLocationClick }: RestaurantSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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

  const features = [
    {
      icon: Store,
      title: "Assortimento Ampio e Sempre Disponibile",
      description: "Dal pesce surgelato alle verdure, fino ai prodotti etnici. Tutto quello che serve per il tuo menù.",
      color: "primary"
    },
    {
      icon: ChefHat,
      title: "Qualità Costante Tutto l'Anno",
      description: "Senza sorprese stagionali. La stessa qualità premium in ogni stagione, per ogni preparazione.",
      color: "secondary"
    },
    {
      icon: CreditCard,
      title: "Prezzi Competitivi e Forniture Flessibili",
      description: "Anche per ordini ricorrenti. Tariffe vantaggiose per partnership a lungo termine.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Supporto Diretto",
      description: "Sei un partner, non un semplice cliente. Assistenza dedicata per ogni tua esigenza.",
      color: "secondary"
    }
  ];

  return (
    <section id="ristoratori" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-sm px-4 py-2">
              Soluzioni Professionali
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Per i <span className="text-brand-primary">Ristoratori</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Sappiamo che ogni piatto parte da ingredienti affidabili. 
              Per questo Mister Fish offre soluzioni dedicate ai professionali della ristorazione.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const colorClass = feature.color === "primary" ? "text-primary" : "text-secondary";
              const bgColorClass = feature.color === "primary" ? "bg-primary/10" : "bg-secondary/10";
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50/50 transition-colors duration-300">
                    <div className={`p-3 ${bgColorClass} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${colorClass}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-brand-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" as any }}
          >
            <CTASection
              title="Diventa Nostro Partner"
              description="Scopri i vantaggi riservati ai ristoratori e inizia una partnership che farà crescere il tuo business."
              primaryCTA={{
                text: "Contattaci per Info B2B",
                icon: MessageCircle,
                onClick: onWhatsAppClick
              }}
              secondaryCTA={{
                text: "Vieni a Trovarci",
                icon: MapPin,
                onClick: onLocationClick
              }}
              features={[
                "Prezzi all'ingrosso dedicati",
                "Consegne programmate e puntuali",
                "Assistenza commerciale personalizzata"
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}