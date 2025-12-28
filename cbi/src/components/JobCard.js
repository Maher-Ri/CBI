"use client";
import { motion } from "framer-motion";
export default function JobCard({ data }) {
  return (
    <motion.a
      href="/CBI"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3 }}
      className="group relative block mx-[5%] px-[10%] py-8 md:py-12 overflow-hidden rounded-2xl bg-[#586775] border-2 border-yellow transition duration-500"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-yellow/50 via-gray/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
      <div className="flex flex-col gap-2">
        <h3 className="text-yellow font-bold uppercase text-lg md:text-2xl lg:text-3xl">
          {data?.title}
        </h3>
        <p className="text-white font-medium uppercase text-lg md:text-2xl lg:text-3xl">
          {data?.description}
        </p>
      </div>
    </motion.a>
  );
}
