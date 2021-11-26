import React, { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/header";
function Contact() {
  const [alertInfo, setAlertInfo] = useState({
    showAlert: false,
    alertTxt: "",
  });
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_a7jgbo7",
        "template_dancq5x",
        "#contactform",
        "user_vPdrrZgCJ1jwxffHlufwh"
      )
      .then(
        function (response) {
          setAlertInfo({
            ...alertInfo,
            showAlert: true,
            alertTxt: response.text,
          });
          e.target.reset();
          setTimeout(() => {
            setAlertInfo({ ...alertInfo, showAlert: false });
          }, 3000);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  const AlertWindow = () => {
    return (
      <div class="alert alert-success col-md-3">
        <strong>Success!</strong> {alertInfo.alertTxt}
      </div>
    );
  };
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            " /*.ml-auto, .mx-auto {*/ /* margin-left: auto!important;*/ /* background-color: #212529 !important;*/ /* padding: 0px 0px 0px 10px !important;*/ /*}*/ @media only screen and (min-width: 260px) { .navbar-dark .navbar-nav .nav-link { color: rgb(255, 255, 255) !important; padding: 26px 18px !important; line-height: 0px !important; } } @media only screen and (max-width: 990px) { .navbar-nav { display: -ms-flexbox; display: flex; -ms-flex-direction: column; flex-direction: column; padding-left: 0; margin-bottom: 0; list-style: none; background: #1b252f !important; } } @media (min-width: 1099px) { .navbar-expand-lg .navbar-collapse { display: flex; padding-top: 14px !important; flex-basis: auto; } } .freeListingBtn{ background-color: #fd7e14; border: none; color: white !important; padding: 10px 22px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; cursor: pointer; margin: -5px; transition-duration: 0.4s; font-weight: bold; } .freeListingBtn:hover { box-shadow: 0 12px 16px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%); color: white !important; }",
        }}
      />
      <Header contact="dontScroll" />
      <div className="row justify-content-center align-items-center marginFromTop">
        <div className="col-md-6 order-md-12">
          <form id="contactform" onSubmit={sendEmail}>
            <input type="hidden" name="_token" />
            <div className="card p-4">
              <div className="card-body">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="asin"
                    name="subject"
                    placeholder="Product ASIN"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    id="message"
                    className="form-label"
                  >
                    Write Us
                  </label>
                  <textarea
                    className="form-control"
                    rows={5}
                    name="message"
                    placeholder="Message"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="mb-3 text-right">
                  <input
                    type="submit"
                    className=" btn btn-primary btn-lg fs-14"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {alertInfo.showAlert && <AlertWindow />}
    </>
  );
}
export default Contact;
