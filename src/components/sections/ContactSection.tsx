"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import CTASection from "@/components/sections/CTASection";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

interface ContactSectionProps {
  onWhatsAppClick: () => void;
  onLocationClick: () => void;
}

export default function ContactSection({ onWhatsAppClick, onLocationClick }: ContactSectionProps) {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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

  const mapVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as any
      }
    }
  };

  return (
    <section id="contatti" className="py-20 bg-gray-50/50" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-sm px-4 py-2">
            Vieni a Trovarci
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contatti & <span className="text-brand-primary">Dove Siamo</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div className="space-y-8">
              {/* Location */}
              <motion.div variants={itemVariants} className="group">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-brand-primary transition-colors">
                      Il Nostro Negozio
                    </h3>
                    <div className="text-muted-foreground space-y-1">
                      <div className="font-semibold text-lg text-foreground">Corso Tukory 9-11</div>
                      <div>90145 Palermo (PA)</div>
                      <div className="text-sm text-brand-secondary font-medium">
                        Proprio di fronte alla Stazione Centrale
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div variants={itemVariants} className="group">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <Clock className="w-6 h-6 text-secondary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-brand-secondary transition-colors">
                      Orari di Apertura
                    </h3>
                    <div className="text-muted-foreground space-y-2">
                      <div className="flex justify-between">
                        <span>Lunedì - Venerdì:</span>
                        <span className="font-medium text-foreground">8:00 - 20:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sabato:</span>
                        <span className="font-medium text-foreground">8:00 - 19:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domenica:</span>
                        <span className="font-medium text-foreground">9:00 - 13:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants} className="group">
                <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-brand-primary transition-colors">
                      Contatti Rapidi
                    </h3>
                    <div className="text-muted-foreground space-y-2">
                      <div className="flex items-center space-x-2">
                        <span>Telefono:</span>
                        <a href="tel:0912345678" className="font-medium text-foreground hover:text-brand-primary transition-colors">
                          091 234 5678
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>WhatsApp:</span>
                        <button 
                          onClick={onWhatsAppClick}
                          className="font-medium text-foreground hover:text-brand-secondary transition-colors"
                        >
                          +39 312 345 6789
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <Separator />

            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Siamo facilmente raggiungibili sia a piedi che in auto, 
                e offriamo anche il servizio di consegna a domicilio entro 5 km.
              </p>
              
              <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
                <CTASection
                  title="Passa a Trovarci o Scrivici Subito!"
                  description="Scopri tutte le novità di Mister Fish"
                  primaryCTA={{
                    text: "Vieni in Negozio",
                    icon: MapPin,
                    onClick: onLocationClick
                  }}
                  secondaryCTA={{
                    text: "Scrivici su WhatsApp",
                    icon: MessageCircle,
                    onClick: onWhatsAppClick
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            variants={mapVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 h-[500px] flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-4 text-xl">
                  Google Maps Integration
                </h3>
                <p className="leading-relaxed">
                  La mappa interattiva sarà disponibile a breve.
                  <br />
                  Nel frattempo, clicca "Vieni a Trovarci" per le indicazioni.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}