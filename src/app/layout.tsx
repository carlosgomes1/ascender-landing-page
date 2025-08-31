import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Header } from "@/components/Header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ascender Smart | Automação Residencial SP - Casa Inteligente com Alexa, Som Ambiente e Persianas",

  description:
    "Transforme sua casa em uma smart home em São Paulo e ABC. Controle luzes, som ambiente, persianas e dispositivos com voz ou celular. Solicite seu orçamento grátis!",

  keywords: ["automação residencial", "SP", "ABC", "Alexa", "smart home", "luzes inteligentes", "som ambiente", "persianas automatizadas"],

  // colocar depois com a url correta e imagem da empresa
  // openGraph: {
  //   title: "Ascender Smart - Automação Residencial SP | Casa Inteligente",
  //   description:
  //     "Controle luzes, som ambiente, persianas e dispositivos da sua casa com voz ou celular. Solicite seu orçamento grátis!",
  //   url: "https://www.ascendersmart.com.br", // substitua pela URL real
  //   siteName: "Sua Casa Inteligente",
  //   images: [
  //     {
  //       url: "https://www.ascendersmart.com.br/og-image.jpg", // imagem para preview
  //       width: 1200,
  //       height: 630,
  //       alt: "Automação Residencial Inteligente",
  //     },
  //   ],
  //   locale: "pt_BR",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        {children}
      </body>

      <Analytics />
      <SpeedInsights />
    </html>
  );
}
