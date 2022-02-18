import React from "react";
import "../App.css";

function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://icms-image.slatic.net/images/ims-web/21b8301e-1a01-4b31-b456-2504eeb50f2c.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://icms-image.slatic.net/images/ims-web/82ab9cd9-6bbe-4414-a006-df997caa6c56.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://icms-image.slatic.net/images/ims-web/18433130-df99-4ff4-896f-625ad56a6caa.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}
export default Carousel;
