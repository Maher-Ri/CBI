"use client";
import { motion } from "framer-motion";
import { getImageUrl } from "@/app/utils/getImageUrl";
import Image from "next/image";

export default function CoverImage({ data }) {
  const isDev = process.env.NODE_ENV === "development";
  return (
    <section className="w-full h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-screen"
      >
        <Image
          src={getImageUrl(data.image.url)}
          alt={data.image.alternativeText}
          width={1440}
          height={667}
          unoptimized={isDev}
          priority
          className="w-full h-[100%] object-cover"
        />
      </motion.div>
    </section>
  );
}
