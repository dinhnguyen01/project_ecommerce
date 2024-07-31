import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row nav_wrapper">
          <div className="col-sm-3 nav_part1">
            <div className="cat_wrapper">
              <Button
                className="all_cat-tab"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-expanded="false"
                aria-controls="sidebarMenu"
              >
                <IoMenu />
                <span className="text">Danh mục sản phẩm</span>
                <FaAngleDown />
              </Button>

              <div className="collapse nav_sidebar" id="sidebarMenu">
                <ul className="menu-sidebar">
                  <li className="category-parent menu-item">
                    <Link to="/">
                      Rau củ quả
                      <FaAngleRight />
                    </Link>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link to="/">Cắt & Mầm</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Trái cây & Rau lạ</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Trái cây tươi</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Rau sạch</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Thảo Mộc & Gia Vị</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Sản Phẩm Rau Củ Đóng Gói</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Khay tiệc</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="category-parent menu-item">
                    <Link to="/">Thịt & Hải Sản</Link>
                  </li>
                  <li className="category-parent menu-item">
                    <Link to="/">Bữa sáng & Sữa</Link>
                  </li>
                  <li className="category-parent menu-item">
                    <Link to="/">
                      Đồ uống <FaAngleRight />
                    </Link>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link to="/">Cà phê</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Bia thủ công</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Hộp & Túi đựng đồ uống</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Sữa & Sữa thực vật</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Soda & Pop</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Nước có ga</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Trà & Kombucha</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Nước</Link>
                      </li>
                      <li className="menu-item">
                        <Link to="/">Rượu</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="category-parent menu-item">
                    <Link to="/">Bánh mì & Tiệm bánh</Link>
                  </li>
                  <li className="category-parent menu-item">
                    <Link to="/">Thực phẩm đông lạnh</Link>
                  </li>
                  <li className="category-parent menu-item">
                    <Link to="/">Bánh quy & Đồ ăn nhẹ</Link>
                  </li>
                  <li className="category-parent menu-item">
                    <Link to="/">Tạp hóa & Nhu yếu phẩm</Link>
                  </li>
                  <li className="link-item menu-item">
                    <Link to="/">Giá trị trong ngày</Link>
                  </li>
                  <li className="link-item menu-item">
                    <Link to="/">100 ưu đãi hàng đầu</Link>
                  </li>
                  <li className="link-item menu-item">
                    <Link to="/">Hàng mới về</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-9 nav_part2">
            <ul className="list nav_list-inline mb-0">
              <li className="nav_list-item">
                <Link className="active" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="nav_list-item">
                <Link to="/">Rau củ quả</Link>
              </li>
              <li className="nav_list-item">
                <Link to="/">Thịt & hải sản</Link>
              </li>
              <li className="nav_list-item">
                <Link to="/">Tiệm bánh mì</Link>
              </li>
              <li className="nav_list-item">
                <Link to="/">Đồ uống</Link>
              </li>
              <li className="nav_list-item">
                <Link to="/">Tin tức</Link>
              </li>
              <li className="nav_list-item">
                <Link to="/">Liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
