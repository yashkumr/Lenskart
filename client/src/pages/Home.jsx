import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import Slider from "react-slick";
import SlickSlider from "../components/Layout/SlickSlider.jsx";
import Peyush from "../components/Layout/Peyush.jsx";
import NewOnSale from "../components/Layout/NewOnSale.jsx";
import NewArrival from "../components/Layout/NewArrival.jsx";
import Namita from "../components/Layout/Namita.jsx";
import Trending from "../components/Layout/Trending.jsx";
import Customer from "../components/Layout/Customer.jsx";
import GridIcons from "../components/Layout/GridIcons.jsx";
import Anupam from "../components/Layout/Anupam.jsx";


const Home = () => {
  return (
    <>
      <Layout title={"Home-page"}>
        <div className="lence-banner mb-5">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="../../public/images/Home/carousel1.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../../public/images/Home/carousel2.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../../public/images/Home/carousel3.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../../public/images/Home/carousel4.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../../public/images/Home/carousel5.webp"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* slickSlider */}

        <SlickSlider />

        {/* peyush */}
        <Peyush />

        {/* NewOnSale */}
        <NewOnSale />

        <Anupam />

        {/* NewArrival */}
        <NewArrival />

        {/* Namita */}
        <Namita />
        {/* Treding */}
        <Trending />
        {/* Customer */}
        <Customer />

        {/* GridIcons */}
        <div className="m-5">
          <GridIcons />
        </div>
      </Layout>
    </>
  );
};

export default Home;
