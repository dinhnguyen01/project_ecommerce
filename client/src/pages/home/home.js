import React from "react";
import HomeBanner from "../../components/homeBanner/homeBanner";
import Button from "@mui/material/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductItem from "../../components/productItem/productItem";
import HomeCategory from "../../components/homeCategory/homeCategory";
import CouponImg from "../../assets/images/coupon-img.png";
import { TfiEmail } from "react-icons/tfi";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCategory />

      <section className="home_products">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner position-relative">
                <div className="banner-img">
                  <img
                    alt="banner"
                    src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/banner-box.jpg"
                    className="cursor w-100"
                    draggable="false"
                  />
                </div>
                <div className="banner_content position-absolute">
                  <div className="content-header mb-3">
                    <div className="text-white">
                      Thực phẩm tự nhiên Happy Field
                    </div>
                  </div>
                  <div className="content-main">
                    <h4>Nguyên Liệu Hữu Cơ</h4>
                    <h3>Bánh Nướng</h3>
                  </div>
                  <div className="content-footer">
                    <span className="price-text">Chỉ từ</span>
                    <span className="price">199k</span>
                  </div>
                </div>
              </div>

              <div className="banner position-relative">
                <div className="banner-img">
                  <img
                    alt="banner"
                    src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg"
                    className="cursor w-100"
                    draggable="false"
                  />
                </div>
                <div className="banner_content position-absolute">
                  <div className="content-header mb-3">
                    <div className="text-black">
                      Thực phẩm tự nhiên Happy Field
                    </div>
                  </div>
                  <div className="content-main">
                    <h4>Nguyên Liệu Hữu Cơ</h4>
                    <h3>Bánh Nướng</h3>
                  </div>
                  <div className="content-footer">
                    <span className="price-text">Chỉ từ</span>
                    <span className="price">199k</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="d-flex align-items-center">
                <div className="info">
                  <h3 className="mb-1 text-uppercase">Bán chạy nhất</h3>
                  <p className="text-sub text-sml mb-0">
                    Đừng bỏ lỡ các ưu đãi hiện tại cho đến cuối tháng 8.
                  </p>
                </div>

                <Button className="view-all_btn ms-auto">
                  Xem tất cả <FaArrowRightLong />
                </Button>
              </div>

              <div className="seller-product product_row mt-3">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={16}
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-items-center mt-5">
                <div className="info">
                  <h3 className="mb-1 text-uppercase">Sản phẩm mới</h3>
                  <p className="text-sub text-sml mb-0">
                    Sản phẩm mới nhập từ kho về
                  </p>
                </div>

                <Button className="view-all_btn ms-auto">
                  Xem tất cả <FaArrowRightLong />
                </Button>
              </div>

              <div className="new-product row g-3 product_row mt-2">
                <div className="col-md-3">
                  <ProductItem />
                </div>
                <div className="col-md-3">
                  <ProductItem />
                </div>
                <div className="col-md-3">
                  <ProductItem />
                </div>
                <div className="col-md-3">
                  <ProductItem />
                </div>
                <div className="col-md-3">
                  <ProductItem />
                </div>
                <div className="col-md-3">
                  <ProductItem />
                </div>
                <div className="col-md-3">
                  <ProductItem />
                </div>
                <div className="col-md-3">
                  <ProductItem />
                </div>
              </div>

              <div className="banner_sale-products mt-4">
                <div className="row">
                  <div className="col-lg-6 banner-item position-relative">
                    <img
                      alt="banner"
                      src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/08/bacola-banner-01.jpg"
                      className="img-fluid"
                      draggable="false"
                    />

                    <div className="banner-details position-absolute">
                      <div className="banner-header mb-3">
                        <p>Giảm giá 40% vào cuối tuần</p>
                      </div>
                      <div className="banner-main">
                        <h3>Đậu & Ngũ cốc</h3>
                        <span>Món ngon dành cho gia đình bạn</span>
                        <Button>Mua Ngay</Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 banner-item position-relative">
                    <img
                      alt="banner"
                      src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/08/bacola-banner-02.jpg"
                      className="img-fluid"
                      draggable="false"
                    />

                    <div className="banner-details position-absolute">
                      <div className="banner-header mb-3">
                        <p>Giảm giá 40% vào cuối tuần</p>
                      </div>
                      <div className="banner-main">
                        <h3>Sữa & Trứng</h3>
                        <span>Món ngon dành cho gia đình bạn</span>
                        <Button>Mua Ngay</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-letters-section mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-start flex-column justify-content-center pt-5 pb-5">
              <p className="text-white mb-2 fs-6">
                Giảm giá 100.000đ cho đơn hàng đầu tiên của bạn
              </p>
              <h4 className="text-white text-uppercase mb-3 fw-bold">
                Để lại gmail của bạn
              </h4>
              <p className="text-light w-75">
                Tham gia ngay ngay để nhận cập nhật về các chương trình khuyến
                mãi và phiếu giảm giá.
              </p>

              <form action="" className="sub-form mt-4">
                <TfiEmail />
                <input type="text" placeholder="Nhập email của bạn" />
                <Button>Đăng kí</Button>
              </form>
            </div>
            <div className="col-md-6 d-flex align-items-end">
              <img src={CouponImg} alt="img" draggable="false" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
