import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GlobalWorkWire | Automated Remote Jobs & Tech Pulse",
  description: "Real-time automated platform aggregating top-tier remote jobs and trending tech/AI news across the USA, UK, Canada, and Europe.",
  keywords: ["Remote Jobs", "Tech News", "AI Jobs", "Software Engineer Jobs", "High Paying Remote Jobs", "GlobalWorkWire"],
  authors: [{ name: "Muhammad Tariq & Flora" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
