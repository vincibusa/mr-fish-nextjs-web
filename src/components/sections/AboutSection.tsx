"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="chi-siamo" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl">
              <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-sm px-4 py-2 rounded-full">
                  La Nostra Storia
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                  Passione e <span className="text-primary">Qualità</span>
                </h2>
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-secondary">Mister Fish</strong> nasce a fine 2022 dall&apos;intuizione di <strong className="text-foreground">Danilo Stagno</strong>, che, dopo anni di esperienza, ha deciso di creare un punto di riferimento per la distribuzione di surgelati, con un focus speciale sul settore ittico.
                  </p>
                  <p>
                    Oggi <strong className="text-primary">Mister Fish</strong> è sinonimo di <strong className="text-foreground">praticità, freschezza e fiducia</strong>, con un occhio sempre attento alle esigenze di chi cerca soluzioni veloci senza rinunciare al gusto.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Fondatore Mister Fish"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
