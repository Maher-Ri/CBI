"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { getImageUrl } from "@/app/utils/getImageUrl";

export default function ServiceCard({ service, index }) {
  const isDev = process.env.NODE_ENV === "development";
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-start justify-start border-2 border-yellow rounded-lg px-8 py-12 hover:shadow-yellow/20 hover:shadow-lg bg-gradient-to-tr from-[#586775] via-[#586775]/70 to-transparent transition-shadow duration-300"
    >
      <Image
        src={getImageUrl(service.image.url)}
        alt={service.title}
        width={60}
        height={60}
        unoptimized={isDev}
        className="mb-8"
      />
      <h3 className="text-xl md:text-3xl font-bold uppercase text-yellow mb-2">
        {service.title}
      </h3>
      <p className="text-lg md:text-[28px] md:leading-8 text-white">
        {service.description}
      </p>
    </motion.div>
  );
}
