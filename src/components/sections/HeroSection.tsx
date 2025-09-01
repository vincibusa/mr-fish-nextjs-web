"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Corso+Tukory+9-11,+Palermo",
      "_blank"
    );
  };

  const handleDownloadFlyer = () => {
    window.open("/volantino-mr-fish.pdf", "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/store-background.jpg')` }}
      />
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
            className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row sm:gap-6"
          >
            <Button 
              size="lg" 
              onClick={handleLocationClick}
              className="h-14 w-full rounded-full bg-primary px-8 text-lg font-semibold text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105 sm:w-auto"
            >
              <MapPin className="mr-3 h-6 w-6" />
              Vieni a trovarci
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleDownloadFlyer}
              className="h-14 w-full rounded-full border-2 border-white/80 bg-white/10 px-8 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:text-foreground sm:w-auto"
            >
              <Download className="mr-3 h-6 w-6" />
              Scarica il Volantino
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
