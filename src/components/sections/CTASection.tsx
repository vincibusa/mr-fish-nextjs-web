"use client";

import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    icon?: LucideIcon;
    onClick: () => void;
  };
  secondaryCTA?: {
    text: string;
    icon?: LucideIcon;
    onClick: () => void;
  };
}

export default function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
}: CTASectionProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
        {title}
      </h2>

      <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-muted-foreground">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          onClick={primaryCTA.onClick}
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-lg px-8 py-6 h-auto shadow-lg hover:scale-105 transition-transform"
        >
          {primaryCTA.icon && <primaryCTA.icon className="w-5 h-5 mr-2" />}
          {primaryCTA.text}
        </Button>

        {secondaryCTA && (
          <Button
            size="lg"
            variant="outline"
            onClick={secondaryCTA.onClick}
            className="rounded-full text-lg px-8 py-6 h-auto bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all"
          >
            {secondaryCTA.icon && <secondaryCTA.icon className="w-5 h-5 mr-2" />}
            {secondaryCTA.text}
          </Button>
        )}
      </div>
    </div>
  );
}

