import React, { useState, useEffect, Fragment } from "react";
import Slider from "react-slick";
import "../../assets/customCss/Trending.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";

const Trending = () => {
  const [trendingButton, setTrendingButton] = useState("trending");
  const [trendingProducts, setTrendingProducts] = useState([]);

  const handleButtonClick = async (buttonId) => {
    try {
      setTrendingButton(buttonId);
      const { data } = await axios.get(
        `/api/v1/product/visible-product/${buttonId}`
      );
      console.log("data?.products", data?.products);
      setTrendingProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleButtonClick("trending");
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
          <h1> TRENDING</h1>
        </div>
        

        <div style={{ backgroundColor: "rgb(233 233 233)" }}>
          <div
            className="slider-container "
            style={{ width: "90%", margin: "auto" }}
          >
            <Slider {...settings}>
              {trendingProducts.map((val, index) => {
                return (
                  <Fragment key={index}>
                    <div className="homeCardSlider">
                      {val.mainImages.map((picture) => (
                        <>
                          <img
                            src={`${import.meta.env.VITE_REACT_APP_MAIN_URL}${picture.img}`}
                            alt="images"
                          />
                        </>
                      ))}
                      <div>
                        <NavLink>{val?.name}</NavLink>
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
};

export default Trending;
