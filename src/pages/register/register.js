import { useEffect, useContext } from "react";
import { MyContext } from "../../App";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Register = () => {
  const context = useContext(MyContext);
  useEffect(() => {
    context.setIsFooterShow(false);
  }, [context]);

  return (
    <>
      <div className="auth-wrapper">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="auth-form">
            <h4>Đăng ký</h4>

            <form className="d-flex flex-column">
              <div className="d-flex flex-column">
                <label htmlFor="fullname">Họ và tên *</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Nhập họ và tên..."
                />
              </div>

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

              <Button className="btn-action-form mt-3">Đăng ký</Button>

              <div>
                Bạn đã có tài khoản?{" "}
                <Link
                  to="/login"
                  className="fw-bold border-effect"
                  style={{ color: "#0DBE25" }}
                >
                  Đăng nhập ngay
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

export default Register;
