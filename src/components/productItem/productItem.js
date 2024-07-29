import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { MyContext } from "../../App";

const ProductItem = ({ isSingleRow }) => {
  const context = useContext(MyContext);

  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true);
  };

  return (
    <>
      <div
        className={`item product-item ${isSingleRow ? "row one-row g-0" : ""}`}
      >
        <div className={`img-wrapper ${isSingleRow ? "col-md-4" : ""}`}>
          <Link to="/">
            <img
              draggable="false"
              src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg"
              className="w-100"
              alt="product"
            />
          </Link>

          <div className="product-badges">
            <span className="badge">24%</span>
          </div>

          <div className="product-actions">
            <Button onClick={() => viewProductDetails(1)}>
              <SlSizeFullscreen />
            </Button>
            <Button>
              <FaRegHeart />
            </Button>
          </div>
        </div>

        <div className={`content-wrapper ${isSingleRow ? "col-md-8" : ""}`}>
          <h3
            className="product-title"
            title="Kẹo cứng Caramel nguyên bản của Werther"
          >
            <Link to="/">Kẹo cứng Caramel nguyên bản của Werther</Link>
          </h3>
          <div className="product-meta">
            <span className="text-success">Còn Hàng</span>
          </div>
          <div className="product-rating">
            <Rating
              name="read-only"
              value={4}
              readOnly
              size="small"
              precision={0.5}
            />
          </div>
          <div className="product-price">
            <span className="old-price">139.000đ</span>
            <span className="net-price">99.000đ</span>
          </div>

          <div className="product-button">
            <Button className="btn_add-cart">Thêm và giỏ hàng</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
