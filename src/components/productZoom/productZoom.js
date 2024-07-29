import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import InnerImageZoom from "react-inner-image-zoom";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderBig.current.swiper.slideTo(index);
    zoomSlider.current.swiper.slideTo(index);
  };

  return (
    <>
      <div className="product-zoom position-relative">
        <div className="product-badges">
          <span className="badge">24%</span>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={false}
          slidesPerGroup={1}
          className="zoom-slider-big"
          ref={zoomSliderBig}
        >
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60.jpg`}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-46.jpg`}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-34.jpg`}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={false}
        slidesPerGroup={1}
        className="zoom-slider"
        ref={zoomSlider}
      >
        <SwiperSlide>
          <div className={`item ${slideIndex === 0 && "item_active"}`}>
            <img
              src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-60.jpg`}
              alt="proimg"
              className="img-fluid"
              draggable="false"
              onClick={() => goto(0)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 1 && "item_active"}`}>
            <img
              src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-46.jpg`}
              alt="proimg"
              className="img-fluid"
              draggable="false"
              onClick={() => goto(1)}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 2 && "item_active"}`}>
            <img
              src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-34.jpg`}
              alt="proimg"
              className="img-fluid"
              draggable="false"
              onClick={() => goto(2)}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductZoom;
