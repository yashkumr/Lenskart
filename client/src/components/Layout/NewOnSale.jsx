import React, { useState, useEffect, Fragment } from "react";
import Slider from "react-slick";
import "../../assets/customCss/NewOnSale.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";

export default function NewOnSale() {
  const [activeButton, setActiveButton] = useState("western");
  const [visibilities, setVisibilites] = useState([]);

  const handleButtonClick = async (buttonId) => {
    try {
      setActiveButton(buttonId);
      const { data } = await axios.get(
        `/api/v1/product/visible-product/${buttonId}`
      );
      console.log("data?.products", data?.products);
      setVisibilites(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleButtonClick("western");
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          <h1> NEW ON SALE</h1>
        </div>
        <div className="sale-tab-section">
          <button
            className={
              activeButton === "western" ? "active" : "sale-tab-button"
            }
            onClick={() => handleButtonClick("western")}
          >
            Western
          </button>
          <button
            className={activeButton === "men" ? "active" : "sale-tab-button"}
            onClick={() => handleButtonClick("men")}
          >
            Men
          </button>
          <button
            className={activeButton === "kids" ? "active" : "sale-tab-button"}
            onClick={() => handleButtonClick("kids")}
          >
            Kids
          </button>
          <button
            className={
              activeButton === "accessories" ? "active" : "sale-tab-button"
            }
            onClick={() => handleButtonClick("accessories")}
          >
            Accessories
          </button>
          <button
            className={
              activeButton === "unstiched" ? "active" : "sale-tab-button"
            }
            onClick={() => handleButtonClick("unstiched")}
          >
            Unstiched
          </button>
          <button
            className={activeButton === "home" ? "active" : "sale-tab-button"}
            onClick={() => handleButtonClick("home")}
          >
            Home
          </button>
          <button
            className={activeButton === "bear" ? "active" : "sale-tab-button"}
            onClick={() => handleButtonClick("bear")}
          >
            {" "}
            Ready To Bear
          </button>
        </div>

        <div style={{ backgroundColor: "rgb(233 233 233)" }}>
          <div
            className="slider-container "
            style={{ width: "95%", margin: "auto" }}
          >
            <Slider {...settings}>
              {visibilities.map((val, index) => {
                return (
                  <Fragment key={index}>
                    <div className="homeCardSlider">
                      {val.mainImages.map((picture) => (
                        <>
                          <img
                            src={`http://localhost:8000/${picture.img}`}
                            alt="images"
                          />
                        </>
                      ))}
                      <div>
                        <NavLink className="text-start">{val?.name}</NavLink>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
