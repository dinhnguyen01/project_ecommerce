import React from "react";
import banner_01 from "../../assets/images/banner/banner-01.jpg";
import banner_02 from "../../assets/images/banner/banner-02.jpg";
import banner_03 from "../../assets/images/banner/banner-03.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

const HomeBanner = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="home_banner-section">
          <Swiper
            navigation={true}
            modules={[Autoplay, Navigation]}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="item">
                <img
                  src={banner_01}
                  alt="banner"
                  className="w-100"
                  draggable="false"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <img
                  src={banner_02}
                  alt="banner"
                  className="w-100"
                  draggable="false"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <img
                  src={banner_03}
                  alt="banner"
                  className="w-100"
                  draggable="false"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
