"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Fish, Beef, Apple, Coffee, IceCream, Globe } from "lucide-react";
import clsx from "clsx";

const products = [
  {
    id: 1,
    title: "Pesce Surgelato",
    description: "Alta qualità proveniente dai migliori fornitori. Fresco come appena pescato.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categories: ["Salmone", "Branzino", "Orata", "Frutti di mare"],
    icon: Fish,
    featured: true,
  },
  {
    id: 2,
    title: "Carne Selezionata",
    description: "Carni di prima scelta, selezionate per garantire gusto e tenerezza.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categories: ["Bovino", "Suino", "Pollo", "Agnello"],
    icon: Beef,
  },
  {
    id: 3,
    title: "Verdure & Ortaggi",
    description: "Verdure pratiche e sempre fresche, perfette per ogni preparazione.",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categories: ["Verdure miste", "Spinaci", "Piselli", "Minestrone"],
    icon: Apple,
  },
  {
    id: 4,
    title: "Colazione",
    description: "Tutto per iniziare la giornata con gusto e energia.",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categories: ["Cornetti", "Brioche", "Pane", "Dolci"],
    icon: Coffee,
  },
  {
    id: 5,
    title: "Dessert",
    description: "Gelati, torte e dolci surgelati per concludere in bellezza.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categories: ["Gelati", "Torte", "Semifreddi", "Sorbetti"],
    icon: IceCream,
  },
  {
    id: 6,
    title: "Etnico/Orientale",
    description: "Specialità internazionali per chi ama sperimentare nuovi sapori.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    categories: ["Sushi", "Dim sum", "Spring roll", "Tempura"],
    icon: Globe,
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
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-sm px-4 py-2 rounded-full">
            I Nostri Prodotti
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Un Mondo di <span className="text-primary">Gusto</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Esplora la nostra selezione di prodotti surgelati, scelti per portare qualità e convenienza sulla tua tavola, ogni giorno.
          </p>
        </motion.div>

        {/* Products Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => {
            const IconComponent = product.icon;
            const cardClasses = clsx(
              "group relative flex flex-col overflow-hidden rounded-3xl shadow-lg",
              {
                "h-[350px] md:h-[800px] lg:col-span-2 lg:row-span-2": index === 0, // Featured card
                "h-[350px] md:h-[400px] md:col-span-1": index !== 0
              }
            );

            return (
              <motion.div
                key={product.id}
                variants={cardVariants}
                className={cardClasses}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute top-6 left-6">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-full shadow-md">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold transition-colors group-hover:text-primary mb-2">
                    {product.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.categories.slice(0, 3).map((category, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-xs bg-white/10 border-white/20 text-white backdrop-blur-sm"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        
      </div>
    </section>
  );
}