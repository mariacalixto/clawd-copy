// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "./components/particles-background"; // ← Caminho correto

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moltbot Clone",
  description: "Recriando o visual do Moltbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} antialiased`}>
        {/* Camada 1: Background base estilo Moltbot */}
        <div className="fixed inset-0 bg-moltbot -z-30" />
        
        {/* Camada 2: Partículas animadas */}
        <ParticlesBackground />
        
        {/* Camada 3: Conteúdo */}
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}