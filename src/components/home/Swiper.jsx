import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css"; // ONLY this one!

import img from "../../assets/slide1.png";
import arrowLeft from "../../assets/arrow-left-blue.svg";
import arrowRight from "../../assets/aroow-right-blue.svg";
export default function CustomSwiper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full  min-h-[300px]">
      {/* Custom Prev Button */}
      <button
        ref={prevRef}
        className="absolute  left-[5%] top-[90%] md:top-1/2 -translate-y-1/2 z-20 flex items-center justify-center border-[2px] border-mainBlue rounded-lg p-3 md:p-5 shadow bg-gradient-to-tr from-white/0 to-white/0
     hover:bg-gradient-to-tr hover:from-mainBlue/80 hover:via-gray hover:to-[#555]
    transition-all duration-300 "
      >
        <img src={arrowLeft} alt="<" className="w-[12px] md:w-[16px]"/>
      </button>

      {/* Custom Next Button */}
      <button
        ref={nextRef}
        className="absolute right-[5%] top-[90%] md:top-1/2 -translate-y-1/2 z-20 flex items-center justify-center border-[2px] border-mainBlue rounded-lg p-3 md:p-5 shadow bg-gradient-to-tr from-white/0 to-white/0
    hover:bg-gradient-to-tr hover:from-mainBlue/80 hover:via-[gray] hover:to-[#555]
    transition-all duration-300"
      >
        <img src={arrowRight} alt=">" className="w-[12px] md:w-[16px]"/>
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={false}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        onSwiper={(swiper) => {
          // Connect custom buttons
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide className="h-full">
          <div className="relative w-full h-full text-left">
            <img src={img} alt="Slide" className=" h-[400px] md:w-full md:h-auto  object-none md:object-cover" />

            <div className="absolute inset-0 flex flex-col items-start justify-center text-mainBlue gap-8 px-[15%]">
              <h2 className=" text-xl md:text-2xl lg:text-[57px] lg:leading-[70px] font-extrabold">
                MARKET TREND ANALYSIS
                <br />
                <span className="font-medium">FOR A RETAIL LEADER</span>
              </h2>
              <p className="text-base md:text-xl lg:text-3xl md:max-w-[70%]">
                Comprehensive market analysis helping identify growth
                opportunities and consumer behavior patterns.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="relative w-full h-full text-left">
            <img src={img} alt="Slide" className=" h-[400px] md:w-full md:h-auto  object-none md:object-cover" />

            <div className="absolute inset-0 flex flex-col items-start justify-center text-mainBlue gap-8 px-[15%]">
              <h2 className=" text-xl md:text-2xl lg:text-[57px] lg:leading-[70px] font-extrabold">
                MARKET TREND ANALYSIS
                <br />
                <span className="font-medium">FOR A RETAIL LEADER</span>
              </h2>
              <p className="text-base md:text-xl lg:text-3xl md:max-w-[70%]">
                Comprehensive market analysis helping identify growth
                opportunities and consumer behavior patterns.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div className="relative w-full h-full text-left">
            <img src={img} alt="Slide" className=" h-[400px] md:w-full md:h-auto  object-none md:object-cover" />

            <div className="absolute inset-0 flex flex-col items-start justify-center text-mainBlue gap-8 px-[15%]">
              <h2 className=" text-xl md:text-2xl lg:text-[57px] lg:leading-[70px] font-extrabold">
                MARKET TREND ANALYSIS
                <br />
                <span className="font-medium">FOR A RETAIL LEADER</span>
              </h2>
              <p className="text-base md:text-xl lg:text-3xl md:max-w-[70%]">
                Comprehensive market analysis helping identify growth
                opportunities and consumer behavior patterns.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
