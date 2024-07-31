import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const HomeCategory = () => {
  const [itemBg, setItemBg] = useState([
    "#F2FCE4",
    "#FFFCEB",
    "#ECFFEC",
    "#FEEFEA",
    "#FFF3EB",
    "#FFF3FF",
    "#F2FCE4",
    "#FEEFEA",
    "#FFFCEB",
    "#FEEFEA",
    "#ECFFEC",
    "#FFF3FF",
    "#F2FCE4",
    "#FEEFEA",
    "#FFFCEB",
    "#FEEFEA",
  ]);

  return (
    <>
      <section className="home_category">
        <div className="container">
          <h3 className="category-heading text-uppercase fs-4 mb-3">
            Danh mục nổi bật
          </h3>

          <Swiper
            slidesPerView={8}
            spaceBetween={20}
            navigation={true}
            slidesPerGroup={1}
            modules={[Navigation]}
            className="mySwiper"
          >
            {itemBg?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="category-item" style={{ background: item }}>
                    <img
                      src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-12.png"
                      alt="category"
                      draggable="false"
                    />

                    <p className="category-name">Trái cây</p>
                    <p className="count-item">26 sản phẩm</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default HomeCategory;
