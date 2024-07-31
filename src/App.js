import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header.js";
import Home from "./pages/home/home.js";
import Footer from "./components/footer/footer.js";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ProductModal from "./components/productModal/productModal.js";
import Listing from "./pages/listing/listing.js";
import ProductDetail from "./pages/productDetail/productDetail.js";
import Cart from "./pages/cart/cart.js";
import Login from "./pages/login/login.js";
import Register from "./pages/register/register.js";

const MyContext = createContext();

function App() {
  const [locationList, setLocationList] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  // const [isHeaderShow, setIsHeaderShow] = useState(true);
  const [isFooterShow, setIsFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    getLocation("https://vapi.vnappmob.com/api/province/");
  }, []);

  const getLocation = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setLocationList(res.data.results);
    });
  };

  const values = {
    locationList,
    selectedLocation,
    setSelectedLocation,
    isOpenProductModal,
    setIsOpenProductModal,
    // isHeaderShow,
    // setIsHeaderShow,
    isFooterShow,
    setIsFooterShow,
    isLogin,
    setIsLogin,
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat/:id" element={<Listing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route exact={true} path="/register" element={<Register />} />
        </Routes>
        {isFooterShow === true && <Footer />}

        {isOpenProductModal === true && <ProductModal />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };
