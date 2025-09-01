"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CTASectionProps {
  title: string;
  subtitle?: string;
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
  background?: "default" | "primary" | "muted";
  features?: string[];
}

export default function CTASection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  background = "default",
  features = []
}: CTASectionProps) {
  const backgroundClasses = {
    default: "bg-background",
    primary: "bg-gradient-to-r from-primary to-secondary text-primary-foreground",
    muted: "bg-muted/50"
  };

  return (
    <section className={`py-16 ${backgroundClasses[background]}`}>
      <div className="container">
        <Card className={`${background === "primary" ? "border-primary-foreground/20" : ""}`}>
          <CardContent className="p-8 md:p-12 text-center">
            {/* Subtitle Badge */}
            {subtitle && (
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {subtitle}
              </div>
            )}

            {/* Title */}
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
              background === "primary" ? "text-primary-foreground" : "text-foreground"
            }`}>
              {title}
            </h2>

            {/* Description */}
            <p className={`text-lg md:text-xl mb-8 max-w-3xl mx-auto ${
              background === "primary" ? "text-primary-foreground/90" : "text-muted-foreground"
            }`}>
              {description}
            </p>

            {/* Features */}
            {features.length > 0 && (
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border ${
                      background === "primary" 
                        ? "border-primary-foreground/20 bg-primary-foreground/10" 
                        : "border-border bg-muted/50"
                    }`}
                  >
                    <div className={`text-sm ${
                      background === "primary" ? "text-primary-foreground" : "text-foreground"
                    }`}>
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={primaryCTA.onClick}
                className={`text-lg px-8 py-6 h-auto ${
                  background === "primary" 
                    ? "bg-background text-primary hover:bg-background/90" 
                    : "brand-primary hover:opacity-90"
                }`}
              >
                {primaryCTA.icon && <primaryCTA.icon className="w-5 h-5 mr-2" />}
                {primaryCTA.text}
              </Button>

              {secondaryCTA && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={secondaryCTA.onClick}
                  className={`text-lg px-8 py-6 h-auto ${
                    background === "primary"
                      ? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      : "border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white"
                  }`}
                >
                  {secondaryCTA.icon && <secondaryCTA.icon className="w-5 h-5 mr-2" />}
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}