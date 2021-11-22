/* eslint-disable jsx-a11y/alt-text */
import Header from "../components/header";
import Footer from "../components/footer";


function About() {
 
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            " @media only screen and (min-width: 600px) { .navbar-dark .navbar-nav .nav-link { color: rgb(255, 255, 255) !important; padding: 0px 6px; line-height: 100px; } } @media only screen and (min-width: 768px) { .navbar-dark .navbar-nav .nav-link { color: rgb(255, 255, 255) !important; padding: 0px 15px; line-height: 100px; } } .hover-shadow { display: inline-block; position: relative; transition-duration: 0.2s; transition-property: transform; -webkit-tap-highlight-color: transparent; transform: translateZ(0); } .hover-shadow:hover { transform: translateY(-6px); animation-name: hover; animation-duration: 1s; animation-delay: 0.2s; animation-timing-function: linear; animation-iteration-count: infinite; animation-direction: alternate; } .single-service h4 { margin: auto 20px !important; } .vertical-btn { position: fixed; right: -95px !important; top: 50%; transform: rotate(-90deg); z-index: 99999999; } .diagonal { width: 88%; height: 100%; background-color: #00b4a7; transform: skewX(30deg); transform-origin: top; /* Zentriert den Inhalt */ display: flex; justify-content: center; align-items: center; margin: auto; } .diagonal > span { transform: skewX(-30deg); color: white; font-size: 28px; font-weight: 800; } .carousel-control-next, .carousel-control-prev { position: absolute; top: 0; bottom: 0; margin: 0px 0px !important; display: -ms-flexbox; display: flex; -ms-flex-align: center; font-size: 40px !important; align-items: center; -ms-flex-pack: center; justify-content: center; color: #333 !important; width: 25px !important; text-align: center; opacity: 0.8 !important; } .carousel { width: 90% !important; } .bg-hover-gradient, .pagination li a, .pagination li span, .widget.widget_tag_cloud .tagcloud a, .single-service.style--two, .pricing-navtab .nav-tabs .nav-link { position: relative; z-index: 1; min-height: 390px !important; overflow: hidden; } .btn-inline:after { position: absolute; left: calc(100% + 10px); height: 1px; width: 20px; content: ''; background-color: #f5812a; top: 50%; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); } .readmore-orange { color: #f5812a; } .single-counter h2 { font-size: 60px; margin-bottom: 10px; margin-top: 10px; color: white !important; } .content p { line-height: 25px; margin-top: 13px; } .single-counter h2 { font-size: 60px; margin-bottom: 10px; margin-top: 20px; color: white !important; } /*AMRIC */ .single-counter img { background-color: #090e1661; border-radius: 100%; padding: 10px; margin-bottom: 10px; } .navbar-nav .nav-item { border-bottom: 5px solid transparent; } .btn-header:hover { background-color: #f5812a; color: white; border-color: #f5812a; } .btn-header { background: transparent; padding: 8px 15px; color: #f5812a; margin: 5px; border: 1px solid; } .single-service.style--two:after { background: #132235 !important; } .single-service.style--two:hover .readmore-orange, .single-service.style--two:hover .readmore-orange:after { color: #ffa25c !important; } .single-service.style--two:hover .btn-inline:after { background-color: #ffa25c !important; } .bg-hover-gradient, .pagination li a, .pagination li span, .widget.widget_tag_cloud .tagcloud a, .single-service.style--two, .pricing-navtab .nav-tabs .nav-link { position: relative; z-index: 1; min-height: 302px !important; overflow: hidden; padding: 30px; } .content p { line-height: 20px; margin-top: 5px; margin-bottom: 10px; font-size: 16px; } .vertical-btn { position: fixed; right: -85px !important; top: 50%; transform: rotate(-90deg); z-index: 99999999; } .carousel { margin: 10px auto; padding: 0 40px; } .single-blog-style--two .blog-content.border { border: 1px solid #f3f3f3 !important; background-color: white; min-height: 330px; } .listing-form { padding: 0px; } .testimonials .carousel-item { min-height: 470px !important;} .feild-new { background-color: #616161; color: black; } ::placeholder { color: #bdbaba !important; } .form-control:focus { color: black; background-color: #616161; border-color: #80bdff; outline: 0; box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25); } a.btn-outline-primary { border: 1px solid #f5812a; color: #f5812a; padding: 10px 7px; border-color: #f5812a; } .btn-outline-primary:hover { background: #f5812a !important; color: white; border-color: #f5812a; } .header .header-main.style--one .main-menu .nav > li > .btn-outline-grey { line-height: 20px !important; position: relative; } .nav .menu-link:hover { background-color: #247369; border-bottom: 5px solid #f5812a !important; } .header .header-main.style--one .main-menu .nav > li { display: inline-block; padding: 0 17px; border-bottom: 5px solid #ffffff00; } .scale-up-ver-bottom { -webkit-animation: scale-up-ver-bottom 700ms cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate-reverse; animation: scale-up-ver-bottom 700ms cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate-reverse; } @-webkit-keyframes scale-up-ver-bottom { 0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; } 100% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; } } @keyframes scale-up-ver-bottom { 0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; } 100% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; } } .header .header-main.sticky { background-image: url(https://www.amzonestep.com/new/images/stickybg.jpg) !important; -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); } .header .sticky .main-menu .menu-link a { color: white !important; } .header .sticky .main-menu .btn-outline-primary { color: white !important; } .header .nav .sub-menu { background-color: #0c0d0f !important; } .header .sticky .nav .sub-menu { background-color: #0c0d0f !important; } .header .sticky .nav { background-color: #0c0d0f !important; } .widget ul:not(.social_icon_list) li a::before { font-family: FontAwesome; content: \"\"; margin-right: 10px; } .header .header-main.style--one .main-menu .nav li ul { position: absolute; left: 0; top: -2000px; opacity: 0; visibility: hidden; background-color: #fff; width: 270px !important; } .p-40{ padding: 40px; } .p-20{ padding: 20px; } .p-10{ padding: 10px; } body.modal-open .container { filter: blur(2px); } .carousel .carousel-control { width: 50px!important; height: 50px!important; margin-top: -20px; top: 30% !important; border-radius: 100%; background: #ff6d2c!important; } .testimonials .carousel-item { min-height: 345px !important; } .brand-logo img:hover { filter: grayscale(0); } .brand-logo img { filter: grayscale(1); opacity: 1 !important; } .brand-logo img { width: auto!important; margin: 0 auto; opacity: .4; }",
        }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html:
            " /*.ml-auto, .mx-auto {*/ /* margin-left: auto!important;*/ /* background-color: #212529 !important;*/ /* padding: 0px 0px 0px 10px !important;*/ /*}*/ @media only screen and (min-width: 260px) { .navbar-dark .navbar-nav .nav-link { color: rgb(255, 255, 255) !important; padding: 26px 18px !important; line-height: 0px !important; } } @media only screen and (max-width: 990px) { .navbar-nav { display: -ms-flexbox; display: flex; -ms-flex-direction: column; flex-direction: column; padding-left: 0; margin-bottom: 0; list-style: none; background: #1b252f !important; } } @media (min-width: 1099px) { .navbar-expand-lg .navbar-collapse { display: flex; padding-top: 14px !important; flex-basis: auto; } } .freeListingBtn{ background-color: #fd7e14; border: none; color: white !important; padding: 10px 22px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; cursor: pointer; margin: -5px; transition-duration: 0.4s; font-weight: bold; } .freeListingBtn:hover { box-shadow: 0 12px 16px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%); color: white !important; }",
        }}
      />

      <Header />
      <link
        rel="stylesheet"
        href="https://www.amzonestep.com/new/css/custom.css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            " @media only screen and (min-width: 768px) { .banner-mod-text { font-size: 60px !important; } } /*********************** Demo - 6 *******************/ .box6{background:#000;position:relative;margin-bottom: 65px;} .box6:after{background:rgba(0,0,0,.7);position:absolute;top:0;left:-30%;bottom:0;right:70%;transform:skew(20deg) translateX(-75%)} .box6:hover:after{transform:skew(20deg) translateX(0)} .box6 img{width:100%;height:auto} .box6:hover img{opacity:.2} .box6 .box-content{padding:20px;text-align:left;position:absolute;top:0;right:0;z-index:1} .box6 .icon,.box7 .icon{padding:0;list-style:none} .box10 .icon a,.box11,.box12,.box13,.box14,.box6 .icon li a,.box7,.box7 .icon li a,.box8,.box8 .icon li a{text-align:center} .box6 .title{font-size:20px;font-weight:900;color:#fff;margin:0 0 10px;transform:scale(0)} .box6:hover .title{transform:scale(1)} .box6 .icon a,.box6 .post{opacity:0;transform:translateX(40px);transition:all .35s ease 0s} .box6 .post{display:block;font-size:14px;color:#fff;margin-bottom:5px} .box6 .icon{display:inline-block;margin:0} .box6:hover .icon a,.box6:hover .post{opacity:1;transform:translateX(0)} .box6:hover .icon a:first-child{transition-delay:.1s} .box6:hover .icon li:nth-child(2){transition-delay:.2s} .box6 .icon a{display:block;width:35px;height:35px;line-height:35px;background:#fff;font-size:18px;color:#605f5f;margin-bottom:5px;transition:all .35s ease} .box6 .icon a:hover{background:#605f5f;color:#fff} .title-box{ position: absolute; min-width: 80%; left: 10%; text-align: center; background: white; margin-top: -20px; padding: 10px; border-radius: 10px; box-shadow: 0 5px 40px rgba(0, 0, 0, 0.05); } @media only screen and (max-width: 990px) { .box6 { margin-bottom: 65px !important; } } @media only screen and (max-width: 768px){ .about-section-heading{ font-size: 25px; line-height: 35px; } } ",
        }}
      />
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
          AMZ ONE STEP
        </h3>
        <h1 className="about-section-heading">
          We Incorporate The Finest
          <br /> To Attain Excellence
        </h1>
        <div className="row py-4">
          <div className="col-md-6">
            <p className="mt-0" style={{ fontSize: "1rem" }}>
              AMZ One Step has been in the online service since 2017 with a
              group of experienced e-commerce experts having an astute
              understanding of the online business framework’s dependence on
              quality-driven listing creation and optimization. Product
              photography is considered its prime real estate and is given the
              utmost priority by our team of experts. Enhanced images can
              increase the click conversion and translate into accelerated
              sales. In a highly competitive market like Amazon, product
              visibility determines the market share and if your listing is not
              enticing to the customer, it will not be able to compete. Keeping
              all this in mind, we hold ourselves to a high standard and are
              committed to delivering on our mission.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src="https://www.amzonestep.com/new/images/about.png"
              alt=""
              style={{ minHeight: "100%" }}
            />
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
                <h3>We Commit</h3>
                <p>
                  Our team of specialists is committed to producing the best
                  results in order to make your product a success.
                </p>
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
                <h3>We Research</h3>
                <p>
                  Our experts know how important market research is! No work is
                  done without extensive research of market trends.
                </p>
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
                <h3>We Deliver</h3>
                <p>
                  The quality of our work and your time are both of tremendous
                  importance to us. We deliver the best results promptly!
                </p>
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
                      src="https://www.amzonestep.com/new/images/amzteam/Kamal1.jpeg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Kamaljit Singh</h3>
                    <h4 className="profile-title">CEO &amp; Founder</h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Kamal1.jpeg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Kamaljit Singh</h3>
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
                      src="https://www.amzonestep.com/new/images/amzteam/Saddam.jpg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Saddam Hasan</h3>
                    <h4 className="profile-title">Founder &amp; COO</h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Saddam.jpg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Saddam Hasan</h3>
                    <h4 className="profile-title">Founder &amp; COO</h4>
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
                      src="https://www.amzonestep.com/new/images/amzteam/Curtis.jpg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Curtis Schick</h3>
                    <h4 className="profile-title">Customer Success Manager</h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Curtis.jpg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Curtis Schick</h3>
                    <h4 className="profile-title">Customer Success Manager</h4>
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
                      src="https://www.amzonestep.com/new/images/amzteam/Dave.jpg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Dave Zmyndak</h3>
                    <h4 className="profile-title">Customer Success Manager</h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Dave.jpg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Dave Zmyndak</h3>
                    <h4 className="profile-title">Customer Success Manager</h4>
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
                      src="https://www.amzonestep.com/new/images/amzteam/Nalon.jpg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Nolan Koziol</h3>
                    <h4 className="profile-title">Amazon SEO Specialist</h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Nalon.jpg"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Nolan Koziol</h3>
                    <h4 className="profile-title">Amazon SEO Specialist</h4>
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
                      src="https://www.amzonestep.com/new/images/amzteam/Shyanne.png"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Shyanne MacDonald</h3>
                    <h4 className="profile-title">
                      Image Optimization Specialist
                    </h4>
                  </div>
                  <div className="back">
                    <img
                      className="profile-picture"
                      src="https://www.amzonestep.com/new/images/amzteam/Shyanne.png"
                      width="300px"
                      height="300px"
                    />
                    <div className="profile-devider" />
                    <h3 className="profile-name">Shyanne MacDonald</h3>
                    <h4 className="profile-title">
                      Image Optimization Specialist
                    </h4>
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
          </div>
          <div className="row justify-content-center">
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
          </div>
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
                To enable sellers to achieve the ideal product placement and
                help their brand earn the{" "}
                <strong>“Best Seller” or “Amazon Choice”</strong> tag, enhancing
                the listing’s content and enabling the product realize its
                potential. To aid those sellers who are trying to enter the
                market by dominating the competition.
              </p>
              <hr
                style={{
                  width: "100px",
                  margin: "20px 0px",
                  borderWidth: "7px",
                  borderColor: "#00b4a7",
                }}
              />
              <h1> Kamaljit Singh </h1>
              <h3 style={{ color: "#818181" }}> Founder </h3>
            </div>
            <div className="col-md-4">
              <img
                src="https://www.amzonestep.com/new/images/Kamaljit-singh.png"
                className="w-100"
              />
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
      <Footer />
    </div>
  );
}
export default About;
