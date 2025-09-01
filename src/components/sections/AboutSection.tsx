"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as any
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as any
      }
    }
  };

  return (
    <section id="chi-siamo" className="py-20 bg-gradient-to-br from-muted/20 via-background to-muted/30" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >


            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Chi <span className="text-brand-primary">Siamo</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-brand-secondary">Mister Fish</strong> nasce a fine 2022 
                dall'intuizione e dalla determinazione di <strong className="text-foreground">Danilo Stagno</strong>, 
                che, dopo anni di esperienza nel settore, decide di cimentarsi nel ruolo di imprenditore.
              </p>
              
              <p>
                La sua passione per il mare e l'impegno per la qualità dei prodotti ittici hanno dato vita 
                a un'azienda dedicata all'ingrosso e alla distribuzione di surgelati, con un focus particolare 
                sul settore ittico.
              </p>
              
              <p>
                Sin dall'inizio, l'obiettivo è stato quello di diventare un punto di riferimento per 
                ristoranti, negozi e famiglie, offrendo un assortimento ampio e selezionato di prodotti surgelati. 
                Oggi <strong className="text-brand-primary">Mister Fish</strong> è sinonimo di <strong className="text-foreground">praticità, freschezza e fiducia</strong>, 
                con un occhio sempre attento alle esigenze di chi cerca soluzioni veloci senza rinunciare al gusto.
              </p>
            </motion.div>

            {/* Stats/Values */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">2022</div>
                <div className="text-sm text-muted-foreground">Anno di Fondazione</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-secondary">100%</div>
                <div className="text-sm text-muted-foreground">Qualità Garantita</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-primary">5km</div>
                <div className="text-sm text-muted-foreground">Area Consegna</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/danilo-stagno.jpg"
                alt="Danilo Stagno - Fondatore Mister Fish"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              
              {/* Floating Elements */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-sm text-muted-foreground">Fondatore</div>
                <div className="font-bold text-brand-secondary">Danilo Stagno</div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-brand-primary text-primary-foreground rounded-2xl p-4 shadow-lg">
                <div className="text-sm opacity-90">Dal</div>
                <div className="text-2xl font-bold">2022</div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-secondary/20 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}