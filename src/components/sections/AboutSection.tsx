"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Heart, ShoppingBag, Phone } from "lucide-react";

interface AboutData {
  badge: string;
  title: string;
  highlightedTitle: string;
  story: {
    introduction: string;
    mission: string;
    callToAction: string;
  };
  stats: {
    founded: string;
    experience: string;
    clients: string;
  };
  values: string[];
}

const aboutData: AboutData = {
  badge: "Chi siamo",
  title: "La Nostra",
  highlightedTitle: "Storia",
  story: {
    introduction: "Mister Fish nasce a fine 2022 dall'intuizione e dalla determinazione di Danilo Stagno, che, dopo anni di esperienza nel settore, decide di cimentarsi nel ruolo di imprenditore.",
    mission: "Sin dall'inizio, l'obiettivo è stato quello di diventare un punto di riferimento per ristoranti, negozi e famiglie, offrendo un assortimento ampio e selezionato di prodotti surgelati di alta qualità.",
    callToAction: "Scopri la nostra storia e unisciti alla community di Mister Fish!"
  },
  stats: {
    founded: "2022",
    experience: "10+ anni",
    clients: "500+"
  },
  values: ["Qualità", "Freschezza", "Fiducia", "Sostenibilità"]
};

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const fadeInUp = shouldReduceMotion ? {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0 }
    }
  } : {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const staggerContainer = shouldReduceMotion ? {
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
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const animationDuration = shouldReduceMotion ? 0 : 0.8;

  const handleProductsClick = () => {
    const productsSection = document.getElementById('prodotti');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contatti');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="chi-siamo" 
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" 
      ref={ref}
      aria-labelledby="about-heading"
    >
      {/* Background with glassmorphism layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-blue-50/60 to-slate-100/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content Card */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: animationDuration, ease: "easeOut" as const }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div variants={fadeInUp}>
                  <Badge 
                    className="mb-4 bg-white/30 backdrop-blur-sm text-gray-800 hover:bg-white/40 transition-colors text-sm px-4 py-2 rounded-full shadow-sm"
                    aria-label="Sezione informazioni aziendali"
                  >
                    {aboutData.badge}
                  </Badge>
                </motion.div>

                <motion.h2 
                  id="about-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
                  variants={fadeInUp}
                >
                  {aboutData.title}{" "}
                  <span className="text-primary">{aboutData.highlightedTitle}</span>
                </motion.h2>

                {/* Story Content */}
                <motion.div 
                  className="space-y-4 mb-8"
                  variants={fadeInUp}
                >
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    <strong className="text-primary font-semibold">Mister Fish</strong>{" "}
                    {aboutData.story.introduction.replace("Mister Fish ", "")}
                  </p>
                  
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {aboutData.story.mission} La nostra passione per il mare e l&apos;impegno per la qualità ci hanno resi{" "}
                    <strong className="text-gray-900">sinonimo di praticità, freschezza e fiducia</strong>.
                  </p>
                </motion.div>

                {/* Stats */}
                <motion.div 
                  className="grid grid-cols-3 gap-4 mb-8 p-4 bg-white/20 backdrop-blur-sm rounded-2xl"
                  variants={fadeInUp}
                >
                  <div className="text-center">
                    <Calendar className="w-5 h-5 text-primary mx-auto mb-1" aria-hidden="true" />
                    <div className="font-bold text-lg text-gray-900">{aboutData.stats.founded}</div>
                    <div className="text-xs text-gray-600">Fondazione</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-5 h-5 text-primary mx-auto mb-1" aria-hidden="true" />
                    <div className="font-bold text-lg text-gray-900">{aboutData.stats.experience}</div>
                    <div className="text-xs text-gray-600">Esperienza</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 text-primary mx-auto mb-1" aria-hidden="true" />
                    <div className="font-bold text-lg text-gray-900">{aboutData.stats.clients}</div>
                    <div className="text-xs text-gray-600">Clienti</div>
                  </div>
                </motion.div>

                {/* Values */}
                <motion.div 
                  className="mb-8"
                  variants={fadeInUp}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" aria-hidden="true" />
                    I nostri valori
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {aboutData.values.map((value, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white/30 backdrop-blur-sm text-gray-800 text-sm rounded-full shadow-sm"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div variants={fadeInUp}>
                  <p className="text-primary font-medium mb-4">
                    {aboutData.story.callToAction}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      size="lg" 
                      onClick={handleProductsClick}
                      className="flex-1 sm:flex-none rounded-full bg-white/20 backdrop-blur-sm text-gray-900 border border-white/30 hover:bg-white/30 hover:shadow-lg transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                      aria-label="Vai alla sezione prodotti"
                    >
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Scopri i prodotti
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={handleContactClick}
                      className="flex-1 sm:flex-none rounded-full bg-primary/20 backdrop-blur-sm text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                      aria-label="Vai alla sezione contatti"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Contattaci
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="relative min-h-[300px] h-[400px] lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: animationDuration, ease: "easeOut" as const, delay: shouldReduceMotion ? 0 : 0.3 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85"
              alt="Il team di Mister Fish al lavoro nella selezione di prodotti ittici di qualità per garantire freschezza e eccellenza ai nostri clienti"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              priority={false}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
