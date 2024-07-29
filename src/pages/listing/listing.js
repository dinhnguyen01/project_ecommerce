import Sidebar from "../../components/sidebar/sidebar";
import { Link } from "react-router-dom";
import bannerCat from "../../assets/category/procat-banner-01.jpg";

const Listing = () => {
  return (
    <>
      <section className="product_listing-page">
        <div className="container">
          <div className="product-listing row gx-5">
            <div className="col-md-3">
              <Sidebar />
            </div>

            <div className="col-md-9">
              <div className="content_right">
                <Link to="#">
                  <img
                    src={bannerCat}
                    alt="bannerCat"
                    className="img-fluid rounded"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
