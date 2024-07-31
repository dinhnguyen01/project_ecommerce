import Sidebar from "../../components/sidebar/sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";
import bannerCat from "../../assets/category/procat-banner-01.jpg";
import Button from "@mui/material/Button";
import { IoMenu } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material";
import ProductItem from "../../components/productItem/productItem";
import Pagination from "@mui/material/Pagination";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CustomMenuItem = styled(MenuItem)({
  fontSize: "14px",
  "&:hover": {
    color: "#00b853",
    backgroundColor: "transparent",
  },
});

const CustomPagination = styled(Pagination)({
  "& .MuiPaginationItem-root": {
    "&:hover": {
      backgroundColor: "#25c638 !important",
      color: "white",
    },
    "&.Mui-selected": {
      backgroundColor: "#25c638",
      color: "white",
    },
  },
});

const CustomBreadcrumbs = styled(Breadcrumbs)({
  paddingBottom: "30px",
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

const Listing = () => {
  const breadcrumbs = [
    <Link key="1" to="/">
      Trang chủ
    </Link>,

    <Typography key="2">Danh mục</Typography>,
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const openDropdown = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [productsPerRow, setProductsPerRow] = useState(4);
  const [activeButton, setActiveButton] = useState(4);

  const handleProductsPerRow = (count) => {
    setProductsPerRow(count);
    setActiveButton(count);
  };

  return (
    <>
      <section className="product_listing-page">
        <div className="container">
          <CustomBreadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </CustomBreadcrumbs>

          <div className="product-listing row gx-5">
            <div className="col-md-3">
              <Sidebar />
            </div>

            <div className="col-md-9">
              <div className="content_right">
                <Link
                  to="#"
                  className="position-relative d-flex h-100 justify-content-center"
                >
                  <img
                    src={bannerCat}
                    alt="bannerCat"
                    className="img-fluid rounded"
                  />

                  <div className="content-banner position-absolute d-flex flex-column">
                    <p>Các món chế biến sẵn</p>
                    <h3>Giao đến tận nhà bạn</h3>
                    <p>Được chuẩn bị đầy đủ và giao hàng trên toàn quốc.</p>
                  </div>
                </Link>

                <div className="show-by d-flex align-items-center">
                  <div className="d-flex btn-wrapper align-items-center gap-2">
                    <Button
                      className={activeButton === 1 ? "active" : ""}
                      onClick={() => handleProductsPerRow(1)}
                    >
                      <IoMenu />
                    </Button>

                    <Button
                      className={activeButton === 2 ? "active" : ""}
                      onClick={() => handleProductsPerRow(2)}
                    >
                      <BsFillGridFill />
                    </Button>

                    <Button
                      className={activeButton === 3 ? "active" : ""}
                      onClick={() => handleProductsPerRow(3)}
                    >
                      <CgMenuGridR />
                    </Button>

                    <Button
                      className={activeButton === 4 ? "active" : ""}
                      onClick={() => handleProductsPerRow(4)}
                    >
                      <TfiLayoutGrid4Alt />
                    </Button>
                  </div>

                  <div className="ms-auto show-by-filter d-flex align-items-center">
                    <Button onClick={handleClick}>
                      12 <FaAngleDown />
                    </Button>

                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openDropdown}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <CustomMenuItem onClick={handleClose}>12</CustomMenuItem>
                      <CustomMenuItem onClick={handleClose}>24</CustomMenuItem>
                      <CustomMenuItem onClick={handleClose}>36</CustomMenuItem>
                      <CustomMenuItem onClick={handleClose}>48</CustomMenuItem>
                    </Menu>
                  </div>
                </div>

                <div className="product-listing">
                  <div className="row g-2">
                    <div className={`col-md-${12 / productsPerRow}`}>
                      <ProductItem isSingleRow={productsPerRow === 1} />
                    </div>
                    <div className={`col-md-${12 / productsPerRow}`}>
                      <ProductItem isSingleRow={productsPerRow === 1} />
                    </div>
                    <div className={`col-md-${12 / productsPerRow}`}>
                      <ProductItem isSingleRow={productsPerRow === 1} />
                    </div>
                    <div className={`col-md-${12 / productsPerRow}`}>
                      <ProductItem isSingleRow={productsPerRow === 1} />
                    </div>
                    <div className={`col-md-${12 / productsPerRow}`}>
                      <ProductItem isSingleRow={productsPerRow === 1} />
                    </div>
                    <div className={`col-md-${12 / productsPerRow}`}>
                      <ProductItem isSingleRow={productsPerRow === 1} />
                    </div>
                    <div className={`col-md-${12 / productsPerRow}`}>
                      <ProductItem isSingleRow={productsPerRow === 1} />
                    </div>
                    <div className={`col-md-${12 / productsPerRow}`}>
                      <ProductItem isSingleRow={productsPerRow === 1} />
                    </div>
                    <div className={`col-md-${12 / productsPerRow}`}>
                      <ProductItem isSingleRow={productsPerRow === 1} />
                    </div>
                    <div className={`col-md-${12 / productsPerRow}`}>
                      <ProductItem isSingleRow={productsPerRow === 1} />
                    </div>
                    <div className={`col-md-${12 / productsPerRow}`}>
                      <ProductItem isSingleRow={productsPerRow === 1} />
                    </div>
                    <div className={`col-md-${12 / productsPerRow}`}>
                      <ProductItem isSingleRow={productsPerRow === 1} />
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center justify-content-center mt-5">
                  <CustomPagination count={10} color="primary" size="large" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
