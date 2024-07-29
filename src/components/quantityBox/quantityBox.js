import { FiMinus, FiPlus } from "react-icons/fi";
import Button from "@mui/material/Button";
import { useState } from "react";

const QuantityBox = () => {
  const [inputVal, setInputVal] = useState(1);

  const minus = () => {
    if (inputVal > 1) {
      setInputVal(inputVal - 1);
    }
  };
  const plus = () => {
    setInputVal(inputVal + 1);
  };

  return (
    <>
      <div
        className="d-flex align-items-center"
        style={{ marginBottom: "40px" }}
      >
        <div className="quantity-drop d-flex align-items-center">
          <Button className="btn-minus" onClick={minus}>
            <FiMinus />
          </Button>
          <input type="text" value={inputVal} readOnly />
          <Button className="btn-plus" onClick={plus}>
            <FiPlus />
          </Button>
        </div>

        <Button className="btn-add-cart">Thêm vào giỏ hàng</Button>
      </div>
    </>
  );
};

export default QuantityBox;
