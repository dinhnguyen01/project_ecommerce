import Logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import LocationDropdown from "../locationDropdown/locationDropdown";
import { AiOutlineUser } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./searchBox/searchBox";
import Navigation from "./navigation/navigation";
import { useContext } from "react";
import { MyContext } from "../../App";

const Header = () => {
  const context = useContext(MyContext);
  const cartPage = useNavigate();

  const handleCartClick = () => {
    cartPage("/cart");
  };

  return (
    <>
      <div className="header-wrapper">
        <div className="top-strip main-bgc">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Do lượng đặt hàng gần đây khá nhiều, có thể đơn hàng của bạn sẽ xử
              lý chậm hơn từ <b>1-2 Ngày</b>
            </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="header_logo d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="logo" draggable="false" />
                  <span className="header_logo-text">
                    Mang chất lượng đến với mọi nhà
                  </span>
                </Link>
              </div>

              <div className="col-sm-10 d-flex align-items-center part2">
                {context.locationList.length !== 0 && <LocationDropdown />}

                <SearchBox />

                <div className="part3 d-flex align-items-center">
                  <Button className="header-button header_button-user me-3">
                    <AiOutlineUser />
                  </Button>
                  <div className="ms-auto header_cart-tab d-flex align-items-center">
                    <span className="header_cart-price">1.000.000đ</span>
                    <div className="position-relative">
                      <Button
                        onClick={handleCartClick}
                        className="header-button header_button-cart ms-2"
                      >
                        <IoBagOutline />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navigation />
      </div>
    </>
  );
};

export default Header;
