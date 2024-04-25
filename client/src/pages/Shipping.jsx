import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import "../assets/customCss/Main.css";
import Layout from "../components/Layout/Layout.jsx";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../features/cartSlice.jsx";
import DropIn from "braintree-web-drop-in-react";
import { useAuth } from "../context/Auth.jsx";

const Shipping = () => {
  const [auth, setAuth] = useAuth();
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);

  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();
  console.log("your cart is " ,cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/v1/auth/register", {
        name,
        lname,
        email,
        password,
        cpassword,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  //get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/braintree/token");
      setClientToken(data?.clientToken);
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payments
  const handlePayment = async () => {
    try {
      console.log("handlepayment")
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post("/api/v1/product/braintree/payment", {
        nonce,
        cart,
      });
      console.log(data);
      setLoading(false);
      // localStorage.removeItem("cart");
      
      // navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      <Layout>
        <div className="shipping-wrapper">
          <div className="container">
            <h5 className="text-center fw-bold">Shipping </h5>
          </div>
        </div>

        <div className="container-fluid main-info">
          <div className="quick-info">
            <ul>
              <li>
                <NavLink to="#">
                  Home
                  <span>
                    <IoIosArrowForward />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  Product
                  <span>
                    <IoIosArrowForward />
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink to="#">Shipping</NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Start ProgressBar  */}
        <div className="container">
          <div className="checkout-container">
            <div className="authentication-wrapper">
              <div className="action-auth-toggle">
                <span> Sign In</span>
              </div>
            </div>

            <div className="prgress-wrapper">
              <ul className="opc-progress-bar ">
                <li className="opc-progress-bar-item _active">
                  <span> Shipping</span>
                </li>
                <li className="opc-progress-bar-item ">
                  <span> Review & Payments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* end progressBar   */}

        <div className="main-bill">
          {/*Shippin form */}
          <div className="shipping-img  mb-3">
            <div className=" text-light py-3"></div>
            <section className=" my-2  text-light p-2">
              <div className="shipping-title  ">Shipping Address</div>

              <form
                onSubmit={handleSubmit}
                className=" register-form  row g-3 p-1"
              >
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    EMAIL <strong>*</strong>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control shadow-none"
                    id="inputEmail4"
                  />
                </div>

                <div className="col-md-6 text-dark">
                  <h5 className="mb-2">
                    Personal Information <strong>*</strong>{" "}
                  </h5>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control  shadow-none"
                    id="validationDefault01"
                    placeholder="First Name"
                    required
                  />
                </div>

                <div className="col-md-6 text-gray mt-5">
                  <input
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    className="form-control shadow-none"
                    id="validationDefault01"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    Street Address <strong>*</strong>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control shadow-none"
                    id="inputEmail4"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    City <strong>*</strong>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control shadow-none"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    State/Province <strong>*</strong>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control shadow-none"
                    id="inputEmail4"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Zip/Postal Code <strong>*</strong>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control shadow-none"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Zip/Postal Code <strong>*</strong>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control shadow-none"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    Phone Number<strong>*</strong>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control shadow-none"
                    id="inputEmail4"
                  />
                </div>

                <div className="shipping-next">
                  <button type="submit" className=" rounded-0">
                    <Link to="/product/checkout">NEXT</Link>
                  </button>
                </div>
              </form>
              <div className="shipping-title mt-5 ">Shipping Address</div>

              <div>
                <table className="table-shipping">
                  <thead>
                    <tr className="row">
                      <th className="col col-method">Select Method</th>
                      <th className="col col-method">Price</th>
                      <th className="col col-method">Method Title</th>
                      <th className="col col-method">Carrier Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="row">
                      <td className="col col-method">
                        {" "}
                        <span>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </span>
                      </td>
                      <td className="col col-method">
                        <span className="price"> .00</span>{" "}
                      </td>
                      <td className="col col-method">
                        {" "}
                        <span>free</span>
                      </td>
                      <td className="col col-method">
                        {" "}
                        <span>Free Shipping</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
          {/* End Shipping form */}

          {/* bill Details */}
          <div>
            <div className="lence-bill-details">
              <div className="fw-normal fs-4">Bill Details</div>

              <div className="lence-bill-details-card">
                <div>
                  <div className="gMDLDI">
                    <div className="dfuMlk">Total Quantity</div>{" "}
                    <div className="dfuMlk"> {totalQuantity}</div>
                  </div>
                </div>
                <div>
                  <div className="gMDLDI">
                    <div className="cart-total">Total payable</div>{" "}
                    <div className="cart-total"> {totalPrice}</div>
                  </div>
                </div>
              </div>

              {/* <div className="mt-2 p-2">
                <NavLink to="#" className="bill-button">
                  Pay Now
                </NavLink>
              </div> */}
            </div>
            {/* Payments */}
            <div className="mt-2">
                {!clientToken || !auth?.token || !cart?.length ? (
                  ""
                ) : (
                  <>
                    <DropIn
                      options={{
                        authorization: clientToken,
                        paypal: {
                          flow: "vault",
                        },
                      }}
                      onInstance={(instance) => setInstance(instance)}
                    />

                    <button
                      className="bill-button"
                      onClick={handlePayment}
                      disabled={loading || !instance }
                    >
                      {loading ? "Processing ...." : "Pay Now"}
                    </button>
                  </>
                )}
              </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Shipping;
