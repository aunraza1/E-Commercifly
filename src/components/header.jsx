import React, { useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
export const scrollFunction = () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("header").style.backgroundColor = "black";
  } else {
    document.getElementById("header").style.backgroundColor = "transparent";
  }
};
function Header({ contact }) {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, [contact]);
  return (
    <header id="header" className="header fixed-top">
      <nav
        className={`navbar navbar-expand-lg navbar-dark mnav ${
          contact === "dontScroll" && "bg-dark"
        } `}
      >
        <Link to="/" className="navbar-brand ml-3" href="/">
          <img
            src="https://www.amzonestep.com/images/logo.png"
            className="logoResize"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler navMobile mr-3"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="fa fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav navContent navMobile ml-auto">
            <li>
              <Link to="/" href="#" data-toggle="search">
                <i className="glyphicon glyphicon-search" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to=""
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link to="/" className="dropdown-item" href="#">
                  Photography
                </Link>
                <Link to="/" className="dropdown-item" href="#">
                  Listing Image
                </Link>
                <Link to="/" className="dropdown-item" href="#">
                  Listing Contact
                </Link>{" "}
                <Link to="/" className="dropdown-item" href="#">
                  3D Render Image
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact us
              </Link>
            </li>
            <li style={{ padding: "10px 15px" }}>
              <Link to="/" className="freeListingBtn">Wordspy</Link>
            </li>
            <li style={{ padding: "10px 15px" }}>
              <Link to="/" className="freeListingBtn" target="_blank">
                Free Listing Audit
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
