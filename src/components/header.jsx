import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header id="header" className="header fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark mnav">
        <a className="navbar-brand ml-3" href="/">
          <img
            src="https://www.amzonestep.com/images/logo.png"
            className="logoResize"
            alt="logo"
          />
        </a>
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
              <a href="#" data-toggle="search">
                <i className="glyphicon glyphicon-search" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                Photography
                </a>
                <a class="dropdown-item" href="#">
                  Listing Image
                </a>
                <a class="dropdown-item" href="#">
                  Listing Contact
                </a> <a class="dropdown-item" href="#">
                  3D Render Image
                </a>
              </div>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link"
                
              >
                Portfolio
              </a>
            </li> */}
            <li className="nav-item">
              <Link to='/about' className="nav-link">About us</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact us</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" >
                Blog
              </a>
            </li> */}
            <li style={{ padding: "10px 15px" }}>
              <a className="freeListingBtn">Wordspy</a>
            </li>
            <li style={{ padding: "10px 15px" }}>
              <a className="freeListingBtn" target="_blank">
                Free Listing Audit
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
export default Header;
