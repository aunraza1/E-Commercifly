import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer footer-color section-pattern footer-bg bg-img">
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
              <div
                className="widget widget_contact_info"
                style={{ padding: "80px 50px 30px 50px", marginTop: "100px" }}
              >
                <div className="widget-logo" style={{ margin: "0px" }}>
                  <img
                    alt="amzonestep"
                    src="https://www.amzonestep.com/new/images/logo-white.png"
                    data-rjs={2}
                    width="250px"
                  />
                </div>

                <div className="info-content">
                  <h2 className="text-white">We Commit!</h2>
                  <h2 className="text-white">We Research!</h2>
                  <h2 className="text-white">We Deliver!</h2>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-8">
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="widget widget_nav_menu "
                    style={{ padding: "30px 10px" }}
                  >
                    <div className="widget-title">
                      <h2 className="text-orange">Quick Links</h2>
                    </div>

                    <ul className="menu">
                      <li>
                        <Link to="https://www.amzonestep.com/podcast">Podcast</Link>
                      </li>
                      <li>
                        <Link to="https://www.amzonestep.com/affiliate-program">
                          Affiliate program
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.amzonestep.com/aboutus">About</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="https://www.amzonestep.com/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="https://www.amzonestep.com/careers">Career</Link>
                      </li>
                      <li>
                        <Link to="https://www.amzonestep.com/faq">FAQs</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="widget widget_nav_menu"
                    style={{ padding: "30px 10px" }}
                  >
                    <div className="widget-title">
                      <h2 className="text-orange">SERVICES</h2>
                    </div>

                    <ul className="menu">
                      <li>
                        <Link to="https://www.amzonestep.com/services/amazon-product-photography">
                          Photography
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.amzonestep.com/services/amazon-product-video-services">
                          Videography
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.amzonestep.com/services/amazon-ppc-service">
                          PPC Management
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.amzonestep.com/services/amazon-enhanced-brand-content-service">
                          Enhanced Brand Content
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.amzonestep.com/services/amazon-listing-optimization">
                          Listing Optimization
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.amzonestep.com/services/amazon-account-management">
                          Accounts Management
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.amzonestep.com/services/product-packaging-design">
                          Packaging Design
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.amzonestep.com/services/product-3d-rendering">
                          3D Rendering
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.amzonestep.com/services/amazon-product-ranking">
                          Ranking
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div
                    className="widget widget_newsletter"
                    style={{ padding: "30px 10px" }}
                  >
                    <div className="widget-title">
                      <h2 className="text-orange">Stay in Touch</h2>
                    </div>
                    <p style={{ textTransform: "capitalize" }}>
                      our social links for more <br /> inspirational content.
                    </p>
                    <div className="social">
                      <Link
                        to="https://www.facebook.com/AMZonestep/"
                        rel="nofollow"
                      >
                        <i className="fa fa-facebook-f" />
                      </Link>
                      <Link
                        to="https://www.instagram.com/amzonestep/?hl=en"
                        rel="nofollow"
                      >
                        <i className="fa fa-instagram" />
                      </Link>
                      <Link to="https://twitter.com/AZonestep" rel="nofollow">
                        <i className="fa fa-twitter" />
                      </Link>
                      <Link
                        to="https://www.linkedin.com/company/amzonestep"
                        rel="nofollow"
                      >
                        <i className="fa fa-linkedin" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row py-2 mb-2">
                <div className="col-md-4">
                  <Link to="https://www.amzonestep.com/privacy-policy">
                    Privacy
                  </Link>

                  <Link to="https://www.amzonestep.com/disclaimer">Disclaimer</Link>

                  <Link to="https://www.amzonestep.com/term-and-conditions">
                    Terms &amp; Condition
                  </Link>
                  <p>
                    Copyright <i className="fa fa-copyright" /> 2021 All Rights
                    reserved <br /> Powered By
                    <Link to="https://outorigin.com">
                      <img
                        alt="favicon"
                        src="https://outorigin.com/wp-content/uploads/2020/06/cropped-favicon-1-32x32.png"
                      />{" "}
                      Out Origin
                    </Link>
                    <br />
                    <Link
                      to="//www.dmca.com/Protection/Status.aspx?ID=665b052f-83ae-4f7f-ad59-46bbc41b3b91"
                      title="DMCA.com Protection Status"
                      className="dmca-badge"
                    >
                      <img
                        src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=665b052f-83ae-4f7f-ad59-46bbc41b3b91"
                        alt="DMCA.com Protection Status"
                      />
                    </Link>
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
