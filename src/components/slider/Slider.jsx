"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

// import required modules

export default function App() {
  return (
    <div className="mt-5 h-[400px] bg-[#fbf9f3] overflow-hidden">
      <div className="container mx-auto ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-[500px] relative bottom-10">
              <Image
                src={"/assets/slider-image/sliderImage1.svg"}
                alt="slider-image1"
                fill
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[500px] relative bottom-10">
              <Image
                src={"/assets/slider-image/sliderImage2.svg"}
                alt="slider-image1"
                fill
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[500px] relative bottom-10">
              <Image
                src={"/assets/slider-image/sliderImage3.svg"}
                alt="slider-image1"
                fill
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[500px] relative bottom-10">
              <Image
                src={"/assets/slider-image/sliderImage4.svg"}
                alt="slider-image1"
                fill
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
