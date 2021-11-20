import React from "react";
import { useEffect } from "react";
import "../App.css";
import Header from "../components/header";
import "../App.css";
import Footer from "../components/footer";

function Home() {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 10 ||
        document.documentElement.scrollTop > 10
      ) {
        document.getElementById("header").style.backgroundColor = "black";
      } else {
        document.getElementById("header").style.backgroundColor = "transparent";
      }
    }
  }, []);
  return (
    <>
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
      {/*For Sticky Header*/}
      {/*For Sticky Header*/}
      <Header />
      <style
        dangerouslySetInnerHTML={{
          __html:
            " .btn:disabled { opacity: 1; } @media only screen and (max-width: 600px) { #t5-img{ width: 100% !important; } } @media only screen and (max-width: 1200px) { .client_craousel { display: none !important; } } @media only screen and (max-width: 991px) { .respMeetBtn { width: 120px !important; } } .testImgRev{ width: 100%; } @media only screen and (max-width: 1000px) { #calendly-call { height: 1070px !important; margin-top: 3rem !important; } } .trustpilot-widget{ width: 65%; height: 120px; background: transparent; } @media only screen and (max-width: 768px) { .trustpilot-widget { width: 65%; } } ",
        }}
      />
      <section
        className="banner bg-overlay bg-img"
        style={{
          borderBottom: "0 solid #00b4a7",
          backgroundImage:
            'url("https://www.amzonestep.com/new/images/home/homebanner.webp")',
          backgroundSize: "100%",
          backgroundBlendMode: "color",
          backgroundColor: "#00000099",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="banner-content text-white text-center">
                <h1>
                  <span className="text-orange">Lorem Ipsum </span>Lorem ipsum
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum <br /> Professional Amazon Listing
                  Optimization Services to take your business to new heights.
                </p>
                <a
                  className="btn btn-orange hover-shadow text-center"
                  href="#calendly-call"
                  style={{ width: "250px !important" }}
                >
                  Get a Free Consultation
                </a>
              </div>
            </div>
            {/* TrustBox widget - Mini */}
            {/* <center>
              <div
                className="trustpilot-widget mt-2 mb-2"
                data-locale="en-US"
                data-template-id="53aa8807dec7e10d38f59f32"
                data-businessunit-id="5ce9a48bc165250001e46d29"
                data-style-height="150px"
                data-style-width="100%"
                data-theme="dark"
              >
                <a
                  href="https://www.trustpilot.com/review/amzonestep.com"
                  target="_blank"
                  rel="nofollow"
                >
                  Trustpilot
                </a>
              </div>
            </center> */}
            {/* End TrustBox widget */}
          </div>
        </div>
      </section>

      <section id="services" className=" pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <h2 className="text-orange">Our Services</h2>
                <p className="mt-2">
                  We're Providing Best Solutions For Your Business.
                </p>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              {/* Single Service Begin */}
              {/*Content End */}
              <div className="single-service style--two">
                {/* Icon Begin */}
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      width: "70px",
                      height: "70px",
                      background:
                        "url(https://www.amzonestep.com/new/images/css_sprites.png) -10px -820px",
                    }}
                  />
                  <h4>Photography</h4>
                </div>
                <div className="content">
                  <p>
                    We don't just take photos we bring your products to life.
                    Get your product photos better than your competitors!
                    Product photography is a single most important factor that
                    helps grow your product to highs.
                  </p>
                  <a
                    href="https://www.amzonestep.com/services/amazon-product-photography"
                    className="btn-inline readmore-orange"
                  >
                    Read More
                  </a>
                </div>
                {/* Single ServiceEnd */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* Single Service Begin */}
              <div className="single-service style--two">
                {/* Icon Begin */}
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      width: "70px",
                      height: "70px",
                      background:
                        "url(https://www.amzonestep.com/new/images/css_sprites.png) -10px -10px",
                    }}
                  />
                  <h4>Listing Optimization</h4>
                </div>
                {/* Icon End */}
                {/* Content Begin */}
                <div className="content">
                  <p>
                    Words that speak louder! Keyword rich content writing that
                    makes your listing standout. Let Amazon algorithm rank your
                    listing fast and make it visible to maximum number of
                    visitors.
                  </p>
                  <a
                    href="https://www.amzonestep.com/services/amazon-listing-optimization"
                    className="btn-inline readmore-orange"
                  >
                    Read More
                  </a>
                </div>
                {/* Content End */}
              </div>
              {/* Single Service End */}
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* Single Service Begin */}
              <div className="single-service style--two">
                {/* Icon Begin */}
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      width: "70px",
                      height: "70px",
                      background:
                        "url(https://www.amzonestep.com/new/images/css_sprites.png) -10px -280px",
                    }}
                  />
                  <h4>Pay-per-click Management</h4>
                  {/* Icon End */}
                </div>
                <div className="content">
                  <p>
                    We’re the industry’s prime PPC management agency, providing
                    sellers with top-notch PPC services that is made to reach a
                    wide spectrum of customers and enhance sales to a greater
                    extend.
                  </p>
                  <a
                    href="https://www.amzonestep.com/services/amazon-ppc-service"
                    className="btn-inline readmore-orange"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* Single Service Begin */}
              <div className="single-service style--two">
                {/* Icon Begin */}
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      width: "70px",
                      height: "70px",
                      background:
                        "url(https://www.amzonestep.com/new/images/css_sprites.png) -10px -100px",
                    }}
                  />
                  <h4>Enhanced Brand Content</h4>
                  {/* Icon End */}
                </div>
                <div className="content">
                  <p>
                    Get your Amazon product description visually rich and get
                    higher conversion rates. Convey your brand story through
                    text placements and enhanced images.
                  </p>
                  <a
                    href="https://www.amzonestep.com/services/amazon-enhanced-brand-content-service"
                    className="btn-inline readmore-orange"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* Single Service Begin */}
              <div className="single-service style--two">
                {/* Icon Begin */}
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      width: "70px",
                      height: "70px",
                      background:
                        "url(https://www.amzonestep.com/new/images/css_sprites.png) -10px -370px",
                    }}
                  />
                  <h4>Videography</h4>
                </div>
                <div className="content">
                  <p>
                    Get advantage of Amazon premium content and get noticed fast
                    with your product videos. Convey your message to your
                    customers efficiently and effectively in less time.
                  </p>
                  <a
                    href="https://www.amzonestep.com/services/amazon-product-video-services"
                    className="btn-inline readmore-orange"
                  >
                    Read More
                  </a>
                </div>
                {/* Content End */}
              </div>
              {/* Single Service End */}
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-service style--two">
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      width: "70px",
                      height: "70px",
                      background:
                        "url(https://www.amzonestep.com/new/images/css_sprites.png) -10px -190px",
                    }}
                  />
                  <h4>Accounts Management</h4>
                </div>
                <div className="content">
                  <p>
                    Free up your time and optimize your profitability with our
                    dynamic Account Management services that are to ensure your
                    account stays up to date while you work on the other
                    important matters of your business.
                  </p>
                  <a
                    href="https://www.amzonestep.com/services/amazon-account-management"
                    className="btn-inline readmore-orange"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-service style--two">
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      width: "70px",
                      height: "70px",
                      background:
                        "url(https://www.amzonestep.com/new/images/home/packaging-design-service-icon.webp)",
                    }}
                  />
                  <h4>Packaging Design</h4>
                </div>
                <div className="content">
                  <p>
                    Let us design effective product packaging that is ensured to
                    be appealing to your customers. We’ll create attractive
                    packaging that will help your product stand out and increase
                    your brand equity.
                  </p>
                  <a
                    href="https://www.amzonestep.com/services/product-packaging-design"
                    className="btn-inline readmore-orange"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-service style--two">
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      width: "70px",
                      height: "70px",
                      background:
                        "url(https://www.amzonestep.com/new/images/home/3d-rendering-service-icon.webp)",
                    }}
                  />
                  <h4>3D Rendering</h4>
                </div>
                <div className="content">
                  <p>
                    Bring your products to life with the help of our 3D rendered
                    images. Get hyper-realistic product models that are
                    cost-effective and can easily be turned into an animation.
                  </p>
                  <a
                    href="https://www.amzonestep.com/services/product-3d-rendering"
                    className="btn-inline readmore-orange"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-service style--two">
                <div style={{ display: "flex" }}>
                  <span
                    style={{
                      width: "70px",
                      height: "70px",
                      background:
                        "url(https://www.amzonestep.com/new/images/home/ranking-icon.webp)",
                      backgroundRepeat: "round",
                    }}
                  />
                  <h4>Amazon Ranking</h4>
                </div>
                <div className="content">
                  <p>
                    An advanced Tri-Ranking Solution that leverages PPC
                    Campaigns along with Ranking strategies, to get the products
                    in the top spots and help you expands your brand
                    exponentially.
                  </p>
                  <a
                    href="https://www.amzonestep.com/services/amazon-product-ranking"
                    className="btn-inline readmore-orange"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#132235" }}>
        <div className="container pt-30 ">
          <div className="row align-items-center">
            {/* Single Counter */}
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center">
                <div style={{ height: "80PX" }}>
                  <img
                    src="https://www.amzonestep.com/new/images/home/count1.webp"
                    width="90px"
                    alt="Listings Created"
                  />
                  <span
                    style={{
                      width: "70px",
                      height: "70px",
                      background:
                        "url(https://www.amzonestep.com/new/images/css_sprites.png) -10px -460px",
                    }}
                  />
                </div>
                <h2 className="count">
                  <span>1930</span>
                </h2>
                <p>Listings Created</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center">
                <div style={{ height: "80PX" }}>
                  <img
                    src="https://www.amzonestep.com/new/images/home/count2.webp"
                    width="90px"
                    alt="Images Designed"
                  />
                </div>
                <h2 className="count">
                  <span>48887</span>
                </h2>
                <p>Images Designed</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center">
                <div style={{ height: "80PX" }}>
                  <img
                    src="https://www.amzonestep.com/new/images/home/count3.webp"
                    width="90px"
                    alt="Accounts Managed"
                  />
                </div>
                <h2 className="count">
                  <span id="keywordTyped">498</span>
                </h2>
                <p>Accounts Managed</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-counter text-center">
                <div style={{ height: "80PX" }}>
                  <img
                    src="https://www.amzonestep.com/new/images/home/count4.webp"
                    width="90px"
                    alt="Campaigns managed"
                  />
                </div>
                <h2 className="count">
                  <span id="campaign">834</span>
                </h2>
                <p>Campaigns Managed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="wordspy" />
      <div className="wordspy-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="keyword-section-content">
                <h1>
                  Best Keyword Tool <br /> for Amazon
                </h1>
                <h4>Your search for best keyword is officially over!</h4>
                <ul>
                  <li>Most relevant keywords</li>
                  <li>Bid for right Keyword</li>
                  <li>Already sharpened</li>
                  <li>Rank fast</li>
                </ul>
              </div>
            </div>
            <div className="col-md-7">
              <img
                src="https://www.amzonestep.com/new/images/home/appon.webp"
                alt="appon"
              />
            </div>
          </div>
        </div>
      </div>
      <section id="listing-optimzation">
        <div className="listing-form" style={{ padding: "5%" }}>
          <div className="row">
            <div className="col-md-6 my-auto">
              <div className="container" style={{}}>
                <h1 style={{ marginBottom: "30px", lineHeight: "50px" }}>
                  Get Your Free Listing Optimization Audit
                </h1>
                <hr
                  style={{
                    width: "100px",
                    margin: "10px 0px",
                    border: "2px solid #02b0ae",
                  }}
                />
                <p style={{ fontSize: "23px" }}>
                  Simply enter your Listing URL or ASIN, name and email address
                  in the form and our expert will get back to you within 24
                  business hours. Our experts will analyze your market and score
                  your listing after looking at your listing, images, keywords
                  placement, etc. It's always great to find out areas of
                  improvement.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div style={{ padding: "7%" }}>
                <div>
                  <h3>What's your Amazon SEO Score?</h3>
                  <p>See how well your listing is optimized?</p>
                  <form action="https://www.amzonestep.com/home" method="post">
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="H7A70pCHKEmjrS7VWWodr5mVRJNi3xjXo9GOSl9t"
                    />
                    <div className="form-group">
                      <label>URL or ASIN</label>
                      <input
                        type="text"
                        name="asin"
                        className="form-control"
                        placeholder="Place your product URL or ASIN"
                        required
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="#"
                            name="email"
                            className="form-control"
                            placeholder="your email address"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Company</label>
                          <input
                            type="#"
                            name="company"
                            placeholder="Company Name"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        className="form-control"
                        spellCheck="false"
                        name="content"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group">
                      <div
                        className="g-recaptcha"
                        id="register-form"
                        data-sitekey="6LfrGcoZAAAAAD_AjJQYeltxTaGrMY4w8hlRs1-w"
                        data-callback="recaptchaCallback"
                        required
                      />
                    </div>
                    <div className="form-group" style={{ display: "none" }}>
                      <label htmlFor="faxonly">
                        Fax Only{" "}
                        <input type="checkbox" name="faxonly" id="faxonly" />
                      </label>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        id="submitBtn"
                        className="btn btn-orange"
                      >
                        {" "}
                        Submit{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="container">
          <div className="section-title text-center">
            <h2 className="text-orange">Our Blog</h2>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              {/* Single Blog Item Begin */}
              <div className="single-blog-style--two position-relative">
                {/* Blog Image Begin */}
                <div className="blog-image">
                  <img
                    src="https://www.amzonestep.com/new/images/home/blogs/11b-1.webp"
                    data-rjs={2}
                    alt="Sport Of Amazon"
                  />
                </div>
                {/* Blog Image End */}
                {/* Blog Content Begin */}
                <div className="blog-content border">
                  <p className="category">Amazon Seller Services</p>
                  <h4 className="blog-title">
                    <a href="https://www.amzonestep.com/blog/winning-at-the-sport-of-amazon-business-2019/">
                      Winning At The Sport Of Amazon Business 2020.
                    </a>
                  </h4>
                  <p className="blog-excerpt">
                    Rome wasn't built in a day. The progress of Rome in becoming
                    the most admirable city took ages. It takes time to create
                    something great...
                  </p>
                  <a
                    href="https://www.amzonestep.com/blog/winning-at-the-sport-of-amazon-business-2019/"
                    className="btn-inline readmore-orange"
                  >
                    Read More
                  </a>
                </div>
                {/* Blog Content End */}
              </div>
              {/* Single Blog Item End */}
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              {/* Single Blog Item Begin */}
              <div className="single-blog-style--two position-relative">
                {/* Blog Image Begin */}
                <div className="blog-image">
                  <img
                    src="https://www.amzonestep.com/new/images/home/blogs/10b.webp"
                    data-rjs={2}
                    alt="Product Reviews"
                  />
                </div>
                {/* Blog Image End */}
                {/* Blog Content Begin */}
                <div className="blog-content border">
                  <p className="category">Amazon Content</p>
                  <h4 className="blog-title">
                    <a href="https://www.amzonestep.com/blog/amazon-product-reviews-in-amazon-2020/">
                      How To Get Product Reviews In Amazon 2020?
                    </a>
                  </h4>
                  <p className="blog-excerpt">
                    Customers can make or break any business. That's why, they
                    are known as the lifeblood of any business...
                  </p>
                  <a
                    href="https://www.amzonestep.com/blog/amazon-product-reviews-in-amazon-2020/"
                    className="btn-inline readmore-orange"
                  >
                    Read More
                  </a>
                </div>
                {/* Blog Content End */}
              </div>
              {/* Single Blog Item End */}
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              {/* Single Blog Item Begin */}
              <div className="single-blog-style--two position-relative">
                {/* Blog Image Begin */}
                <div className="blog-image">
                  <img
                    src="https://www.amzonestep.com/new/images/home/blogs/8b.webp"
                    data-rjs={2}
                    alt="FAQ"
                  />
                </div>
                {/* Blog Image End */}
                {/* Blog Content Begin */}
                <div className="blog-content border">
                  <p className="category">Amazon Seller Services</p>
                  <h4 className="blog-title">
                    <a href="https://www.amzonestep.com/blog/commonly-asked-questions-about-amazon-fba/">
                      Commonly Asked Questions About Amazon FBA.
                    </a>
                  </h4>
                  <p className="blog-excerpt">
                    If you ask the majority, they would say the golden word
                    Financial Freedom. Indeed, Amazon is a valuable platform...
                  </p>
                  <a
                    href="https://www.amzonestep.com/blog/commonly-asked-questions-about-amazon-fba/"
                    className="btn-inline readmore-orange"
                  >
                    Read More
                  </a>
                </div>
                {/* Blog Content End */}
              </div>
              {/* Single Blog Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Meetup Section */}
      <div className="container py-5">
        <div className="row">
          <div
            className="col-md-6 py-4"
            id="meetUpBgImg"
            style={{
              backgroundImage: "url(/new/images/home/amz-meeting.png)",
              backgroundSize: "cover",
            }}
          >
            <div className="row py-5">
              <div className="col-md-12">
                <h1 className="text-orange text-center">Meetup Location</h1>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-md-6 text-center">
                <a
                  className=" btn btn-green hover-shadow respMeetBtn"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(120,186,160,0.3841911764705882) 0%, rgba(1,175,173,0.7091211484593838) 100%) !important",
                  }}
                >
                  Edmonton
                </a>
              </div>
              <div className="col-md-6 text-center">
                <a
                  className=" btn btn-green hover-shadow respMeetBtn"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(120,186,160,0.3841911764705882) 0%, rgba(1,175,173,0.7091211484593838) 100%) !important",
                  }}
                >
                  Chicago
                </a>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-md-6 text-center">
                <a
                  className=" btn btn-green hover-shadow respMeetBtn"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(120,186,160,0.3841911764705882) 0%, rgba(1,175,173,0.7091211484593838) 100%) !important",
                  }}
                >
                  Toronto
                </a>
              </div>
              <div className="col-md-6 text-center">
                <a
                  className=" btn btn-green hover-shadow respMeetBtn"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(120,186,160,0.3841911764705882) 0%, rgba(1,175,173,0.7091211484593838) 100%) !important",
                  }}
                >
                  Calgary
                </a>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-md-6 text-center">
                <a
                  className=" btn btn-green hover-shadow respMeetBtn"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(120,186,160,0.3841911764705882) 0%, rgba(1,175,173,0.7091211484593838) 100%) !important",
                  }}
                >
                  Montreal
                </a>
              </div>
              <div className="col-md-6 text-center">
                <a
                  className="btn btn-green hover-shadow respMeetBtn"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(120,186,160,0.3841911764705882) 0%, rgba(1,175,173,0.7091211484593838) 100%) !important",
                  }}
                >
                  Vancouver
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 py-4 bg-muted"
            style={{ backgroundColor: "#eee" }}
          >
            <img
              src="https://www.amzonestep.com/new/images/home/social-proof.png"
              className="img-responsive"
              alt="AMZ Social Proof"
            />
            <br />
            <h4 className="text-center">
              Join Us Now for the Latest Updates &amp; Feeds
            </h4>
            <br />
            <div className="text-center">
              <a
                href="https://www.facebook.com/groups/1885088548483880/"
                target="_blank"
                className="btn btn-orange hover-shadow"
              >
                JOIN NOW
              </a>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            " .info-content h2 { line-height: 40px !important; } .widget .widget-logo, .widget .widget-title { margin-bottom: 15px; } @media only screen and (max-width: 991px){ .widget_contact_info{ padding-top: 250px !important; } }",
        }}
      />
<Footer/>
      {/* KLAVIYO SIGN UP FORM SCRIPT */}
      {/* KLAVIYO SIGN UP FORM SCRIPT */}
      {/* TrustBox script */}
      {/* End TrustBox script */}
      {/* Google Tag Manager */}
      {/* End Google Tag Manager */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            " @media only screen and (min-width: 600px) { .navbar-dark .navbar-nav .nav-link { color: rgb(255, 255, 255) !important; padding: 0px 6px; line-height: 100px; } } @media only screen and (min-width: 768px) { .navbar-dark .navbar-nav .nav-link { color: rgb(255, 255, 255) !important; padding: 0px 15px; line-height: 100px; } } .hover-shadow { display: inline-block; position: relative; transition-duration: 0.2s; transition-property: transform; -webkit-tap-highlight-color: transparent; transform: translateZ(0); } .hover-shadow:hover { transform: translateY(-6px); animation-name: hover; animation-duration: 1s; animation-delay: 0.2s; animation-timing-function: linear; animation-iteration-count: infinite; animation-direction: alternate; } .single-service h4 { margin: auto 20px !important; } .vertical-btn { position: fixed; right: -95px !important; top: 50%; transform: rotate(-90deg); z-index: 99999999; } .diagonal { width: 88%; height: 100%; background-color: #00b4a7; transform: skewX(30deg); transform-origin: top; /* Zentriert den Inhalt */ display: flex; justify-content: center; align-items: center; margin: auto; } .diagonal > span { transform: skewX(-30deg); color: white; font-size: 28px; font-weight: 800; } .carousel-control-next, .carousel-control-prev { position: absolute; top: 0; bottom: 0; margin: 0px 0px !important; display: -ms-flexbox; display: flex; -ms-flex-align: center; font-size: 40px !important; align-items: center; -ms-flex-pack: center; justify-content: center; color: #333 !important; width: 25px !important; text-align: center; opacity: 0.8 !important; } .carousel { width: 90% !important; } .bg-hover-gradient, .pagination li a, .pagination li span, .widget.widget_tag_cloud .tagcloud a, .single-service.style--two, .pricing-navtab .nav-tabs .nav-link { position: relative; z-index: 1; min-height: 390px !important; overflow: hidden; } .btn-inline:after { position: absolute; left: calc(100% + 10px); height: 1px; width: 20px; content: ''; background-color: #f5812a; top: 50%; -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); transform: translateY(-50%); } .readmore-orange { color: #f5812a; } .single-counter h2 { font-size: 60px; margin-bottom: 10px; margin-top: 10px; color: white !important; } .content p { line-height: 25px; margin-top: 13px; } .single-counter h2 { font-size: 60px; margin-bottom: 10px; margin-top: 20px; color: white !important; } /*AMRIC */ .single-counter img { background-color: #090e1661; border-radius: 100%; padding: 10px; margin-bottom: 10px; } .navbar-nav .nav-item { border-bottom: 5px solid transparent; } .btn-header:hover { background-color: #f5812a; color: white; border-color: #f5812a; } .btn-header { background: transparent; padding: 8px 15px; color: #f5812a; margin: 5px; border: 1px solid; } .single-service.style--two:after { background: #132235 !important; } .single-service.style--two:hover .readmore-orange, .single-service.style--two:hover .readmore-orange:after { color: #ffa25c !important; } .single-service.style--two:hover .btn-inline:after { background-color: #ffa25c !important; } .bg-hover-gradient, .pagination li a, .pagination li span, .widget.widget_tag_cloud .tagcloud a, .single-service.style--two, .pricing-navtab .nav-tabs .nav-link { position: relative; z-index: 1; min-height: 302px !important; overflow: hidden; padding: 30px; } .content p { line-height: 20px; margin-top: 5px; margin-bottom: 10px; font-size: 16px; } .vertical-btn { position: fixed; right: -85px !important; top: 50%; transform: rotate(-90deg); z-index: 99999999; } .carousel { margin: 10px auto; padding: 0 40px; } .single-blog-style--two .blog-content.border { border: 1px solid #f3f3f3 !important; background-color: white; min-height: 330px; } .listing-form { padding: 0px; } .testimonials .carousel-item { min-height: 470px !important;} .feild-new { background-color: #616161; color: black; } ::placeholder { color: #bdbaba !important; } .form-control:focus { color: black; background-color: #616161; border-color: #80bdff; outline: 0; box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25); } a.btn-outline-primary { border: 1px solid #f5812a; color: #f5812a; padding: 10px 7px; border-color: #f5812a; } .btn-outline-primary:hover { background: #f5812a !important; color: white; border-color: #f5812a; } .header .header-main.style--one .main-menu .nav > li > .btn-outline-grey { line-height: 20px !important; position: relative; } .nav .menu-link:hover { background-color: #247369; border-bottom: 5px solid #f5812a !important; } .header .header-main.style--one .main-menu .nav > li { display: inline-block; padding: 0 17px; border-bottom: 5px solid #ffffff00; } .scale-up-ver-bottom { -webkit-animation: scale-up-ver-bottom 700ms cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate-reverse; animation: scale-up-ver-bottom 700ms cubic-bezier(0.390, 0.575, 0.565, 1.000) infinite alternate-reverse; } @-webkit-keyframes scale-up-ver-bottom { 0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; } 100% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; } } @keyframes scale-up-ver-bottom { 0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; } 100% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; } } .header .header-main.sticky { background-image: url(https://www.amzonestep.com/new/images/stickybg.jpg) !important; -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); } .header .sticky .main-menu .menu-link a { color: white !important; } .header .sticky .main-menu .btn-outline-primary { color: white !important; } .header .nav .sub-menu { background-color: #0c0d0f !important; } .header .sticky .nav .sub-menu { background-color: #0c0d0f !important; } .header .sticky .nav { background-color: #0c0d0f !important; } .widget ul:not(.social_icon_list) li a::before { font-family: FontAwesome; content: \"\"; margin-right: 10px; } .header .header-main.style--one .main-menu .nav li ul { position: absolute; left: 0; top: -2000px; opacity: 0; visibility: hidden; background-color: #fff; width: 270px !important; } .p-40{ padding: 40px; } .p-20{ padding: 20px; } .p-10{ padding: 10px; } body.modal-open .container { filter: blur(2px); } .carousel .carousel-control { width: 50px!important; height: 50px!important; margin-top: -20px; top: 30% !important; border-radius: 100%; background: #ff6d2c!important; } .testimonials .carousel-item { min-height: 345px !important; } .brand-logo img:hover { filter: grayscale(0); } .brand-logo img { filter: grayscale(1); opacity: 1 !important; } .brand-logo img { width: auto!important; margin: 0 auto; opacity: .4; }",
        }}
      />
    </>
  );
}
export default Home;
