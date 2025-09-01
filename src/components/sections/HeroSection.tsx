"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Download } from "lucide-react";

export default function HeroSection() {
  const handleLocationClick = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Corso+Tukory+9-11,+Palermo",
      "_blank"
    );
  };

  const handleDownloadFlyer = () => {
    // Placeholder per il download del volantino
    // Qui andrà il link al PDF del volantino
    window.open("#", "_blank");
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('/store-background.jpg')`
      }}
    >
      {/* Content Container */}
      <div className="container mx-auto max-w-7xl relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            <span className="text-brand-primary drop-shadow-lg">MISTER FISH</span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-medium opacity-90">
              Surgelati di Qualità a Palermo
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md">
            Dalla colazione al dessert, tutto quello che cerchi 
            con la freschezza garantita dal freddo
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              size="lg" 
              onClick={handleLocationClick}
              className="h-14 px-8 text-lg font-semibold rounded-2xl brand-primary hover:scale-105 hover:shadow-xl transition-all duration-300 min-w-[280px]"
            >
              <MapPin className="w-6 h-6 mr-3" />
              Vieni a trovarci in Corso Tukory 9-11, Palermo!
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleDownloadFlyer}
              className="h-14 px-8 text-lg font-semibold rounded-2xl border-2 border-white text-white hover:bg-white hover:text-foreground hover:scale-105 hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/10"
            >
              <Download className="w-6 h-6 mr-3" />
              Scarica Volantino
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Overlay for Better Text Readability */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
    </section>
  );
}