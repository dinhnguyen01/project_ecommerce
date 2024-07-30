import { useEffect, useContext } from "react";
import { MyContext } from "../../App";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const CustomCheckbox = styled(Checkbox)({
  padding: "0px",
  marginRight: "5px",
  "&.Mui-checked": {
    color: "#0DBE25",
  },
});

const CustomFormControlLabel = styled(FormControlLabel)({
  margin: "0px",
  marginBottom: "0px !important",
  "& .MuiFormControlLabel-label": {
    fontSize: "14px",
    color: "#000",
    margin: "0px",
  },
});

const Login = () => {
  const context = useContext(MyContext);
  useEffect(() => {
    context.setIsFooterShow(false);
  }, [context]);

  return (
    <>
      <div className="auth-wrapper">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="auth-form">
            <h4>Đăng nhập</h4>

            <form className="d-flex flex-column">
              <div className="d-flex flex-column">
                <label htmlFor="email">Email *</label>
                <input type="text" id="email" placeholder="Nhập email..." />
              </div>

              <div className="d-flex flex-column">
                <label htmlFor="password">Mật khẩu *</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Nhập mật khẩu..."
                />
              </div>

              <div className="d-flex align-items-center justify-content-between mb-3">
                <CustomFormControlLabel
                  control={<CustomCheckbox />}
                  label="Ghi nhớ mật khẩu"
                />

                <Link to="#">Quên mật khẩu?</Link>
              </div>

              <Button className="btn-action-form">Đăng nhập</Button>

              <div>
                Bạn chưa có tài khoản?{" "}
                <Link
                  to="/register"
                  className="text-danger fw-bold border-effect"
                >
                  Đăng ký ngay
                </Link>
              </div>
            </form>

            <p className="text-center fs-6 mt-3 my-3">
              <b>HOẶC</b>
            </p>

            <div className="d-flex align-items-center justify-content-center gap-4">
              <Button className="d-flex align-items-center fs-5 text-capitalize border rounded">
                <FcGoogle className="me-1" /> Google
              </Button>

              <Button className="d-flex align-items-center fs-5 text-capitalize border rounded">
                <FaFacebook className="me-1 text-primary" /> Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
