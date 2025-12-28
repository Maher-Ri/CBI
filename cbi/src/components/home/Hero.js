"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // 1. Import Image
import { getImageUrl } from "@/app/utils/getImageUrl"; // 2. Import the helper

export default function Hero(data) {
  const heroData = data.data;
  const isDev = process.env.NODE_ENV === "development";
  // 3. Get the safe URL
  const imageUrl = getImageUrl(heroData.image?.url);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1.5 }}
      className="relative w-full h-screen lg:min-h-[115vh] px-[5%] xl:px-0 flex flex-col items-start justify-end overflow-hidden"
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Hero Background"
          fill // This makes it act like background-image
          priority // ⚡ This fixes the LCP Performance Score
          unoptimized={isDev}
          className="object-cover object-bottom -z-10"
        />
      )}

      {/* Content Container (Added relative z-10 to stay on top of image) */}
      <div className="relative z-10 text-start text-white pb-16 lg:pb-0 xl:pl-[15%] lg:max-w-[1070px] flex flex-col items-start justify-start gap-8 lg:gap-16">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          className="text-yellow text-2xl md:text-4xl lg:text-[57px] lg:leading-[64px] font-extrabold"
        >
          {heroData.boldTitle}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            className="text-white font-medium"
          >
            {heroData.lightTitle}
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
          className="text-lg md:text-xl lg:text-3xl"
        >
          {heroData.subtitle}
        </motion.p>
        <a
          href={heroData.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 text-lg lg:text-2xl font-medium uppercase rounded-lg text-yellow hover:text-mainBlue focus:outline-none border-2 border-yellow myBtn"
        >
          <span className="relative z-10">{heroData.ctaText}</span>
        </a>
      </div>
    </motion.section>
  );
}
