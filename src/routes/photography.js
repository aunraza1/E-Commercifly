import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
function Photography() {
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
                onmouseover="this.style.color='orange'"
                onmouseout="this.style.color='black'"
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
              {/* <ul
                className="nav nav-pills"
                style={{ justifyContent: "center" }}
              >
                <li className="tabs nav-item">
                  <a className="nav-link">White Background</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">All</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Lifestyle</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Infographics</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Before After</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Comparision</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">Dimension</a>
                </li>
              </ul> */}
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
                    <div className="col-md-3">
                      <a
                        href="https://www.amzonestep.com/new/images/vue-gallery/65.webp"
                        data-fancybox="dimension"
                        data-caption="Amazon Seller Photography"
                        className="gallery-hover galResponsive"
                      >
                        <img
                          src="https://www.amzonestep.com/new/images/vue-gallery/65.webp"
                          alt="product photography"
                          width={255}
                          height={255}
                        />
                        {/* <i aria-hidden="true" className="fa fa-external-link" /> */}
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="/new/images/vue-gallery/68.webp"
                        data-fancybox="dimension"
                        data-caption="Amazon Seller Photography"
                        className="gallery-hover galResponsive"
                      >
                        <img
                          src="https://www.amzonestep.com/new/images/vue-gallery/68.webp"
                          alt="product photography"
                          width={255}
                          height={255}
                        />
                        {/* <i aria-hidden="true" className="fa fa-external-link" /> */}
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="/new/images/vue-gallery/25.webp"
                        data-fancybox="dimension"
                        data-caption="Amazon Seller Photography"
                        className="gallery-hover galResponsive"
                      >
                        <img
                          src="https://www.amzonestep.com/new/images/vue-gallery/25.webp"
                          alt="product photography"
                          width={255}
                          height={255}
                        />
                        {/* <i aria-hidden="true" className="fa fa-external-link" /> */}
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="https://www.amzonestep.com/new/images/vue-gallery/26.webp"
                        data-fancybox="dimension"
                        data-caption="Amazon Seller Photography"
                        className="gallery-hover galResponsive"
                      >
                        <img
                          src="https://www.amzonestep.com/new/images/vue-gallery/26.webp"
                          alt="product photography"
                          width={255}
                          height={255}
                        />
                        {/* <i aria-hidden="true" className="fa fa-external-link" /> */}
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="/new/images/vue-gallery/27.webp"
                        data-fancybox="dimension"
                        data-caption="Amazon Seller Photography"
                        className="gallery-hover galResponsive"
                      >
                        <img
                          src="https://www.amzonestep.com/new/images/vue-gallery/27.webp"
                          alt="product photography"
                          width={255}
                          height={255}
                        />
                        {/* <i aria-hidden="true" className="fa fa-external-link" /> */}
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="/new/images/vue-gallery/67.webp"
                        data-fancybox="dimension"
                        data-caption="Amazon Seller Photography"
                        className="gallery-hover galResponsive"
                      >
                        <img
                          src="https://www.amzonestep.com/new/images/vue-gallery/67.webp"
                          alt="product photography"
                          width={255}
                          height={255}
                        />
                        {/* <i aria-hidden="true" className="fa fa-external-link" /> */}
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="/new/images/vue-gallery/28.webp"
                        data-fancybox="dimension"
                        data-caption="Amazon Seller Photography"
                        className="gallery-hover galResponsive"
                      >
                        <img
                          src="https://www.amzonestep.com/new/images/vue-gallery/29.webp"
                          alt="product photography"
                          width={255}
                          height={255}
                        />
                        {/* <i aria-hidden="true" className="fa fa-external-link" /> */}
                      </a>
                    </div>
                    <div className="col-md-3">
                      <a
                        href="/new/images/vue-gallery/29.webp"
                        data-fancybox="dimension"
                        data-caption="Amazon Seller Photography"
                        className="gallery-hover galResponsive"
                      >
                        <img
                          src="https://www.amzonestep.com/new/images/vue-gallery/29.webp"
                          alt="product photography"
                          width={255}
                          height={255}
                        />
                        {/* <i aria-hidden="true" className="fa fa-external-link" /> */}
                      </a>
                    </div>
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
      <Footer/>
    </div>
  );
}
export default Photography;
