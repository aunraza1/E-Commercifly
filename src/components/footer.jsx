import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer className="footer footer-color section-pattern footer-bg bg-img">
      {/* Footer Top Begin */}
      <div className="footer-top" style={{ paddingTop: "100px" }}>
        <div>
          <div className="row" style={{ margin: "0px" }}>
            <div
              className="col-12 col-sm-6 col-lg-4"
              style={{
                background:
                  "url(https://www.amzonestep.com/new/images/home/footer-shape.webp)",
                backgroundSize: "93% 100%",
                marginTop: "-100px",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Contact Widget Begin */}
              <div
                className="widget widget_contact_info"
                style={{ padding: "80px 50px 30px 50px", marginTop: "100px" }}
              >
                {/* Widget Logo Begin */}
                <div className="widget-logo" style={{ margin: "0px" }}>
                  <img
                    alt="amzonestep"
                    src="https://www.amzonestep.com/new/images/logo-white.png"
                    data-rjs={2}
                    width="250px"
                  />
                </div>
                {/* Widget Logo End */}
                {/* Widget Content Begin */}
                <div className="info-content">
                  <h2 className="text-white">We Commit!</h2>
                  <h2 className="text-white">We Research!</h2>
                  <h2 className="text-white">We Deliver!</h2>
                </div>
                {/* Widget Content End */}
              </div>
              {/* About Widget End */}
            </div>
            <div className="col-12 col-sm-6 col-lg-8">
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  {/* Widget Quick Nav */}
                  <div
                    className="widget widget_nav_menu "
                    style={{ padding: "30px 10px" }}
                  >
                    {/* Widget Title Begin */}
                    <div className="widget-title">
                      <h2 className="text-orange">Quick Links</h2>
                    </div>
                    {/* Widget Title End */}
                    {/* Menu Begin */}
                    <ul className="menu">
                      <li>
                        <a href="https://www.amzonestep.com/podcast">Podcast</a>
                      </li>
                      <li>
                        <a href="https://www.amzonestep.com/affiliate-program">
                          Affiliate program
                        </a>
                      </li>
                      <li>
                        <a href="https://www.amzonestep.com/aboutus">About</a>
                      </li>
                      <li>
                        <a href="/blog">Blog</a>
                      </li>
                      <li>
                        <a href="https://www.amzonestep.com/contact">Contact</a>
                      </li>
                      <li>
                        <a href="https://www.amzonestep.com/careers">Career</a>
                      </li>
                      <li>
                        <a href="https://www.amzonestep.com/faq">FAQs</a>
                      </li>
                    </ul>
                    {/* Menu End */}
                  </div>
                  {/* Widget Quick Nav */}
                </div>
                <div className="col-lg-4 col-sm-6">
                  {/* Widget Quick Nav */}
                  <div
                    className="widget widget_nav_menu"
                    style={{ padding: "30px 10px" }}
                  >
                    {/* Widget Title Begin */}
                    <div className="widget-title">
                      <h2 className="text-orange">SERVICES</h2>
                    </div>
                    {/* Widget Title End */}
                    {/* Menu Begin */}
                    <ul className="menu">
                      <li>
                        <a href="https://www.amzonestep.com/services/amazon-product-photography">
                          Photography
                        </a>
                      </li>
                      <li>
                        <a href="https://www.amzonestep.com/services/amazon-product-video-services">
                          Videography
                        </a>
                      </li>
                      <li>
                        <a href="https://www.amzonestep.com/services/amazon-ppc-service">
                          PPC Management
                        </a>
                      </li>
                      <li>
                        <a href="https://www.amzonestep.com/services/amazon-enhanced-brand-content-service">
                          Enhanced Brand Content
                        </a>
                      </li>
                      <li>
                        <a href="https://www.amzonestep.com/services/amazon-listing-optimization">
                          Listing Optimization
                        </a>
                      </li>
                      <li>
                        <a href="https://www.amzonestep.com/services/amazon-account-management">
                          Accounts Management
                        </a>
                      </li>
                      <li>
                        <a href="https://www.amzonestep.com/services/product-packaging-design">
                          Packaging Design
                        </a>
                      </li>
                      <li>
                        <a href="https://www.amzonestep.com/services/product-3d-rendering">
                          3D Rendering
                        </a>
                      </li>
                      <li>
                        <a href="https://www.amzonestep.com/services/amazon-product-ranking">
                          Ranking
                        </a>
                      </li>
                    </ul>
                    {/* Menu End */}
                  </div>
                  {/* Widget Quick Nav */}
                </div>
                <div className="col-lg-4 col-sm-6">
                  {/* Widget Newsletter Begin */}
                  <div
                    className="widget widget_newsletter"
                    style={{ padding: "30px 10px" }}
                  >
                    {/* Widget Title Begin */}
                    <div className="widget-title">
                      <h2 className="text-orange">Stay in Touch</h2>
                    </div>
                    <p style={{ textTransform: "capitalize" }}>
                      {" "}
                      our social links for more <br /> inspirational content.
                    </p>
                    <div className="social">
                      <a
                        href="https://www.facebook.com/AMZonestep/"
                        rel="nofollow"
                      >
                        <i className="fa fa-facebook-f" />
                      </a>
                      <a
                        href="https://www.instagram.com/amzonestep/?hl=en"
                        rel="nofollow"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="https://twitter.com/AZonestep" rel="nofollow">
                        <i className="fa fa-twitter" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/amzonestep"
                        rel="nofollow"
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row py-2 mb-2">
                <div className="col-md-4">
                  <a href="https://www.amzonestep.com/privacy-policy">
                    Privacy{" "}
                  </a>{" "}
                  |{" "}
                  <a href="https://www.amzonestep.com/disclaimer">
                    Disclaimer{" "}
                  </a>{" "}
                  |{" "}
                  <a href="https://www.amzonestep.com/term-and-conditions">
                    {" "}
                    Terms &amp; Condition{" "}
                  </a>
                  <p>
                    Copyright <i className="fa fa-copyright" /> 2021 All Rights
                    reserved <br /> Powered By{" "}
                    <a href="https://outorigin.com">
                      <img
                        alt="favicon"
                        src="https://outorigin.com/wp-content/uploads/2020/06/cropped-favicon-1-32x32.png"
                      />{" "}
                      Out Origin
                    </a>
                    <br />
                    <a
                      href="//www.dmca.com/Protection/Status.aspx?ID=665b052f-83ae-4f7f-ad59-46bbc41b3b91"
                      title="DMCA.com Protection Status"
                      className="dmca-badge"
                    >
                      <img
                        src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=665b052f-83ae-4f7f-ad59-46bbc41b3b91"
                        alt="DMCA.com Protection Status"
                      />
                    </a>
                  </p>
                </div>
                <div className="col-md-3 mt-2">
                  <img
                    alt="AMZ One Step - Pickfu"
                    src="https://www.amzonestep.com/new/images/pickfu-logo.png"
                    className="img-responsive"
                    width={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
