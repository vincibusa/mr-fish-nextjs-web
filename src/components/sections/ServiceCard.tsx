import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  ctaText?: string;
  onCtaClick?: () => void;
  highlighted?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  ctaText,
  onCtaClick,
  highlighted = false
}: ServiceCardProps) {
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-xl ${
      highlighted 
        ? 'border-primary bg-gradient-to-br from-primary/5 to-secondary/5' 
        : 'hover:border-primary/50'
    }`}>
      <CardContent className="p-6 h-full flex flex-col">
        {/* Header con icona */}
        <div className="flex items-center space-x-3 mb-4">
          <div className={`p-3 rounded-xl ${
            highlighted 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-muted text-primary'
          }`}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-xl text-foreground">{title}</h3>
        </div>

        {/* Descrizione */}
        <p className="text-muted-foreground mb-6">
          {description}
        </p>

        {/* Lista features */}
        <div className="flex-grow">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        {ctaText && onCtaClick && (
          <div className="mt-6 pt-4 border-t">
            <Button
              onClick={onCtaClick}
              variant={highlighted ? "default" : "outline"}
              className={`w-full ${
                highlighted 
                  ? 'brand-primary hover:opacity-90' 
                  : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {ctaText}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}