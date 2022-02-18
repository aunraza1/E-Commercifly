import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import WhatsApp from "../components/whatsapp";

const images = {
  Comparison: [
    require("../assets/images/Comparison/04 Comparision Image (1).jpg"),
    require("../assets/images/Comparison/05 Comparison Image.jpg"),
    require("../assets/images/Comparison/05 Life Style Image.jpg"),
    require("../assets/images/Comparison/06 Before and After Image Dog Waste Bags.jpg"),
    require("../assets/images/Comparison/06 Comparision Image.jpg"),
    require("../assets/images/Comparison/07 Comparison image braden mylar bag.jpg"),
    require("../assets/images/Comparison/Comparison.jpg"),
  ],
  Dimensions: [
    require("../assets/images/Dimensions Images/02 Diamension image Duffel Bag.jpg"),
    require("../assets/images/Dimensions Images/05 Infographic Feature.jpg"),
    require("../assets/images/Dimensions Images/61Tz4fJGDOL._AC_SL1500_.jpg"),
    require("../assets/images/Dimensions Images/71n9mOiA0QL._AC_SL1500_.jpg"),
    require("../assets/images/Dimensions Images/81akfI66ZLL._AC_SL1500_.jpg"),
    require("../assets/images/Dimensions Images/Image 03 C.jpg"),
    require("../assets/images/Dimensions Images/Image 1 (1).jpg"),
  ],
  Features: [
    require("../assets/images/Features images/2.jpg"),
    require("../assets/images/Features images/5.jpg"),
    require("../assets/images/Features images/61UhxaDP5yL._AC_SL1002_.jpg"),
    require("../assets/images/Features images/61X-nwFKBiL._AC_SL1500_.jpg"),
    require("../assets/images/Features images/712wQCvfydL._AC_SL1002_.jpg"),
    require("../assets/images/Features images/71uyHPIfOuL._AC_SL1500_.jpg"),
    require("../assets/images/Features images/9.jpg"),
  ],
  How_to_use: [
    require("../assets/images/How to use/04 How to Use Image.jpg"),
    require("../assets/images/How to use/07 how to use.jpg"),
    require("../assets/images/How to use/51bqKoPWefL._AC_.jpg"),
    require("../assets/images/How to use/61+GWBJ55JL._AC_SL1002_.jpg"),
    require("../assets/images/How to use/71Fp6YOsm5L._AC_SL1500_.jpg"),
    require("../assets/images/How to use/81u9QM4m5eS._AC_SL1500_.jpg"),
    require("../assets/images/How to use/Image 06.jpg"),
  ],
  Lifestyle: [
    require("../assets/images/Lifestyle images/22.jpg"),
    require("../assets/images/Lifestyle images/4.jpg"),
    require("../assets/images/Lifestyle images/61AYn6pCHvL._AC_SL1002_.jpg"),
    require("../assets/images/Lifestyle images/61w4d4GHL3L._AC_SL1500_.jpg"),
    require("../assets/images/Lifestyle images/712wQCvfydL._AC_SL1002_.jpg"),
    require("../assets/images/Lifestyle images/71oz-zdlYFL._AC_SL1200_.jpg"),
    require("../assets/images/Lifestyle images/71TF7xTuMXL._AC_SL1500_.jpg"),
  ],
  Main: [
    require("../assets/images/Main Images/13.jpg"),
    require("../assets/images/Main Images/41-tzbThyLL._AC_.jpg"),
    require("../assets/images/Main Images/41oloud8vxL._AC_SL1500_.jpg"),
    require("../assets/images/Main Images/61VNDxL6vQL._AC_SL1500_.jpg"),
    require("../assets/images/Main Images/7.jpg"),
    require("../assets/images/Main Images/71ESWh4qBBL._AC_SL1500_.jpg"),
    require("../assets/images/Main Images/71pQeo3zWwL._AC_SL1500_.jpg"),
  ],
};

function Photography() {
  const [tab, setTab] = useState("All");
  const [filter_images, setFilterImages] = useState([]);
  useEffect(() => {
    if (tab === "All") {
      let old_filter_images = [...filter_images];
      for (var key in images) {
        old_filter_images.push(...images[key]);
      }
      setFilterImages(old_filter_images);
    } else {
      setFilterImages(images[tab.replace(/ /g, "_")]);
    }
  }, [tab]);

  console.log(filter_images);
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            " /*.ml-auto, .mx-auto {*/ /* margin-left: auto!important;*/ /* background-color: #212529 !important;*/ /* padding: 0px 0px 0px 10px !important;*/ /*}*/ @media only screen and (min-width: 260px) { .navbar-dark .navbar-nav .nav-link { color: rgb(255, 255, 255) !important; padding: 26px 18px !important; line-height: 0px !important; } } @media only screen and (max-width: 990px) { .navbar-nav { display: -ms-flexbox; display: flex; -ms-flex-direction: column; flex-direction: column; padding-left: 0; margin-bottom: 0; list-style: none; background: #1b252f !important; } } @media (min-width: 1099px) { .navbar-expand-lg .navbar-collapse { display: flex; padding-top: 14px !important; flex-basis: auto; } } .freeListingBtn{ background-color: #fd7e14; border: none; color: white !important; padding: 10px 22px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; cursor: pointer; margin: -5px; transition-duration: 0.4s; font-weight: bold; } .freeListingBtn:hover { box-shadow: 0 12px 16px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%); color: white !important; }",
        }}
      />
      <Header />
      <section className="photography-banner">
        <div
          className="banner-text-right text-left"
          style={{ left: "2%", right: 0 }}
        >
          <h1 className="hd-text banner-mod-text text-white text-capitalize">
            <strong style={{ color: "#f5812a" }}>Photos better than </strong>
            your competitors{" "}
          </h1>
          <p style={{ color: "#ccc" }}>
            White Background, Infographics, Lifestyle And Models
          </p>
        </div>
      </section>
      <section className="portfolio bg-muted">
        <div className="container-fuild">
          <div className="row ml-5">
            <div className="col-md-3 d-flex py-4 px-3">
              <span
                style={{
                  width: "70px",
                  height: "70px",
                  background:
                    "url(//www.amzonestep.com/new/images/css_sprites.png) -10px -820px",
                }}
              />
              <a
                href="#productphotography"
                style={{ color: "black", textDecoration: "none" }}
              >
                <h5 className="mt-4">Product Photography </h5>
              </a>
            </div>
            {/* <div className="col-md-3 d-flex py-4 px-3">
              <span
                style={{
                  width: "70px",
                  height: "70px",
                  background:
                    "url(//www.amzonestep.com/new/images/css_sprites.png) -1px -100px",
                }}
              />
              <a
                href="#ebc"
                style={{ color: "black", textDecoration: "none" }}
                onmouseover="this.style.color='orange'"
                onmouseout="this.style.color='black'"
              >
                <h5 className="mt-4">Enhanced Brand Content </h5>
              </a>
            </div> */}
            {/* <div className="col-md-3 d-flex py-4 px-3">
              <span style={{ width: "70px", height: "70px" }}>
                <img
                  src="https://www.amzonestep.com/new/images/packaging-design.jpg"
                  className="img-responsive"
                  alt="Test"
                />
              </span>
              <a
                href="#packagingdesign"
                style={{ color: "black", textDecoration: "none" }}
                onmouseover="this.style.color='orange'"
                onmouseout="this.style.color='black'"
              >
                <h5 className="mt-4">Packaging Design </h5>
              </a>
            </div> */}
            {/* <div className="col-md-3 d-flex py-4 px-3">
              <span
                style={{
                  width: "70px",
                  height: "70px",
                  background:
                    "url(https://amzonestep.com/new/images/css_sprites.png) -10px -10px",
                }}
              />
              <a
                href="#listingoptimization"
                style={{ color: "black", textDecoration: "none" }}
                onmouseover="this.style.color='orange'"
                onmouseout="this.style.color='black'"
              >
                <h5 className="mt-4">Listing Optimization</h5>
              </a>
            </div> */}
          </div>
        </div>
      </section>
      <section className="photography-portfolio my-5" id="productphotography">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-orange">Product Photography</h2>
          </div>
          <div id="tabs" className="row">
            <div className="col-md-12">
              <ul
                className="nav nav-pills cutom_tabs"
                style={{ justifyContent: "center" }}
              >
                <li className="tabs nav-item">
                  <a
                    onClick={(e) => setTab(e.target.innerHTML)}
                    className={`nav-link ${tab === "All" && "active_tab"}`}
                  >
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={(e) => setTab(e.target.innerHTML)}
                    className={`nav-link ${
                      tab === "Comparison" && "active_tab"
                    }`}
                  >
                    Comparison
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={(e) => setTab(e.target.innerHTML)}
                    className={`nav-link ${
                      tab === "Dimensions" && "active_tab"
                    }`}
                  >
                    Dimensions
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={(e) => setTab(e.target.innerHTML)}
                    className={`nav-link ${tab === "Features" && "active_tab"}`}
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={(e) => setTab(e.target.innerHTML)}
                    className={`nav-link ${
                      tab === "How to use" && "active_tab"
                    }`}
                  >
                    How to use
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={(e) => setTab(e.target.innerHTML)}
                    className={`nav-link ${
                      tab === "Lifestyle" && "active_tab"
                    }`}
                  >
                    Lifestyle
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    onClick={(e) => setTab(e.target.innerHTML)}
                    className={`nav-link ${tab === "Main" && "active_tab"}`}
                  >
                    Main
                  </a>
                </li>
              </ul>
              <div className="tab-content mt-3">
                <div className="tabs-fancybox-gallery">
                  <div className="row"></div>
                </div>
                <div className="tabs-fancybox-gallery">
                  <div className="row"></div>
                </div>
                <div className="tabs-fancybox-gallery">
                  <div className="row"></div>
                </div>
                <div className="tabs-fancybox-gallery">
                  <div className="row"></div>
                </div>
                <div className="tabs-fancybox-gallery">
                  <div className="row"></div>
                </div>
                <div className="tabs-fancybox-gallery">
                  <div className="row"></div>
                </div>
                <div className="tabs-fancybox-gallery">
                  <div className="row">
                    {filter_images.map((v, i) => {
                      return (
                        <div key={i} className="col-md-3">
                          <a
                            href="https://www.amzonestep.com/new/images/vue-gallery/65.webp"
                            data-fancybox="dimension"
                            data-caption="Amazon Seller Photography"
                            className="gallery-hover galResponsive"
                          >
                            <img
                              src={v.default}
                              alt="product photography"
                              width={255}
                              height={255}
                            />
                            {/* <i aria-hidden="true" className="fa fa-external-link" /> */}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="tabs-fancybox-gallery">
                  <div className="row"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsApp />
      <Footer />
    </div>
  );
}
export default Photography;
