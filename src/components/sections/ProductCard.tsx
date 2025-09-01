import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  categories?: string[];
  featured?: boolean;
}

export default function ProductCard({ 
  title, 
  description, 
  icon: Icon, 
  categories = [],
  featured = false 
}: ProductCardProps) {
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group ${
      featured ? 'ring-2 ring-primary' : ''
    }`}>
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-center space-x-3 mb-4">
          <div className={`p-2 rounded-lg transition-colors ${
            featured 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-muted group-hover:bg-primary group-hover:text-primary-foreground'
          }`}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {description}
        </p>
        
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}