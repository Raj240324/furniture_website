import React from "react";
import "./CarouselComponent.css";
import { Carousel } from "react-bootstrap";
import SeventhPage from "../SeventhPage/SeventhPage";

const CarouselComponent = () => {
  return (
    <>
      <h1>WHAT OUR CUSTOMER SAYS</h1>
      <Carousel>
        <Carousel.Item>
          <div
            className="d-block w-100"
            style={{ height: "300px", backgroundColor: "rgb(219, 205, 178)" }}
          >
            <div className="carousel-caption d-none d-md-block">
              <h3>Beautiful Sofa Set</h3>
              <p>
                This sofa set has completely transformed our living room. It's
                stylish, comfortable, and incredibly durable. Highly recommend!
              </p>
              <span>Rubun Parker</span>
              <p>Java Developer</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-block w-100"
            style={{ height: "300px", backgroundColor: "rgb(79, 149, 39)" }}
          >
            <div className="carousel-caption d-none d-md-block">
              <h3>Elegant Dining Table</h3>
              <p>
                The dining table is a piece of art. The craftsmanship is
                exceptional and it's a perfect fit for our dining room. A
                wonderful purchase!
              </p>
              <span>HarisPattu</span>
              <p>Quality</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-block w-100"
            style={{ height: "300px", backgroundColor: "rgb(172, 36, 36)" }}
          >
            <div className="carousel-caption d-none d-md-block">
              <h3>Comfortable Bed</h3>
              <p>
                The bed we bought from this website is the most comfortable one
                we've ever had. It's like sleeping on a cloud. Worth every
                penny!
              </p>
              <span>Vignesh</span>
              <p>Kone</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <SeventhPage />
    </>
  );
};

export default CarouselComponent;
