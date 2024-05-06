import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";
import { IoIosArrowForward } from "react-icons/io";
import "../assets/customCss/Main.css";
import cat2 from "../assets/images/Home/cat2.webp";
import cart1 from "../assets/images/Home/cart1.webp";
import cart2 from "../assets/images/Home/cart2.webp";
import cart3 from "../assets/images/Home/cart3.webp";
import cart4 from "../assets/images/Home/cart4.webp";
import cart5 from "../assets/images/Home/cart5.webp";
import cart7 from "../assets/images/Home/cart7.webp";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice.jsx";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
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
      <Layout>
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
                  {product.name}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  {product?.category?.name}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink>{product?.description}</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="lence-cart">
          <div className="lence-cart-section">
            <div>
              <img src={cat2} />
            </div>
            <div>
              <img src={cat2} />
            </div>
            <div>
              <img src={cat2} />
            </div>
            <div>
              <img src={cat2} />
            </div>
            <div>
              <img src={cat2} />
            </div>
            <div>
              <img src={cat2} />
            </div>
            <div>
              <img src={cat2} />
            </div>
            <div>
              <img src={cat2} />
            </div>
            <div>
              <img src={cat2} />
            </div>
            <div>
              <img src={cat2} />
            </div>
            <div>
              <img src={cat2} />
            </div>
            <div>
              <img src={cat2} />
            </div>
            <div>
              <img src={cat2} />
            </div>
            <div>
              <img src={cat2} />
            </div>
          </div>
          <div className="lence-cart-details">
            <h5>{product.name}</h5>
            <h4>{product.description}</h4>
            <div>
              {" "}
              <p> Size:Extra Wide</p> <p> </p>
            </div>
            <div>
              {" "}
              <span> Rs: {product?.price}</span>{" "}
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

            <div className="add-button">
              <NavLink to="/cart" className="cgAlpl">
                <button
                  className="cgAlpl"
                  onClick={() =>
                    dispatch(addToCart(product)) && navigate("/cart")
                  }
                >
                  Buy Now
                </button>
              </NavLink>
              <button className="cgAlpl2">Try On</button>
            </div>

            <div className="cart-img-right">
              <img src={cart1} />
              <img src={cart2} />
              <img src={cart3} />
              <img src={cart4} />
              <img src={cart5} />

              <img src={cart7} />
            </div>
          </div>
        </div>

        {/* similar products */}
        <hr />
        <div className=" similar-products">
          <h4 className="text-center m-5">Similar Products ➡️</h4>
          {relatedProducts.length < 1 && (
            <p className="text-center">No Similar Products found</p>
          )}
          <div className="similar-products-main">
            {relatedProducts?.map((p) => (
              <div className="card m-2" key={p._id}>
                {p.mainImages.map((picture) => (
                  <img
                    src={`http://localhost:8000/${picture.img}`}
                    alt="images"
                  />
                ))}
                <div className="card-body">
                  <h3 className="card-title m-2">
                    <strong> Product : </strong>
                    {p.name}
                  </h3>
                  <p className="card-title card-price m-2">
                    <span>&#8377;</span> {p.price}
                  </p>

                  <div className="card-name-price">
                    <button
                      className="btn btn-primary"
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
