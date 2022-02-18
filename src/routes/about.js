/* eslint-disable jsx-a11y/alt-text */
import Header from "../components/header";
import Footer from "../components/footer";
import test1 from "../assets/images/test.jpg";
import Aun from "../assets/images/aun.jpg";
import Bus from "../assets/images/bus.jpg";
import WhatsApp from "../components/whatsapp";

function About() {
  return (
    <div>
      <Header />
      <section className="about-banner">
        <div className="about-banner-text">
          <div style={{ textAlign: "center" }}>
            <h1 className="hd-text banner-mod-text text-white text-capitalize">
              ABOUT US
            </h1>
            <p className="lead" style={{ color: "white", padding: "20px" }}>
              Our work is to make sure that we exceed your expectations and add
              value to your brand.
            </p>
          </div>
        </div>
      </section>
      <div className="container section-title my-5">
        <h3 style={{ color: "#f5812a" }} className="mb-3">
          ECOMMERCIFLY
        </h3>
        <h1 className="about-section-heading">
          Lorem ipsum dolor sit amet
          <br /> consectetur adipiscing elit
        </h1>
        <div className="row py-4">
          <div className="col-md-6">
            <p className="mt-0" style={{ fontSize: "1rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-md-6">
            <img src={Bus} alt="" style={{ minHeight: "100%" }} />
          </div>
        </div>
      </div>
      <section className="container mt-5">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            {/* Single Service Begin */}
            <div
              className="single-service text-center"
              style={{ minHeight: "auto" }}
            >
              <div className="content">
                <img
                  src="https://www.amzonestep.com/new/images/about-commit.png"
                  style={{ height: "100px", marginBottom: "10px" }}
                />
                <h3>Aun Raza</h3>
                <p>This is a test text please ensure things are right</p>
              </div>
            </div>
            {/* Single Service End */}
          </div>
          <div className="col-lg-4 col-sm-6">
            {/* Single Service Begin */}
            <div
              className="single-service text-center"
              style={{ minHeight: "auto" }}
            >
              <div className="content">
                <img
                  src="https://www.amzonestep.com/new/images/about-research.png"
                  style={{ height: "100px", marginBottom: "10px" }}
                />
                <h3>Software Engineer</h3>
                <p>This is a test text please ensure things are right</p>
              </div>
            </div>
            {/* Single Service End */}
          </div>
          <div className="col-lg-4 col-sm-6">
            {/* Single Service Begin */}
            <div
              className="single-service text-center"
              style={{ minHeight: "auto" }}
            >
              <div className="content">
                <img
                  src="https://www.amzonestep.com/new/images/about-delivery.png"
                  style={{ height: "100px", marginBottom: "10px" }}
                />
                <h3>Hybird App developer</h3>
                <p>This is a test text please ensure things are right</p>
              </div>
            </div>
            {/* Single Service End */}
          </div>
        </div>
      </section>
      {/*Meet The Team*/}
      <section>
        <div className="container-fluid py-3">
          <div className="section-title text-center mt-4">
            <h2 className="text-orange">Meet The Team</h2>
            <p className="mt-2">
              Coming together is the beginning. Staying together is progress.
              Working together is success.
            </p>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-lg-3 mb-5">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <img
                      className="profile-picture"
                      src={test1}
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Aun Raza</h3>
                    <h4 className="profile-title">CEO &amp; Founder</h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src={test1}
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Aun Raza</h3>
                    <h4 className="profile-title">CEO &amp; Founder</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-5">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <img
                      className="profile-picture"
                      src={test1}
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Aun Raza</h3>
                    <h4 className="profile-title">CEO &amp; Founder</h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src={test1}
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Aun Raza</h3>
                    <h4 className="profile-title">CEO &amp; Founder</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 mb-5">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <img
                      className="profile-picture"
                      src={test1}
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Aun Raza</h3>
                    <h4 className="profile-title">CEO &amp; Founder</h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src={test1}
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Aun Raza</h3>
                    <h4 className="profile-title">CEO &amp; Founder</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-5">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <img
                      className="profile-picture"
                      src={test1}
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Aun Raza</h3>
                    <h4 className="profile-title">CEO &amp; Founder</h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src={test1}
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Aun Raza</h3>
                    <h4 className="profile-title">CEO &amp; Founder</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-5">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <img
                      className="profile-picture"
                      src={test1}
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Aun Raza</h3>
                    <h4 className="profile-title">CEO &amp; Founder</h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src={test1}
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Aun Raza</h3>
                    <h4 className="profile-title">CEO &amp; Founder</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-5">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <img
                      className="profile-picture"
                      src={test1}
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Aun Raza</h3>
                    <h4 className="profile-title">CEO &amp; Founder</h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src={test1}
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Aun Raza</h3>
                    <h4 className="profile-title">CEO &amp; Founder</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row justify-content-center">
            <div className="col-lg-3 mb-5">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Japneet.jpeg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Japneet kaur</h3>
                    <h4 className="profile-title">Project Coordinator</h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Japneet.jpeg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Japneet kaur</h3>
                    <h4 className="profile-title">Project Coordinator</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-5">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <img
                      className="profile-picture"
                      src="https://www.pngitem.com/pimgs/m/110-1104775_user-woman-business-woman-png-icon-transparent-png.png"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Mariah Johnson</h3>
                    <h4 className="profile-title">Project Coordinator</h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src="https://www.pngitem.com/pimgs/m/110-1104775_user-woman-business-woman-png-icon-transparent-png.png"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Mariah Johnson</h3>
                    <h4 className="profile-title">Project Coordinator</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-5">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Jackson.JPG"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Jackson Campbell</h3>
                    <h4 className="profile-title">Lead Photographer</h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Jackson.JPG"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Jackson Campbell</h3>
                    <h4 className="profile-title">Lead Photographer</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-5">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Madel.jpg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Madel Karamihan</h3>
                    <h4 className="profile-title">
                      Business Development Specialist
                    </h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Madel.jpg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Madel Karamihan</h3>
                    <h4 className="profile-title">
                      Business Development Specialist
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="row justify-content-center">
            <div className="col-lg-3 mb-5">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Loren.jpg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Lorena B. Tancuan</h3>
                    <h4 className="profile-title">
                      Business Development Specialist
                    </h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Loren.jpg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Lorena B. Tancuan</h3>
                    <h4 className="profile-title">
                      Business Development Specialist
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-5">
              <div className="flip-container">
                <div className="flipper">
                  <div className="front">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Sharoz.jpg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Sharoz Inayat</h3>
                    <h4 className="profile-title">
                      Business Development Specialist
                    </h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Sharoz.jpg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Sharoz Inayat</h3>
                    <h4 className="profile-title">
                      Business Development Specialist
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html:
            " .flip-container { margin: 0 auto; -webkit-perspective: 1000; -moz-perspective: 1000; /*float: left;*/ /*margin-right: 20px;*/ } .flip-container:hover .flipper { -webkit-transform: rotateY(180deg); -moz-transform: rotateY(180deg); } .flipper { /*-webkit-transition: 0.6s;*/ -webkit-transform-style: preserve-3d; /*-moz-transition: 0.6s;*/ -moz-transform-style: preserve-3d; position: relative; } .front, .back { -webkit-backface-visibility: hidden; -moz-backface-visibility: hidden; position: absolute; top: 0; left: 0; border: 1px solid #ccc; } .front { z-index: 1; background: #fff; } .flip-container, .front, .back { width: 300px; height: 400px; } .back { -webkit-transform: rotateY(-180deg); -moz-transform: rotateY(-180deg); /*background: #f6f6f6;*/ } .flip-padding { padding: 20px; } .profile-picture { width: 300px; height: 300px; } .profile-name, .profile-title { text-align: center; } .profile-name { font-size: 24px; margin-top: 20px; font-weight: 400; margin-bottom: 0px; } .profile-title { font-size: 16px; margin-top: 5px; font-weight: 300; color: #00B4A7; } .profile-devider { width: 100%; height: 4px !important; background: #07B288; position: relative; margin: 0 auto; margin-top: -4px; } .profile-devider:after { content:''; position: absolute; border-style: solid; border-width: 15px 15px 0; border-color: #07B288 transparent; display: block; width: 0; z-index: 1; left: 135px; } ",
        }}
      />
      {/*Meet The Team*/}
      <section style={{ backgroundColor: "#eee" }} className="mb-5">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-7 mx-auto">
              <i
                className="fa fa-quote-left"
                style={{ fontSize: "40px", marginBottom: "15px" }}
              />
              <p style={{ fontSize: "20px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
                <strong>“Test” Zain Orbit”</strong> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris
              </p>
              <hr
                style={{
                  width: "100px",
                  margin: "20px 0px",
                  borderWidth: "7px",
                  borderColor: "#00b4a7",
                }}
              />
              <h1> Aun Raza </h1>
              <h3 style={{ color: "#818181" }}> Founder </h3>
            </div>
            <div className="col-md-4">
              <img src={Aun} className="w-100" />
            </div>
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html:
            " .info-content h2 { line-height: 40px !important; } .widget .widget-logo, .widget .widget-title { margin-bottom: 15px; } @media only screen and (max-width: 991px){ .widget_contact_info{ padding-top: 250px !important; } }",
        }}
      />
      <WhatsApp />
      <Footer />
    </div>
  );
}
export default About;
