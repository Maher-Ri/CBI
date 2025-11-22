import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css"; // ONLY this one!

import arrowLeft from "../../assets/arrow-left-blue.svg";
import arrowRight from "../../assets/arrow-right-blue.svg";

export default function SwiperSection(data) {
  const base = process.env.REACT_APP_STRAPI_URL;
  const swiperData = data.data.slides;
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full  min-h-[300px]">
      {/* Custom Prev Button */}
      <button
        ref={prevRef}
        className="absolute overflow-hidden left-[5%] top-[90%] md:top-1/2 -translate-y-1/2 z-20 flex items-center justify-center border-[2px] border-mainBlue rounded-lg p-3 md:p-5 my-gradient-box2"
      >
        <img src={arrowLeft} alt="<" className="w-[12px] md:w-[16px]" />
      </button>

      {/* Custom Next Button */}
      <button
        ref={nextRef}
        className="absolute overflow-hidden right-[5%] top-[90%] md:top-1/2 -translate-y-1/2 z-20 flex items-center justify-center border-[2px] border-mainBlue rounded-lg p-3 md:p-5 my-gradient-box2"
      >
        <img src={arrowRight} alt=">" className="w-[12px] md:w-[16px]" />
      </button>

      <Swiper
        modules={[Autoplay, Navigation]}
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
        spaceBetween={20}
        slidesPerView={1}
      >
        {swiperData.map((slide) => (
        <SwiperSlide className="h-full" key={slide.id}>
          <div className="relative w-full h-full text-left ">
            <img
              src={`${base}${slide.image.url}`}
              alt={slide.title}
              className=" h-[400px] w-full md:h-[600px] 2xl:h-auto object-none md:object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-start justify-center text-mainBlue gap-8 px-[15%]">
              <h2 className=" text-xl md:text-2xl lg:text-[57px] lg:leading-[70px] font-extrabold">
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
