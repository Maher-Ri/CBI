"use client";

import { useRef } from "react";
import Image from "next/image";
import { getImageUrl } from "@/app/utils/getImageUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";

export default function SwiperSection({ data }) {
  const isDev = process.env.NODE_ENV === "development";
  const swiperData = data.slides || [];
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full min-h-[300px]">
      {/* Custom Prev Button */}
      <button
        ref={prevRef}
        className="absolute overflow-hidden left-[5%] top-[90%] md:top-1/2 -translate-y-1/2 z-20 flex items-center justify-center border-[2px] border-mainBlue rounded-lg p-3 md:p-5 my-gradient-box2"
      >
        <Image
          src="/assets/arrow-left-blue.svg"
          width={16}
          height={16}
          alt="<"
          className="w-[12px] md:w-[16px] h-auto"
        />
      </button>

      {/* Custom Next Button */}
      <button
        ref={nextRef}
        className="absolute overflow-hidden right-[5%] top-[90%] md:top-1/2 -translate-y-1/2 z-20 flex items-center justify-center border-[2px] border-mainBlue rounded-lg p-3 md:p-5 my-gradient-box2"
      >
        <Image
          src="/assets/arrow-right-blue.svg"
          width={16}
          height={16}
          alt=">"
          className="w-[12px] md:w-[16px] h-auto"
        />
      </button>

      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={false}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={20}
        slidesPerView={1}
        speed={2000}
      >
        {swiperData.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full">
            <div className="relative w-full h-[400px] md:h-[615px] 2xl:h-[700px] text-left">
              <Image
                src={getImageUrl(slide.image.url)}
                alt={slide.title}
                fill
                unoptimized={isDev}
                className="object-none md:object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center text-mainBlue gap-8 px-[15%]">
                <h2 className=" text-2xl md:text-3xl lg:text-[57px] lg:leading-[70px] font-extrabold">
                  {slide.title}
                  <br />
                  <span className="font-medium">{slide.subtitle}</span>
                </h2>
                <p className="text-base md:text-xl lg:text-3xl md:max-w-[70%]">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
