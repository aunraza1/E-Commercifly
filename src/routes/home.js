import React, { useState } from "react";
import "../App.css";
import Header from "../components/header";
import "../App.css";
import Footer from "../components/footer";
// import { useNavigate } from "react-router-dom";
import WhatsApp from "../components/whatsapp";
import Carousel from "../components/carousel";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp} from "@fortawesome/free-brands-svg-icons";
function Home() {
  // const navigate = useNavigate();
  const [readMore, setReadMore] = useState({
    photography: false,
    listingImage: false,
    listingContact: false,
    DRendering: false,
  });
  return (
    <>
      <Header />
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
        <Carousel />
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
                    {readMore.photography === true
                      ? "This is a testing platform only all fields written here are at production level only!"
                      : ""}
                  </p>
                  <p
                    onClick={() =>
                      setReadMore({
                        ...readMore,
                        photography:
                          readMore.photography === false ? true : false,
                      })
                    }
                    className="btn-inline readmore-orange"
                  >
                    {readMore.photography === true ? "Read Less" : "Read More"}
                  </p>
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
                  <h4>Listing Image</h4>
                </div>
                {/* Icon End */}
                {/* Content Begin */}
                <div className="content">
                  <p>
                    We don't just take photos we bring your products to life.
                    Get your product photos better than your competitors!
                    Product photography is a single most important factor that
                    helps grow your product to highs.
                    {readMore.listingImage === true
                      ? "This is a testing platform only all fields written here are at production level only!"
                      : ""}
                  </p>
                  <p
                    onClick={() =>
                      setReadMore({
                        ...readMore,
                        listingImage:
                          readMore.listingImage === false ? true : false,
                      })
                    }
                    className="btn-inline readmore-orange"
                  >
                    {readMore.listingImage === true ? "Read Less" : "Read More"}
                  </p>
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
                  <h4>Listing Contact</h4>
                  {/* Icon End */}
                </div>
                <div className="content">
                  <p>
                    We don't just take photos we bring your products to life.
                    Get your product photos better than your competitors!
                    Product photography is a single most important factor that
                    helps grow your product to highs.
                    {readMore.listingContact === true
                      ? "This is a testing platform only all fields written here are at production level only!"
                      : ""}
                  </p>
                  <p
                    onClick={() =>
                      setReadMore({
                        ...readMore,
                        listingContact:
                          readMore.listingContact === false ? true : false,
                      })
                    }
                    className="btn-inline readmore-orange"
                  >
                    {readMore.listingContact === true
                      ? "Read Less"
                      : "Read More"}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-sm-6">
            
              <div className="single-service style--two">
             
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
          
              <div className="single-service style--two">
              
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
            </div> */}
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
                  <h4>3D Rendering</h4>
                </div>
                <div className="content">
                  <p>
                    We don't just take photos we bring your products to life.
                    Get your product photos better than your competitors!
                    Product photography is a single most important factor that
                    helps grow your product to highs.
                    {readMore.DRendering === true
                      ? "This is a testing platform only all fields written here are at production level only!"
                      : ""}
                  </p>
                  <p
                    onClick={() =>
                      setReadMore({
                        ...readMore,
                        DRendering:
                          readMore.DRendering === false ? true : false,
                      })
                    }
                    className="btn-inline readmore-orange"
                  >
                    {readMore.DRendering === true ? "Read Less" : "Read More"}
                  </p>
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
      {/* <div id="wordspy" />
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
      </div> */}
      {/* <section id="listing-optimzation">
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
      </section> */}
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
              backgroundImage:
                "url(https://www.amzonestep.com/new/images/home/amz-meeting.png)",
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
                  href="/"
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
                  href="/"
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
                  href="/"
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
                  href="/"
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
                  href="/
                "
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
                  href="/"
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
                className="btn btn-orange hover-shadow"
              >
                JOIN NOW
              </a>
            </div>
          </div>
        </div>

        {/* <FontAwesomeIcon
          style={{
            position: "fixed",
            bottom: 20,
            right: 0,
            height: 90,
            width: 200,
          }}
          color="#4FCE5D"
          icon={faWhatsapp}
        /> */}
        <WhatsApp />
      </div>

      <Footer />

      {/* KLAVIYO SIGN UP FORM SCRIPT */}
      {/* KLAVIYO SIGN UP FORM SCRIPT */}
      {/* TrustBox script */}
      {/* End TrustBox script */}
      {/* Google Tag Manager */}
      {/* End Google Tag Manager */}
    </>
  );
}
export default Home;
