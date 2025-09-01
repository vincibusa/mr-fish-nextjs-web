"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { MapPin, Clock, Phone, MessageSquare } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const whatsappNumber = "393123456789"; // Da aggiornare con numero reale
const phoneNumber = "0912345678"; // Da aggiornare con numero reale

const footerLinks = [
  { name: "Chi Siamo", href: "#chi-siamo" },
  { name: "Prodotti", href: "#prodotti" },
  { name: "Servizi", href: "#servizi" },
  { name: "Contatti", href: "#contatti" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  const handleGoogleMapsClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Corso+Tukory+9-11,+Palermo",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank", "noopener,noreferrer");
  };

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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = shouldReduceMotion ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0 } }
  } : {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer 
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-gray-900/95 via-slate-800/90 to-gray-900/95 border-t border-white/10 backdrop-blur-xl"
      role="contentinfo"
      aria-label="Informazioni di contatto e collegamenti"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <div className="container relative z-10 mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 text-white">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Info Negozio */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link 
              href="#home" 
              className="flex items-center gap-2 group transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-lg p-1"
              aria-label="Torna alla homepage di Mister Fish"
            >
              <div className="relative h-10 w-10">
                <Image src="/mr-fish-logo.png" alt="Mister Fish Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wide text-primary group-hover:text-primary/90 transition-colors">MISTER</span>
                <span className="text-lg font-bold leading-none tracking-wide group-hover:text-white/90 transition-colors">FISH</span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Il punto di riferimento per i surgelati di qualità a Palermo. Freschezza garantita dal freddo.
            </p>
            <div className="flex gap-2 pt-2">
              <button
                onClick={handleWhatsAppClick}
                className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label="Contattaci su WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-primary" />
              </button>
            </div>
          </motion.div>

          {/* Contatti & Posizione */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-white/90">Dove Siamo</h3>
            <div className="space-y-3 text-sm text-white/70">
              <button 
                className="flex items-start gap-3 w-full text-left cursor-pointer hover:text-white transition-all duration-300 hover:bg-white/5 p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                onClick={handleGoogleMapsClick}
                aria-label="Visualizza la nostra posizione su Google Maps"
              >
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="leading-relaxed">Corso Tukory 9-11, 90145 Palermo (PA)</span>
              </button>
              <a 
                href={`tel:${phoneNumber}`} 
                className="flex items-center gap-3 hover:text-white transition-all duration-300 hover:bg-white/5 p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                aria-label={`Chiama il numero ${phoneNumber}`}
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{phoneNumber}</span>
              </a>
            </div>
          </motion.div>

          {/* Orari */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-white/90">Orari di Apertura</h3>
            <div className="space-y-2 text-sm text-white/70">
              <div className="flex items-start gap-3 p-2 bg-white/5 backdrop-blur-sm rounded-lg">
                <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span>Lun - Ven:</span>
                    <span className="text-white/90 font-medium">8:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sabato:</span>
                    <span className="text-white/90 font-medium">8:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Domenica:</span>
                    <span className="text-white/90 font-medium">9:00 - 13:00</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Collegamenti Rapidi */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-white/90">Navigazione</h3>
            <nav className="flex flex-col space-y-2 text-sm" role="navigation" aria-label="Collegamenti rapidi">
              {footerLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  transition={shouldReduceMotion ? { duration: 0 } : { delay: index * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-white/70 hover:text-white hover:bg-white/5 transition-all duration-300 p-2 rounded-lg block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                    onClick={() => {
                      const target = document.getElementById(link.href.slice(1));
                      if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Separator className="my-8 bg-white/20" />

          {/* Copyright & Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-sm text-white/60">
              © {currentYear} <span className="text-primary font-medium">Mister Fish</span>. Tutti i diritti riservati.
            </div>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <span>P.IVA 1234567890</span>
              <span className="hidden md:inline">•</span>
              <span className="text-xs">Made with ❤️ in Palermo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}