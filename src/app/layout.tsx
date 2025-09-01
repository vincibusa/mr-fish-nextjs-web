import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mister Fish - Surgelati di Qualità a Palermo",
  description: "Il punto di riferimento per i surgelati a Palermo. Dalla colazione al dessert, pesce, carne, verdure e prodotti etnici. Qualità, comodità e convenienza per famiglie e ristoratori.",
  keywords: "surgelati, palermo, pesce, carne, verdure, ristoranti, famiglia, corso tukory, stazione centrale",
  authors: [{ name: "Mister Fish" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Header />
        <main id="main-content" className="w-full overflow-x-hidden" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
