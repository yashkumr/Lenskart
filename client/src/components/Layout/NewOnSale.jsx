import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../../../public/customCss/NewOnSale.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";

const NewOnSale = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <div className="homeCardSlider-top mt-5">
          <h1> SHOP BY POPULAR CATEGORY</h1>
        </div>

        <div style={{ backgroundColor: "rgb(233 233 233)" }}>
          <div
            className="slider-container "
            style={{ width: "95%", margin: "auto" }}
          >
            <Slider {...settings}>
              <div className="homeCardSlider">
                <img src="../../../public/images/NewOnSale/1.jpg" alt="image" />
                <div>
                  <NavLink> Gents Febric</NavLink>
                  <p>Upto 40% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img src="../../../public/images/NewOnSale/2.jpg" alt="image" />
                <div>
                  <NavLink> Mens</NavLink>
                  <p>Upto 30% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img src="../../../public/images/NewOnSale/3.jpg" alt="image" />
                <div>
                  <NavLink> Pillow</NavLink>
                  <p>Upto 50% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img src="../../../public/images/NewOnSale/4.jpg" alt="image" />
                <div>
                  <NavLink> Girls Febric</NavLink>
                  <p>Upto 40% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img
                  src="../../../public/images/NewOnSale/5.webp"
                  alt="image"
                />
                <div>
                  <NavLink> Gents Febric</NavLink>
                  <p>Upto 80% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img
                  src="../../../public/images/NewOnSale/6.webp"
                  alt="image"
                />
                <div>
                  <NavLink> Towel</NavLink>
                  <p>Upto 70% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img
                  src="../../../public/images/NewOnSale/7.webp"
                  alt="image"
                />
                <div>
                  <NavLink> Boys Shirt</NavLink>
                  <p>Upto 40% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img src="../../../public/images/NewOnSale/8.jpg" alt="image" />
                <div>
                  <NavLink> Weomen western Bear</NavLink>
                  <p>Upto 40% offf</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewOnSale;
