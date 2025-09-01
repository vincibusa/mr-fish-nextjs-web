"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, AlertCircle, RefreshCw } from "lucide-react";

// Fix for default markers in Leaflet with Next.js
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface MapProps {
  center: [number, number];
  zoom: number;
  markerText?: string;
  className?: string;
  onLocationClick?: () => void;
}

export default function Map({ center, zoom, markerText, className = "", onLocationClick }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  const initializeMap = async () => {
    if (!mapRef.current || mapInstanceRef.current) return;

    try {
      setIsLoading(true);
      setHasError(false);

      // Initialize map with improved styling
      const map = L.map(mapRef.current, {
        zoomControl: false,
        attributionControl: false
      }).setView(center, zoom);
      
      mapInstanceRef.current = map;

      // Add custom zoom control
      L.control.zoom({
        position: 'bottomright'
      }).addTo(map);

      // Add OpenStreetMap tiles with error handling
      const tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
        errorTileUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzllYTNhZiI+4pWQPC90ZXh0Pjwvc3ZnPg=='
      }).addTo(map);

      // Handle tile loading events
      tileLayer.on('loading', () => setIsLoading(true));
      tileLayer.on('load', () => {
        setIsLoading(false);
        setIsRetrying(false);
      });
      tileLayer.on('tileerror', () => {
        console.warn('Tile loading error');
      });

      // Create custom marker icon
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
          <div class="bg-primary text-white rounded-full p-2 shadow-lg border-2 border-white transform transition-transform hover:scale-110">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      });

      // Add marker with custom icon
      const marker = L.marker(center, { icon: customIcon }).addTo(map);
      
      if (markerText) {
        marker.bindPopup(`
          <div class="p-3 min-w-[200px]">
            <h3 class="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Mister Fish
            </h3>
            <p class="text-sm text-gray-700 mb-3">${markerText}</p>
            <button 
              onclick="${onLocationClick ? 'window.parent.handleMapLocationClick()' : ''}" 
              class="w-full px-3 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              Apri in Google Maps
            </button>
          </div>
        `, {
          maxWidth: 250,
          className: 'custom-popup'
        });
      }

      // Disable drag on mobile to prevent conflicts
      if (window.innerWidth < 768) {
        map.dragging.disable();
        map.tap?.disable();
      }

      // Set global function for popup button
      if (onLocationClick) {
        (window as any).handleMapLocationClick = onLocationClick;
      }

    } catch (error) {
      console.error('Map initialization error:', error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const retryMapLoad = async () => {
    setIsRetrying(true);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }
    await initializeMap();
  };

  useEffect(() => {
    initializeMap();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if ((window as any).handleMapLocationClick) {
        delete (window as any).handleMapLocationClick;
      }
    };
  }, [center, zoom, markerText]);

  if (hasError) {
    return (
      <div className={`${className} flex flex-col items-center justify-center bg-gray-100 rounded-2xl`}>
        <AlertCircle className="w-8 h-8 text-gray-400 mb-3" />
        <p className="text-gray-600 text-sm mb-3 text-center px-4">Errore nel caricamento della mappa</p>
        <button
          onClick={retryMapLoad}
          disabled={isRetrying}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          {isRetrying ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4" />
          )}
          Riprova
        </button>
      </div>
    );
  }

  return (
    <div className={`${className} relative`}>
      <div ref={mapRef} className="w-full h-full rounded-2xl" />
      
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 border-2 border-primary/20 rounded-full"></div>
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin absolute top-0"></div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Caricamento mappa...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}