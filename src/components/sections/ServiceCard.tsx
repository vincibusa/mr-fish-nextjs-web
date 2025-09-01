import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  ctaText?: string;
  onCtaClick?: () => void;
  highlighted?: boolean;
  image?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  ctaText,
  onCtaClick,
  highlighted = false,
  image
}: ServiceCardProps) {
  const cardClasses = clsx(
    "relative w-full h-full bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/10 hover:border-white/20 transition-all duration-300 group border-none",
    {
      "ring-2 ring-primary/30 shadow-primary/20": highlighted,
      "hover:shadow-xl hover:scale-[1.02]": !highlighted
    }
  );

  const iconContainerClasses = clsx(
    "p-4 rounded-2xl mb-6 inline-flex items-center justify-center transition-all duration-300",
    {
      'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/30': highlighted,
      'bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20': !highlighted
    }
  );

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="h-full"
    >
      <div className={cardClasses}>
        {/* Background Image */}
        {image && (
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
          </div>
        )}
        
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50" />
        
        <div className="relative p-8 flex flex-col flex-grow z-10">
          <div className={iconContainerClasses}>
            <Icon className="w-8 h-8" />
          </div>
          
          <h3 className="font-bold text-2xl text-foreground mb-4">{title}</h3>
          
          <p className="text-muted-foreground text-base mb-8 flex-grow leading-relaxed">
            {description}
          </p>

          <ul className="space-y-4 text-base">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                <span className="text-foreground/90">{feature}</span>
              </li>
            ))}
          </ul>

          {ctaText && onCtaClick && (
            <div className="mt-8 pt-6 border-t border-white/10">
              <Button
                onClick={onCtaClick}
                size="lg"
                className={clsx(
                  "w-full text-lg font-semibold py-6 rounded-xl transition-all duration-300",
                  {
                    'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02]': highlighted,
                    'bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/20': !highlighted
                  }
                )}
              >
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

