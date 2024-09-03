import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import { IoIosArrowForward } from "react-icons/io";
import "../assets/customCss/Main.css";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setSingleProduct(data?.product);

      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  const productsArray = Array.isArray(singleProduct)
    ? singleProduct
    : [singleProduct];

  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout title={"Product-Details"}>
        <div className="product-details-responsive">
          <div className="main-info">
            <div className="quick-info">
              <ul>
                <li>
                  <NavLink to="/">
                    Home
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    {singleProduct.name}
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    {singleProduct?.category?.name}
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink>{singleProduct?.description}</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div>
            {productsArray?.map((sp) => (
              <>
                <div className="lence-cart">
                  <div className="lence-cart-section">
                    <div>
                      {sp &&
                        sp?.mainImages.map((picture) => (
                          <>
                            <img
                              src={`${import.meta.env.VITE_REACT_APP_MAIN_URL}${
                                picture.img
                              }`}
                              alt="images"
                            />
                          </>
                        ))}
                    </div>
                  </div>

                  <div className="lence-cart-details">
                    <h5>{sp.name}</h5>
                    <h5>Category:{sp.category.name}</h5>
                    <h4>{sp.description}</h4>
                    <div>
                      {" "}
                      <p> Size:Extra Wide</p> <p> </p>
                    </div>
                    <div>
                      {" "}
                      <span> Rs: {sp?.price}</span>{" "}
                      <span style={{ fontSize: "11px", color: "black" }}>
                        {" "}
                        1200 with GST
                      </span>
                    </div>

                    <div className="cEJNnp">
                      <NavLink to="#" className="dVEnwe">
                        <span className="bDyAKl"></span>
                      </NavLink>
                      <NavLink to="#" className="dVEnwe">
                        <span className="bDyAKl"></span>
                      </NavLink>
                      <NavLink to="#" className="dVEnwe">
                        <span className="bDyAKl"></span>
                      </NavLink>
                    </div>
                    <div className="jfGDCb">
                      <div>With BLU Digital Rays Protection Lenses</div>
                      <div>Get for ₹700. Use Coupon: TRYUS</div>
                    </div>

                    <div className="">
                      <NavLink to="/cart" className="">
                        <button
                          className=" product-button"
                          onClick={() => navigate("/cart")}
                        >
                          Buy Now
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          {/* similar products */}
          <hr />
          <div className="">
            {relatedProducts.length < 1 && (
              <p className="text-center">No Similar Products found</p>
            )}
            <h4 className="text-center">
              <span style={{color:"skyblue", borderRadius:"4px"}}>{relatedProducts.length} </span>  Products Found ➡️
            </h4>

            <div className=" similar-product-body">
              {relatedProducts?.map((p) => (
                <div className="filter-body-img" key={p._id}>
                  {p.mainImages.map((picture) => (
                    <>
                      <img
                        src={`${import.meta.env.VITE_REACT_APP_MAIN_URL}${
                          picture.img
                        }`}
                        alt="images"
                      />
                    </>
                  ))}
                  <div className="">
                    <h3 className="product-name">
                      <strong> Product : </strong>
                      {p.name}
                    </h3>
                    <p className="product-price">
                      <span>&#8377;</span> {p.price}
                    </p>

                    <div className="card-name-price">
                      <button
                        className="product-button"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetails;
