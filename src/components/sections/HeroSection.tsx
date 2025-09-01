"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Download, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const STORE_ADDRESS = "Corso+Tukory+9-11,+Palermo";
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${STORE_ADDRESS}`;
const FLYER_PDF_URL = "/volantino-mr-fish.pdf";
const HERO_BG_IMAGE = "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  
  const handleLocationClick = () => {
    window.open(GOOGLE_MAPS_URL, "_blank", "noopener,noreferrer");
  };

  const handleDownloadFlyer = () => {
    window.open(FLYER_PDF_URL, "_blank", "noopener,noreferrer");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.3,
        duration: shouldReduceMotion ? 0 : 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Sezione principale - Mister Fish"
    >
      {/* Background Image with Next.js optimization */}
      <div className="absolute inset-0">
        <Image
          src={HERO_BG_IMAGE}
          alt="Mercato del pesce con prodotti freschi e surgelati"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content Container */}
      <div className="container relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl space-y-8"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-primary drop-shadow-lg">MISTER FISH</span>
            <br />
            <span className="text-2xl font-medium opacity-90 md:text-3xl lg:text-4xl">
              Surgelati di Qualità a Palermo
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="mx-auto max-w-2xl text-lg text-white/90 drop-shadow-md md:text-xl"
          >
            Dalla colazione al dessert, tutto quello che cerchi con la freschezza garantita dal freddo.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row"
          >
            <Button 
              size="lg" 
              onClick={handleLocationClick}
              aria-label="Visualizza la posizione del negozio su Google Maps (si apre in una nuova finestra)"
              className="h-14 min-w-[280px] rounded-full bg-gradient-to-r from-primary to-primary/90 px-8 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/40 ring-2 ring-primary/20 transition-all duration-300 hover:from-primary/90 hover:to-primary hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 active:scale-95 sm:min-w-[240px]"
            >
              <MapPin className="mr-3 h-5 w-5" />
              Vieni a trovarci
              <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleDownloadFlyer}
              aria-label="Scarica il volantino del negozio in PDF (si apre in una nuova finestra)"
              className="h-14 min-w-[280px] rounded-full border-2 border-white bg-white/15 px-8 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-gray-900 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 active:scale-95 sm:min-w-[240px]"
            >
              <Download className="mr-3 h-5 w-5" />
              Scarica il Volantino
              <ExternalLink className="ml-2 h-4 w-4 opacity-70" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
