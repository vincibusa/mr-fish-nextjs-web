"use client";

import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

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
        window.open(`https://wa.me/393123456789`, "_blank");
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contatti" className="py-24" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-sm px-4 py-2 rounded-full">
            Sempre a Disposizione
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contatti & <span className="text-primary">Dove Siamo</span>
          </h2>
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
                  <div className="group flex items-start gap-4 p-6 bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg transition-all duration-300">
                    <div className={`p-3 rounded-xl bg-${info.color}/10 text-${info.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{info.title}</h3>
                      <div className="text-muted-foreground space-y-1">
                        {info.lines.map((line, i) => (
                          <div 
                            key={i} 
                            onClick={() => info.onClick && info.onClick(line)}
                            className={info.onClick ? "cursor-pointer hover:text-primary transition-colors" : ""}
                          >
                            {line}
                          </div>
                        ))}
                        {info.note && <div className="text-xs text-secondary font-medium pt-1">{info.note}</div>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-xl"
          >
            <CTASection
              title="Passa a Trovarci o Scrivici!"
              description="Il nostro team è pronto ad assisterti per qualsiasi esigenza. Scopri la qualità e la convenienza di Mister Fish."
              primaryCTA={{
                text: "Vieni in Negozio",
                icon: MapPin,
                onClick: onLocationClick
              }}
              secondaryCTA={{
                text: "Contattaci su WhatsApp",
                icon: Phone,
                onClick: onWhatsAppClick
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
