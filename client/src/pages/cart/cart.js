import Button from "@mui/material/Button";
import CouponImg from "../../assets/images/coupon-img.png";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { styled } from "@mui/material";
import QuantityBox from "../../components/quantityBox/quantityBox";
import { FaTrashAlt } from "react-icons/fa";

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

const Cart = () => {
  const breadcrumbs = [
    <Link key="1" to="/">
      Trang chủ
    </Link>,
    <Typography key="2">Giỏ hàng</Typography>,
  ];
  return (
    <>
      <section className="cart-wrapper">
        <div className="container">
          <CustomBreadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </CustomBreadcrumbs>

          <div className="row cart-info">
            <p className="fs-6 mb-3">
              Có <b className="text-success fs-5">3</b> sản phẩm trong giỏ hàng
              của bạn
            </p>
            <div className="col-lg-8">
              <div className="table-responisve">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Sản phẩm</th>
                      <th scope="col">Giá</th>
                      <th scope="col">Số lượng</th>
                      <th scope="col">Tạm tính</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Link to="#" className="img-link-product">
                          <img
                            src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg"
                            alt="product"
                            className="img-fluid"
                          />
                        </Link>
                      </td>
                      <td>
                        <Link to="#" className="text-black link-product-name">
                          Kẹo cứng Caramel nguyên bản của Werther
                        </Link>
                      </td>
                      <td>99.000đ</td>
                      <td>
                        <QuantityBox />
                      </td>
                      <td>198.000đ</td>
                      <td>
                        <Button>
                          <FaTrashAlt />
                        </Button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <Link to="#" className="img-link-product">
                          <img
                            src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg"
                            alt="product"
                            className="img-fluid"
                          />
                        </Link>
                      </td>
                      <td>
                        <Link to="#" className="text-black link-product-name">
                          Kẹo cứng Caramel nguyên bản của Werther
                        </Link>
                      </td>
                      <td>99.000đ</td>
                      <td>
                        <QuantityBox />
                      </td>
                      <td>198.000đ</td>
                      <td>
                        <Button>
                          <FaTrashAlt />
                        </Button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <Link to="#" className="img-link-product">
                          <img
                            src="https://754969b0.rocketcdn.me/bacola/wp-content/uploads/2021/04/product-image-60-346x310.jpg"
                            alt="product"
                            className="img-fluid"
                          />
                        </Link>
                      </td>
                      <td>
                        <Link to="#" className="text-black link-product-name">
                          Kẹo cứng Caramel nguyên bản của Werther
                        </Link>
                      </td>
                      <td>99.000đ</td>
                      <td>
                        <QuantityBox />
                      </td>
                      <td>198.000đ</td>
                      <td>
                        <Button>
                          <FaTrashAlt />
                        </Button>
                      </td>
                    </tr>

                    <tr>
                      <td colSpan="6" className="actions">
                        <div className="actions-wrapper d-flex align-items-center justify-content-between">
                          <div className="coupon">
                            <input type="text" placeholder="Mã giảm giá" />
                            <Button className="btn-actions ms-3">
                              Áp dụng
                            </Button>
                          </div>

                          <Button className="btn-actions">Xoá tất cả</Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart_totals">
                <h3>Tổng tiền</h3>

                <div className="d-flex align-items-center pt-1 pb-3">
                  <span>
                    <b>Tạm tính</b>
                  </span>
                  <span className="ms-auto">198.000đ</span>
                </div>

                <div
                  className="d-flex align-items-center py-3"
                  style={{
                    borderTop: "1px solid #d9d9e9",
                    borderBottom: "1px solid #d9d9e9",
                  }}
                >
                  <span>
                    <b>Vận chuyển</b>
                  </span>
                  <div
                    className="d-flex flex-column ms-auto"
                    style={{ width: "65%" }}
                  >
                    <p>
                      Địa chỉ:
                      <b>Xóm Đồng Thịnh, Nghĩa Lạc, Nghĩa Hưng, Nam Định</b>
                    </p>
                  </div>
                </div>

                <div
                  className="d-flex align-items-center py-3"
                  style={{
                    borderBottom: "1px solid #d9d9e9",
                  }}
                >
                  <span>
                    <b>Tổng tiền</b>
                  </span>
                  <span className="ms-auto fw-bold fs-6">198.000đ</span>
                </div>

                <Button className="btn-checkout mt-4">
                  Tiến hành thanh toán
                </Button>
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

export default Cart;
