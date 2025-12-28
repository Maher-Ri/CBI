"use client";

import { motion } from "framer-motion";
export default function CarriereHeader({ data }) {
  return (
    <div className="min-h-[60vh] lg:min-h-screen pt-[70px] md:pt-[100px] px-[5%] xl:px-[15%] flex flex-col items-start justify-center gap-8 lg:gap-16">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
        className="text-yellow text-2xl md:text-3xl lg:text-[57px] lg:leading-[64px] font-extrabold"
      >
        {data.title ? (data.title) : "WE’RE HIRING"}
        <br />
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          className="text-white font-medium"
        >
          {data.subTitle ? (data.subTitle) : "BE PART OF OUR MISSION"}
        </motion.span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
        className="text-white text-lg md:text-xl lg:text-3xl lg:max-w-[91%]"
      >
        {data.description ? (data.description) : "We’re looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility."}
      </motion.p>
    </div>
  );
}
