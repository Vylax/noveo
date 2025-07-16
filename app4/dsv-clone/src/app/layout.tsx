import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/contexts/TranslationContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Global Transport and Logistics | DSV",
  description: "Global transport and logistics - road, air, sea, rail freight and warehousing. Contact us today.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <TranslationProvider>
          <Header />
          <main className="pt-[80px]">{children}</main>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
