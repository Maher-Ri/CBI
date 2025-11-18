import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation } from "swiper/modules";

import "swiper/css"; // ONLY this one!
import business from "../../assets/business-logo.svg";
import arrowLeft from "../../assets/arrow-left-white.svg";
import arrowRight from "../../assets/arrow-right-white.svg";
import { Link } from "react-router-dom";
export default function Clients() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full py-16 lg:py-24 bg-cover bg-center bg-no-repeat clients-section">
      <div className="text-white px-[5%] lg:px-[15%] text-start">
        <div className="flex flex-row items-end justify-start gap-4 md:gap-6">
          <h2 className="text-2xl lg:text-[57px] lg:leading-[57px] font-extrabold flex-shrink-0">
            Clients
          </h2>
          <p className="border-b-2 border-white w-full flex-grow mb-[4px]"></p>
          {/* Custom Prev Button */}
          <button
            ref={prevRef}
            className=" flex items-center justify-center border-[2px] border-white rounded-lg p-3 md:p-5 my-gradient-box mb-[4px] flex-shrink-0"
          >
            <img src={arrowLeft} alt="<" className="w-[12px] md:w-[16px]" />
          </button>

          {/* Custom Next Button */}
          <button
            ref={nextRef}
            className=" flex items-center justify-center border-[2px] border-white rounded-lg p-3 md:p-5 my-gradient-box mb-[4px] flex-shrink-0"
          >
            <img src={arrowRight} alt=">" className="w-[12px] md:w-[16px] " />
          </button>
        </div>
        <p className="text-lg md:text-3xl w-full xl:w-[60%] my-8">
          Nous travaillons en partenariat avec plus 20 clients, dont 15 marques
          internationales
        </p>
      </div>
      <div className="ml-[5%] lg:ml-[15%]">
        <Swiper
          modules={[Autoplay,Navigation]}
          navigation={false}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            // Connect custom buttons
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
          <SwiperSlide className="h-full">
            <Link
              to="#"
              className="inset-0 flex flex-col items-center justify-center text-white gap-4 border-2 border-white rounded-2xl px-4 py-8 sm:py-16 my-gradient-box"
            >
              <img src={business} alt="Business Logo" className="w-[46px]" />
              <h3 className=" text-xl md:text-2xl lg:text-3xl font-bold">
                Business Name
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <Link
              to="#"
              className="inset-0 flex flex-col items-center justify-center text-white gap-4 border-2 border-white rounded-2xl px-4 py-8 sm:py-16 my-gradient-box"
            >
              <img src={business} alt="Business Logo" className="w-[46px]" />
              <h3 className=" text-xl md:text-2xl lg:text-3xl font-bold">
                Business Name
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <Link
              to="#"
              className="inset-0 flex flex-col items-center justify-center text-white gap-4 border-2 border-white rounded-2xl px-4 py-8 sm:py-16 my-gradient-box"
            >
              <img src={business} alt="Business Logo" className="w-[46px]" />
              <h3 className=" text-xl md:text-2xl lg:text-3xl font-bold">
                Business Name
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <Link
              to="#"
              className="inset-0 flex flex-col items-center justify-center text-white gap-4 border-2 border-white rounded-2xl px-4 py-8 sm:py-16 my-gradient-box"
            >
              <img src={business} alt="Business Logo" className="w-[46px]" />
              <h3 className=" text-xl md:text-2xl lg:text-3xl font-bold">
                Business Name
              </h3>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <Link
              to="#"
              className="inset-0 flex flex-col items-center justify-center text-white gap-4 border-2 border-white rounded-2xl px-4 py-8 sm:py-16 my-gradient-box"
            >
              <img src={business} alt="Business Logo" className="w-[46px]" />
              <h3 className=" text-xl md:text-2xl lg:text-3xl font-bold">
                Business Name
              </h3>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
