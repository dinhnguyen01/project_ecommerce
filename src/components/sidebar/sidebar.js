import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Box, Slider, Typography } from "@mui/material";

const CustomCheckbox = styled(Checkbox)({
  padding: "0px",
  marginLeft: "10px",
  marginRight: "10px",
  "&.Mui-checked": {
    color: "green",
  },
});

const CustomFormControlLabel = styled(FormControlLabel)({
  "& .MuiFormControlLabel-label": {
    fontSize: "14px",
    color: "#000",
  },
});

function valuetext(value) {
  return `${value.toLocaleString()}đ`;
}

const CustomSlider = styled(Slider)({
  color: "#52af77",
  height: 4,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 18,
    width: 18,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
  },
});

const CustomTypography = styled(Typography)({
  fontSize: "14px",
  color: "#000",
});

const Sidebar = () => {
  const categories = [
    {
      label: "Đồ uống",
      subCategories: [
        "Cà phê",
        "Bia",
        "Hộp và Túi Nước Uống",
        "Sữa và Sữa Thực Vật",
        "Soda & Nước ngọt",
        "Nước có ga",
        "Trà & Kombucha",
        "Nước",
        "Rượu vang",
      ],
    },
    { label: "Bánh quy & Đồ ăn nhẹ", subCategories: [] },
    { label: "Bánh mì", subCategories: [] },
    { label: "Bữa sáng & Sữa", subCategories: [] },
    { label: "Thực phẩm đông lạnh", subCategories: [] },
    {
      label: "Rau củ quả",
      subCategories: [
        "Cắt & Mầm",
        "Trái cây & Rau lạ",
        "Trái cây tươi",
        "Rau tươi",
        "Thảo mộc & Gia vị",
        "Sản phẩm đóng gói",
        "Khay tiệc",
      ],
    },
    { label: "Tạp hóa & Nhu yếu phẩm", subCategories: [] },
    { label: "Đồ gia dụng", subCategories: [] },
    { label: "Thịt & Hải Sản", subCategories: [] },
  ];

  const [openSubMenus, setOpenSubMenus] = useState(
    Array(categories.length).fill(false)
  );

  const handleToggleMenu = (index) => {
    setOpenSubMenus((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const [value, setValue] = useState([0, 1000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="sidebar-wrapper">
      <div className="filter-box">
        <h4 className="filter-heading">Danh mục sản phẩm</h4>
        <div className="scroll">
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <CustomFormControlLabel
                  control={<CustomCheckbox size="small" />}
                  label={category.label}
                />
                {category.subCategories.length > 0 && (
                  <>
                    {openSubMenus[index] ? (
                      <FaMinus
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#sub_menu-filter-${index}`}
                        aria-expanded={openSubMenus[index]}
                        aria-controls={`sub_menu-filter-${index}`}
                        onClick={() => handleToggleMenu(index)}
                      />
                    ) : (
                      <FaPlus
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#sub_menu-filter-${index}`}
                        aria-expanded={openSubMenus[index]}
                        aria-controls={`sub_menu-filter-${index}`}
                        onClick={() => handleToggleMenu(index)}
                      />
                    )}
                    <ul
                      className="collapse sub-menu-cat"
                      id={`sub_menu-filter-${index}`}
                    >
                      {category.subCategories.map((subCategory, subIndex) => (
                        <li key={subIndex}>
                          <CustomFormControlLabel
                            control={<CustomCheckbox size="small" />}
                            label={subCategory}
                          />
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="filter-box">
        <h4 className="filter-heading">Lọc theo giá</h4>
        <Box sx={{ width: "100%" }}>
          <CustomSlider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="off"
            getAriaValueText={valuetext}
            min={0}
            max={1000000}
            step={50000}
          />
          <CustomTypography id="range-slider">
            Giá từ:{" "}
            <b>
              {valuetext(value[0])} - {valuetext(value[1])}
            </b>
          </CustomTypography>
        </Box>
      </div>

      <div className="filter-box">
        <h4 className="filter-heading">Tình trạng sản phẩm</h4>
        <ul>
          <li style={{ marginBottom: 10 }}>
            <CustomFormControlLabel
              control={<CustomCheckbox size="small" />}
              label="Còn hàng"
            />
          </li>
          <li>
            <CustomFormControlLabel
              control={<CustomCheckbox size="small" />}
              label="Đang giảm giá"
            />
          </li>
        </ul>
      </div>

      <div className="filter-box">
        <h4 className="filter-heading">Thương hiệu</h4>
        <ul>
          <li>
            <CustomFormControlLabel
              control={<CustomCheckbox size="small" />}
              label="Việt Nam"
            />

            <span className="brand-count-product">(10)</span>
          </li>
          <li>
            <CustomFormControlLabel
              control={<CustomCheckbox size="small" />}
              label="Hàn Quốc"
            />

            <span className="brand-count-product">(7)</span>
          </li>
          <li>
            <CustomFormControlLabel
              control={<CustomCheckbox size="small" />}
              label="Nhật Bản"
            />

            <span className="brand-count-product">(5)</span>
          </li>
          <li>
            <CustomFormControlLabel
              control={<CustomCheckbox size="small" />}
              label="Trung Quốc"
            />

            <span className="brand-count-product">(17)</span>
          </li>
          <li>
            <CustomFormControlLabel
              control={<CustomCheckbox size="small" />}
              label="Anh"
            />

            <span className="brand-count-product">(21)</span>
          </li>
        </ul>
      </div>

      <Link to="#">
        <img
          className="img-fluid"
          src="https://csc.edu.vn/data/images/tin-tuc/do-hoa/kien-thuc-dh/100423-banner/banner-1.png"
          alt="banner"
        />
      </Link>
    </div>
  );
};

export default Sidebar;
