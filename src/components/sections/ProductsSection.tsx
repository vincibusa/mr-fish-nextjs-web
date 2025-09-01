"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Fish, Beef, Apple, Coffee, IceCream, Globe, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Pesce Surgelato",
    description: "Alta qualità proveniente dai migliori fornitori. Fresco come appena pescato.",
    image: "/products/fish.jpg",
    categories: ["Salmone", "Branzino", "Orata", "Frutti di mare"],
    icon: Fish,
    featured: true,
    gradient: "from-slate-50 to-gray-100/50"
  },
  {
    id: 2,
    title: "Carne Selezionata",
    description: "Carni di prima scelta, selezionate per garantire gusto e tenerezza.",
    image: "/products/meat.jpg",
    categories: ["Bovino", "Suino", "Pollo", "Agnello"],
    icon: Beef,
    gradient: "from-slate-50 to-gray-100/50"
  },
  {
    id: 3,
    title: "Verdure & Ortaggi",
    description: "Verdure pratiche e sempre fresche, perfette per ogni preparazione.",
    image: "/products/vegetables.jpg",
    categories: ["Verdure miste", "Spinaci", "Piselli", "Minestrone"],
    icon: Apple,
    gradient: "from-slate-50 to-gray-100/50"
  },
  {
    id: 4,
    title: "Colazione",
    description: "Tutto per iniziare la giornata con gusto e energia.",
    image: "/products/breakfast.jpg",
    categories: ["Cornetti", "Brioche", "Pane", "Dolci"],
    icon: Coffee,
    gradient: "from-slate-50 to-gray-100/50"
  },
  {
    id: 5,
    title: "Dessert",
    description: "Gelati, torte e dolci surgelati per concludere in bellezza.",
    image: "/products/dessert.jpg",
    categories: ["Gelati", "Torte", "Semifreddi", "Sorbetti"],
    icon: IceCream,
    gradient: "from-slate-50 to-gray-100/50"
  },
  {
    id: 6,
    title: "Etnico/Orientale",
    description: "Specialità internazionali per chi ama sperimentare nuovi sapori.",
    image: "/products/asian.jpg",
    categories: ["Sushi", "Dim sum", "Spring roll", "Tempura"],
    icon: Globe,
    gradient: "from-slate-50 to-gray-100/50"
  }
];

export default function ProductsSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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

  return (
    <section id="prodotti" className="py-20 bg-gradient-to-br from-background via-muted/10 to-background" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-sm px-4 py-2">
            I Nostri Prodotti
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Cosa <span className="text-brand-primary">Troverai</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nel nostro store trovi davvero di tutto: pesce surgelato di alta qualità, carne selezionata, 
            verdure pratiche e sempre fresche, prodotti per la colazione, dessert e un angolo etnico/orientale 
            per chi ama sperimentare.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.id}
                variants={cardVariants}
                className="group relative"
              >
                <div className={`relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${product.featured ? 'ring-2 ring-primary/30' : ''}`}>
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Featured Badge */}
                    {product.featured && (
                      <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                        Popolare
                      </div>
                    )}

                    {/* Icon */}
                    <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md">
                      <IconComponent className="w-5 h-5 text-brand-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-brand-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                      {product.categories.slice(0, 3).map((category, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs bg-gray-100 text-gray-600 border-gray-200 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          {category}
                        </Badge>
                      ))}
                      {product.categories.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{product.categories.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Hover Action */}
                    <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="w-full text-brand-primary hover:bg-primary/10 hover:text-primary"
                      >
                        Scopri di più
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" as any }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8 border border-primary/10">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Che tu sia uno <strong className="text-brand-secondary">studente</strong> in cerca di pasti veloci, 
              una <strong className="text-brand-secondary">famiglia</strong> che vuole risparmiare tempo in cucina, 
              o un <strong className="text-brand-secondary">ristoratore</strong> che punta alla qualità, 
              <strong className="text-brand-primary"> Mister Fish</strong> ha la soluzione perfetta per te.
            </p>
            
            <Button 
              size="lg"
              className="brand-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Vieni a Scoprire l'Assortimento
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}