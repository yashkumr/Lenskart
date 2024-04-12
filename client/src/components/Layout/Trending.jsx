import React, { useState, useEffect, Fragment} from "react";
import Slider from "react-slick";
import "../../../public/customCss/Trending.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, NavLink ,useParams} from "react-router-dom";

const Trending = () => {
  const [trendingButton, setTrendingButton] = useState("trending");
  const[trendingProducts, setTrendingProducts] = useState([]);

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
  
  useEffect(()=>{
      handleButtonClick("trending");
  },[])
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
        {/* <button
            className={
              trendingButton === "trending" ? "active" : "sale-tab-button"
            }
            onClick={() => handleButtonClick("trending")}
          >
            Western
          </button> */}

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
                      {/* <img  src={`../../../public/uploads/${val.img}`} alt="image"  /> */}

                      {val.productPictures.map((picture) => (
                        <div className="productImgContainer">
                          <img
                            src={`../../../public/uploads/${picture.img}`}
                            alt="images"
                          />
                        </div>
                      ))}
                      <div>
                        <NavLink>{val?.name}</NavLink>
                      </div>
                    </div>
                  </Fragment>
                );
              })}
              {/* <div className="homeCardSlider">
                <img src="../../../public/images/Trending/1.webp" alt="image" />
                <div>
                  <NavLink> Gents Febric</NavLink>
                  <p>Upto 40% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img src="../../../public/images/Trending/2.jpg" alt="image" />
                <div>
                  <NavLink> Mens</NavLink>
                  <p>Upto 30% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img src="../../../public/images/Trending/3.jpg" alt="image" />
                <div>
                  <NavLink> Pillow</NavLink>
                  <p>Upto 50% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img src="../../../public/images/Trending/4.webp" alt="image" />
                <div>
                  <NavLink> Girls Febric</NavLink>
                  <p>Upto 40% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img src="../../../public/images/Trending/5.webp" alt="image" />
                <div>
                  <NavLink> Gents Febric</NavLink>
                  <p>Upto 80% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img src="../../../public/images/Trending/6.jpg" alt="image" />
                <div>
                  <NavLink> Towel</NavLink>
                  <p>Upto 70% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img src="../../../public/images/Trending/7.webp" alt="image" />
                <div>
                  <NavLink> Boys Shirt</NavLink>
                  <p>Upto 40% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img src="../../../public/images/Trending/8.webp" alt="image" />
                <div>
                  <NavLink> Weomen western Bear</NavLink>
                  <p>Upto 40% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img src="../../../public/images/Trending/9.webp" alt="image" />
                <div>
                  <NavLink> Weomen western Bear</NavLink>
                  <p>Upto 40% offf</p>
                </div>
              </div>
              <div className="homeCardSlider">
                <img
                  src="../../../public/images/Trending/11.webp"
                  alt="image"
                />
                <div>
                  <NavLink> Weomen western Bear</NavLink>
                  <p>Upto 40% offf</p>
                </div>
              </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
