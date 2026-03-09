import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Noto_Sans_KR } from 'next/font/google';
import "./globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Chefs from "./components/Chefs";
import Brands from "./components/Brands";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "COOC",
  description: "CO-create with Our Chefs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={notoSansKr.className}> */}
      <body className="font-sans">
      {/* {children} */}
        <Header />
        <main>
          <Hero />
          <Services />
          <Chefs />
          <Brands />
          <Process />
          <Portfolio />
          <Contact />
        </main>
        <Footer />

      </body>
    </html>
  );
}
