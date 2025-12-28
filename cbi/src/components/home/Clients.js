"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { getImageUrl } from "@/app/utils/getImageUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import Link from "next/link";

export default function Clients(data) {
  const clientsData = data.data;
  const isDev = process.env.NODE_ENV === "development";
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      style={{
        backgroundImage: `url( ${getImageUrl(clientsData.bgImage.url)}`,
      }}
      className="relative w-full py-16 lg:py-24 bg-cover bg-center bg-no-repeat"
    >
      <div className="text-white px-[5%] lg:px-[15%] text-start">
        <div className="flex flex-row items-end justify-start gap-4 md:gap-6">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-yellow text-2xl lg:text-[57px] lg:leading-[57px] font-extrabold flex-shrink-0 uppercase"
          >
            {clientsData.title}
          </motion.h2>
          <p className="border-b-2 border-yellow mb-[4px] w-full flex-grow"></p>
          {/* Custom Prev Button */}
          <button
            ref={prevRef}
            className=" flex items-center justify-center border-[2px] border-yellow rounded-lg p-3 md:p-5 my-gradient-box mb-[4px] flex-shrink-0"
          >
            <Image
              src="/assets/arrow-left-yellow.svg"
              width={18}
              height={15}
              alt="<"
              className="w-[12px] md:w-[16px] h-auto"
            />
          </button>

          {/* Custom Next Button */}
          <button
            ref={nextRef}
            className=" flex items-center justify-center border-[2px] border-yellow rounded-lg p-3 md:p-5 my-gradient-box mb-[4px] flex-shrink-0"
          >
            <Image
              src="/assets/arrow-right-yellow.svg"
              width={18}
              height={15}
              alt=">"
              className="w-[12px] md:w-[16px] h-auto"
            />
          </button>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
          className="text-lg md:text-3xl w-full xl:w-[75%] my-8"
        >
          {clientsData.subtitle}
        </motion.p>
      </div>
      <div className="ml-[5%] lg:ml-[15%]">
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={false}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={30}
          slidesPerView={2.725}
          breakpoints={{
            992: {
              slidesPerView: 2.725, // lg screen
            },

            300: {
              slidesPerView: 1.5, // tablets
            },
          }}
        >
          {clientsData.clients.map((client) => (
            <SwiperSlide className="h-full" key={client.id}>
              <Link
                href="#"
                className="inset-0 flex flex-col items-center justify-center text-white gap-4 border-2 border-yellow rounded-2xl px-4 py-8 sm:py-16 my-gradient-box"
              >
                <Image
                  src={getImageUrl(client.image.url)}
                  alt={client.title}
                  unoptimized={isDev}
                  width={46}
                  height={46}
                  className="w-[46px] h-auto"
                />
                <h3 className="text-yellow text-xl md:text-2xl lg:text-3xl font-bold">
                  {client.title}
                </h3>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
