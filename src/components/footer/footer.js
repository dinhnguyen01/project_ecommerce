import { SiCodefresh } from "react-icons/si";
import { FaShippingFast } from "react-icons/fa";
import { TbRosetteDiscount } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_top-info row">
            <div className="col d-flex align-items-center justify-content-center">
              <span>
                <SiCodefresh />
              </span>
              <span className="ms-2">Sản phẩm tươi mới mỗi ngày</span>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <span>
                <FaShippingFast />
              </span>
              <span className="ms-2">Freeship cho đơn hàng trên 999k</span>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <span>
                <TbRosetteDiscount />
              </span>
              <span className="ms-2">Giảm giá lớn hàng ngày</span>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <span>
                <AiOutlineDollar />
              </span>
              <span className="ms-2">Giá tốt nhất trên thị trường</span>
            </div>
          </div>

          <div className="footer_link-wrapper row mt-5">
            <div className="col">
              <h5>Trái cây & Rau củ</h5>
              <ul>
                <li>
                  <Link to="#">Rau Củ Tươi</Link>
                </li>
                <li>
                  <Link to="#">Thảo Mộc & Gia Vị</Link>
                </li>
                <li>
                  <Link to="#">Trái Cây Tươi</Link>
                </li>
                <li>
                  <Link to="#">Trái Cây Tươi</Link>
                </li>
                <li>
                  <Link to="#">Trái Cây Tươi</Link>
                </li>
                <li>
                  <Link to="#">Trái Cây Tươi</Link>
                </li>
                <li>
                  <Link to="#">Khay Tiệc</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Bữa sáng & Sữa</h5>
              <ul>
                <li>
                  <Link to="#">Sửa & Sữa hương vị</Link>
                </li>
                <li>
                  <Link to="#">Thảo Mộc & Gia Vị</Link>
                </li>
                <li>
                  <Link to="#">Bơ & Bơ thực vật</Link>
                </li>
                <li>
                  <Link to="#">Phô mai</Link>
                </li>
                <li>
                  <Link to="#">Mật Ong</Link>
                </li>
                <li>
                  <Link to="#">Mứt Cam</Link>
                </li>
                <li>
                  <Link to="#">Kem Chua & Nước Sốt</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Thịt & Hải sản</h5>
              <ul>
                <li>
                  <Link to="#">Xúc Xích</Link>
                </li>
                <li>
                  <Link to="#">Lạp Xưởng</Link>
                </li>
                <li>
                  <Link to="#">Thịt Bò</Link>
                </li>
                <li>
                  <Link to="#">Thịt Gà</Link>
                </li>
                <li>
                  <Link to="#">Thịt Xông Khói Cắt Lát</Link>
                </li>
                <li>
                  <Link to="#">Tôm</Link>
                </li>
                <li>
                  <Link to="#">Cá Phi Lê</Link>
                </li>
                <li>
                  <Link to="#">Cua & Ốc, Sò, ...</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Đồ Uống</h5>
              <ul>
                <li>
                  <Link to="#">Nước</Link>
                </li>
                <li>
                  <Link to="#">Nước Có Ga</Link>
                </li>
                <li>
                  <Link to="#">Soda & Pop</Link>
                </li>
                <li>
                  <Link to="#">Cà Phê</Link>
                </li>
                <li>
                  <Link to="#">Bia</Link>
                </li>
                <li>
                  <Link to="#">Rượu Vang</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <h5>Bữa sáng & Sữa</h5>
              <ul>
                <li>
                  <Link to="#">Sửa & Sữa hương vị</Link>
                </li>
                <li>
                  <Link to="#">Thảo Mộc & Gia Vị</Link>
                </li>
                <li>
                  <Link to="#">Bơ & Bơ thực vật</Link>
                </li>
                <li>
                  <Link to="#">Phô mai</Link>
                </li>
                <li>
                  <Link to="#">Mật Ong</Link>
                </li>
                <li>
                  <Link to="#">Mứt Cam</Link>
                </li>
                <li>
                  <Link to="#">Kem Chua & Nước Sốt</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_copyright mt-5 ">
          <div className="container d-flex align-items-center h-100">
            <p className="mb-0">
              Copyright 2024 © HappyFile. Đã đăng ký Bản quyền. Được cung cấp
              bởi Đĩnh Nguyễn
            </p>
            <ul className="list list-inline ms-auto">
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
      </footer>
    </>
  );
};

export default Footer;
