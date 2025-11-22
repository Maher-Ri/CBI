import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import SwiperSection from "../components/home/Swiper";
import Footer from "../components/layout/Footer";
import Clients from "../components/home/Clients";

export default function Home() {
  useEffect(() => {
    document.title = "Home • CBI Project";
  }, []);

  return (
    <div className="home-page font-sans text-gray-900 leading-relaxed bg-mainBlue">
      <Hero />
      <Services />
      <SwiperSection />
      <Clients />
      <Footer />
    </div>
  );
}
