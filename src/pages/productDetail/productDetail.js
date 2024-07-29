import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { CiHeart } from "react-icons/ci";
import { HiArrowsUpDown } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";
import QuantityBox from "../../components/quantityBox/quantityBox";
import ProductZoom from "../../components/productZoom/productZoom";
import { FaShippingFast } from "react-icons/fa";
import { SiCodefresh } from "react-icons/si";
import { AiOutlineDollar } from "react-icons/ai";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import avt from "../../assets/images/avt.png";
import ProductItem from "../../components/productItem/productItem";
import CouponImg from "../../assets/images/coupon-img.png";
import { TfiEmail } from "react-icons/tfi";

const CustomBreadcrumbs = styled(Breadcrumbs)({
  padding: "24px 0px",
  fontSize: "14px",
  "& a": {
    color: "#000",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  "& .MuiTypography-root": {
    fontSize: "14px",
  },
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)({
  "&.Mui-selected": {
    color: "#00B853",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "transparent",
  },
});

const CustomTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#00B853",
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductDetail = () => {
  const breadcrumbs = [
    <Link key="1" to="/">
      Trang chủ
    </Link>,
    <Link key="2" to="/cat/:id">
      Bánh quy & đồ ăn nhẹ
    </Link>,
    <Typography key="3">Danh mục</Typography>,
  ];

  const [activeSize, setActiveSize] = useState(null);

  const isActive = (index) => {
    setActiveSize(index);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section className="product-details-wrapper">
        <div className="container">
          <CustomBreadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </CustomBreadcrumbs>

          <div className="product-info position-relative">
            <div style={{ marginBottom: "50px" }}>
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
              <div className="col-lg-5 product-thumbnails">
                <ProductZoom />
              </div>
              <div className="col-lg-7 product-details">
                <div className="product-price d-flex align-items-center">
                  <span className="old-price me-2">139.000đ</span>
                  <span className="net-price">99.000đ</span>
                </div>
                <div className="product-meta">
                  <span className="text-uppercase instock">Còn hàng</span>
                </div>
                <div className="product-short-description">
                  <p>
                    Sản phẩm chất lượng được cung cấp bởi thương hiệu uy tín
                    trên thế giới, đảm bảo an toàn thực thẩm mua ngay thôi, bấm
                    nút thêm vào giỏ hàng ngay nào
                  </p>
                </div>

                <div className="product-size d-flex align-items-center">
                  <span>Kích thước/ Trọng lượng:</span>
                  <ul className="list list-inline mb-0 ps-4">
                    <li className="list-inline-item">
                      <Link
                        to="#"
                        className={`tag ${activeSize === 0 ? "active" : ""}`}
                        onClick={() => isActive(0)}
                      >
                        50g
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to="#"
                        className={`tag ${activeSize === 1 ? "active" : ""}`}
                        onClick={() => isActive(1)}
                      >
                        100g
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to="#"
                        className={`tag ${activeSize === 2 ? "active" : ""}`}
                        onClick={() => isActive(2)}
                      >
                        150g
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to="#"
                        className={`tag ${activeSize === 3 ? "active" : ""}`}
                        onClick={() => isActive(3)}
                      >
                        200g
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to="#"
                        className={`tag ${activeSize === 4 ? "active" : ""}`}
                        onClick={() => isActive(4)}
                      >
                        250g
                      </Link>
                    </li>
                  </ul>
                </div>

                <QuantityBox />

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

                <div className="d-flex align-items-center mt-4">
                  <p className="fw-bold fs-6">Chia sẻ: </p>
                  <ul className="list list-inline ms-3">
                    <li className="list-inline-item">
                      <Link to="#" className="text-primary">
                        <FaFacebook />
                      </Link>
                    </li>
                    <li className="list-inline-item ms-3">
                      <Link to="#" className="text-danger">
                        <FaYoutube />
                      </Link>
                    </li>
                    <li className="list-inline-item ms-3">
                      <Link to="#" className="text-danger-emphasis">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="form-notifycation position-absolute">
              <div className="alert-message">
                Thông báo: Giao hàng toàn quốc
              </div>
              <div className="icon-message">
                <ul>
                  <li>
                    <div className="icon">
                      <FaShippingFast />
                    </div>
                    <div className="message">
                      Miễn phí vận chuyển áp dụng cho tất cả các đơn hàng trên
                      999k
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <SiCodefresh />
                    </div>
                    <div className="message">
                      Đảm bảo 100% nguyên liệu tự nhiên
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <AiOutlineDollar />
                    </div>
                    <div className="message">
                      Trả hàng trong vòng 1 ngày nếu bạn đổi ý
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="tabs-wrapper">
            <div className="tabs-btn">
              <CustomTabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <CustomTab label="Mô tả" {...a11yProps(0)} />
                <CustomTab label="Thông tin bổ sung" {...a11yProps(1)} />
                <CustomTab label="Đánh giá (1)" {...a11yProps(2)} />
              </CustomTabs>
            </div>
            <div className="tabs-content">
              <TabPanel value={value} index={0}>
                <div className="description">
                  <p>
                    Quisque varius diam vel metus mattis, id aliquam diam
                    rhoncus. Proin vitae magna in dui finibus malesuada et at
                    nulla. Morbi elit ex, viverra vitae ante vel, blandit
                    feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo
                    maximus a. Nullam ultricies sodales nunc, in pellentesque
                    lorem mattis quis. Cras imperdiet est in nunc tristique
                    lacinia. Nullam aliquam mauris eu accumsan tincidunt.
                    Suspendisse velit ex, aliquet vel ornare vel, dignissim a
                    tortor.
                  </p>
                  <br />
                  <p>
                    Morbi ut sapien vitae odio accumsan gravida. Morbi vitae
                    erat auctor, eleifend nunc a, lobortis neque. Praesent
                    aliquam dignissim viverra. Maecenas lacus odio, feugiat eu
                    nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien,
                    elementum sit amet eros sit amet, ultricies cursus ipsum.
                    Sed consequat luctus ligula. Curabitur laoreet rhoncus
                    blandit. Aenean vel diam ut arcu pharetra dignissim ut sed
                    leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem
                    orci convallis quam, sit amet consequat nulla felis pharetra
                    lacus. Duis semper erat mauris, sed egestas purus commodo
                    vel.
                  </p>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Thương hiệu</th>
                      <td>Frito Lay, Oreo, Welch's</td>
                    </tr>
                    <tr>
                      <th scope="row">Nguồn gốc</th>
                      <td>Việt Nam</td>
                    </tr>
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className="review">
                  <div className="comment">
                    <h6 className="mb-4">
                      Để đánh giá của bạn về sản phẩm để chúng tôi và mọi người
                      có cái nhìn tổng quan hơn
                    </h6>

                    <div className="comment-list">
                      <div className="comment-item d-flex align-items-start">
                        <div className="avatar">
                          <img src={avt} alt="avt" className="img-fluid" />
                        </div>

                        <div className="comment-text d-flex flex-column justify-content-start">
                          <Rating
                            name="read-only"
                            value={5}
                            readOnly
                            precision={0.5}
                            size="small"
                          />
                          <div className="d-flex align-items-center gap-1">
                            <b>Admin</b>
                            <span className="text-secondary-emphasis">-</span>
                            <p
                              className="text-secondary"
                              style={{
                                fontSize: "12px",
                              }}
                            >
                              29/07/2024
                            </p>
                          </div>
                          <div className="comment-review">
                            <p>
                              Sản phẩm xịn được tuyển chọn chất lượng quốc tế
                              nhanh tay đặt hàng nào !!!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>

          <div className="product-related">
            <h5 className="mb-3 text-uppercase">Sản phẩm liên quan</h5>
            <div className="row g-3">
              <div className="col-lg-3">
                <ProductItem />
              </div>
              <div className="col-lg-3">
                <ProductItem />
              </div>
              <div className="col-lg-3">
                <ProductItem />
              </div>
              <div className="col-lg-3">
                <ProductItem />
              </div>
              <div className="col-lg-3">
                <ProductItem />
              </div>
              <div className="col-lg-3">
                <ProductItem />
              </div>
              <div className="col-lg-3">
                <ProductItem />
              </div>
              <div className="col-lg-3">
                <ProductItem />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="new-letters-section">
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

export default ProductDetail;
