import { IoSearch } from "react-icons/io5";
import Button from "@mui/material/Button";

const SearchBox = () => {
  return (
    <>
      <div className="header_search">
        <input type="text" placeholder="Tìm kiếm sản phẩm" />
        <Button className="header_button-search">
          <IoSearch />
        </Button>
      </div>
    </>
  );
};

export default SearchBox;
