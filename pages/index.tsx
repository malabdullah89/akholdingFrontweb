import Head from "next/head";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import PortfolioSection from "@/sections/PortfolioSection";
import NewsSection from "@/sections/NewsSection";
import InvestmentSection from "@/sections/InvestmentSection";
import ContactUsSection from "@/sections/ContactUsSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function Home() {
  return (
    <>
      <main
        className={`${poppins.className}`}
        style={{
          background: "#fafafa",
        }}
      >
        <SEO />
        <Header />
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <NewsSection />
        <InvestmentSection />
        <ContactUsSection />
        <Footer />
      </main>
    </>
  );
}
