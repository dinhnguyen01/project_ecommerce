import Dialog from "@mui/material/Dialog";
import { IoClose } from "react-icons/io5";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { HiArrowsUpDown } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import QuantityBox from "../quantityBox/quantityBox";
import { MyContext } from "../../App";

import "swiper/css";
import ProductZoom from "../productZoom/productZoom";

const ProductModal = () => {
  const context = useContext(MyContext);

  return (
    <>
      <Dialog
        className="product-modal"
        open={true}
        onClose={() => context.setIsOpenProductModal(false)}
        fullWidth={true}
        maxWidth="md"
      >
        <Button
          className="modal_close"
          onClick={() => context.setIsOpenProductModal(false)}
        >
          <IoClose />
        </Button>
        <div className="modal_product-header">
          <h3 className="mb-3 product-name">
            Bỏng Ngô Ngọt và Mặn Angie's Boomchickapop
          </h3>
          <div className="d-flex align-items-center">
            <div className="product-brand d-flex align-items-center me-3 pe-3">
              <span>Thuơng hiệu: </span>
              <span className="ms-2">
                <b>Frito Lay, Oreo, Welch's</b>
              </span>
            </div>

            <div className="product-rating d-flex align-items-center me-3 pe-3">
              <Rating
                name="read-only"
                value={5}
                readOnly
                size="small"
                precision={0.5}
              />
              <Link to="#" className="ms-2">
                10 đánh giá
              </Link>
            </div>

            <div className="product-code d-flex align-items-center">
              <span>Mã sản phẩm:</span>
              <span className="ms-2">
                <b>BE4CURT</b>
              </span>
            </div>
          </div>
        </div>

        <div className="product-wrapper row gx-5">
          <div className="col-md-5 product-thumbnails">
            <ProductZoom />
          </div>
          <div className="col-md-7 product-details">
            <div className="product-price d-flex align-items-center">
              <span className="old-price me-2">139.000đ</span>
              <span className="net-price">99.000đ</span>
            </div>
            <div className="product-meta">
              <span className="text-uppercase instock">Còn hàng</span>
            </div>
            <div className="product-short-description">
              <p>
                Sản phẩm chất lượng được cung cấp bởi thương hiệu uy tín trên
                thế giới, đảm bảo an toàn thực thẩm mua ngay thôi, bấm nút thêm
                vào giỏ hàng ngay nào
              </p>
            </div>
            <div
              className="d-flex align-items-center"
              style={{ marginBottom: "40px" }}
            >
              <QuantityBox />
              <Button className="btn-add-cart">Thêm vào giỏ hàng</Button>
            </div>
            <div className="product-action d-flex align-items-center ">
              <Button className="btn-wishlist d-flex align-items-center">
                <CiHeart />
                Yêu thích
              </Button>
              <Button className="btn-compare d-flex align-items-center">
                <HiArrowsUpDown />
                So sánh
              </Button>
            </div>

            <div className="product-checklist">
              <ul>
                <li>
                  <FaCheck /> Loại: Hữu cơ
                </li>
                <li>
                  <FaCheck /> Ngày sản xuất: 04/06/2021
                </li>
                <li>
                  <FaCheck /> Hạn sử dụng: 70 ngày kể từ ngày sản xuất
                </li>
              </ul>
            </div>

            <div className="product-cat d-flex align-items-center">
              <p>Danh mục:</p>
              <span>Bánh quy & đồ ăn nhẹ</span>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
