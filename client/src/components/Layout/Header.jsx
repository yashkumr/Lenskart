import React from "react";
import "../../../public/customCss/Header.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FaUser, FaHeart, FaCartPlus } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { useAuth } from "../../context/Auth.jsx";
import MenuHeader from "./MenuHeader/index.jsx";

const Header = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    <>
      <div className="lence-header ">
        {/* topbar */}
        <div>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#" style={{ fontSize: "12px" }}>
                IDEA REWARDS
              </a>
              <button
                className="navbar-toggler bg-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon " />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{ fontSize: "12px" }}
                    >
                      RETURN & EXCHANGE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#"
                      style={{ fontSize: "12px" }}
                    >
                      RETURN OFFER
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#"
                      style={{ fontSize: "12px" }}
                    >
                      LOOKBOX
                    </a>
                  </li>
                </ul>
                <div className="d-flex">
                  {!auth?.user ? (
                    <>
                      <div className="m-2 sign-in">
                        <FaRegUser />
                        <div className="sign-mega-box">
                          <div className="sign-content">
                            <div className="row">
                              <ul className="sign-mega-links">
                                <hr />
                                <li>
                                  <a href="/register">Create Account</a>
                                </li>
                                <hr />
                                <li>
                                  <a href="/login">SignIn</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <li className="nav-item dropdown  dynamic-name">
                        <NavLink
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          style={{ border: "none" }}
                        >
                          {auth?.user?.name}
                        </NavLink>
                        <ul className="dropdown-menu">
                          <li>
                            <NavLink
                              to={`/dashboard/${
                                auth?.user?.role === 1 ? "admin" : "user"
                              }`}
                              className="dropdown-item"
                            >
                              Dashboard
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              onClick={handleLogout}
                              to="/login"
                              className="dropdown-item"
                            >
                              Logout
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </>
                  )}

                  <div className="dropdown mt-2 bg-light">
                    <button
                      className=" dropdown-toggle ouline-0 border-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ fontSize: "14px" }}
                    >
                      India
                    </button>
                    <ul className="dropdown-menu ">
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          style={{ fontSize: "14px" }}
                        >
                          Pakistan
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          style={{ fontSize: "14px" }}
                        >
                          Japan
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          style={{ fontSize: "14px" }}
                        >
                          Nepal
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* end bar */}

        {/* midBar */}
        <div className="topbar-header">
          <div className="search">
            <form>
              <input type="text" placeholder="Pakistan & Other Company" />
              <span className="input-icon">
                <button className="" type="submit">
                  <IoMdArrowDropdown />
                </button>{" "}
              </span>
            </form>
          </div>
          <div className="logo">
            <NavLink>
              <img src="../../../public/images/Header/ideas.png" />
            </NavLink>
          </div>

          <div className="search">
            <form>
              <input type="text" placeholder="Search " />
              <span className="input-icon">
                <button className="" type="submit">
                  <CiSearch />{" "}
                </button>{" "}
              </span>
            </form>
          </div>
        </div>
        <div className="links"></div>
        {/* end midbar */}

        {/* navbar */}
        {/* <div>
          <nav className="navbar navbar-expand-lg ">
            <div className="container wrapper">
              <a className="navbar-brand" href="/">
                <img src="" style={{ width: "100px", margin: "auto" }} />
              </a>
              <button
                className="navbar-toggler bg-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon border-none" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 carpent-head ">
                  <li class="nav-item">
                    <a
                      class="nav-link active  fw-bold"
                      aria-current="page"
                      href="#"
                    >
                      FESTIVAL SALE
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active  fw-bold"
                      aria-current="page"
                      href="#"
                    >
                      EID COLLECTION
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active  fw-bold"
                      aria-current="page"
                      href="#"
                    >
                      LAWN 2024
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active fw-bold"
                      aria-current="page"
                      href="#"
                    >
                      UNSTITCHED
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active fw-bold"
                      aria-current="page"
                      href="/contact"
                    >
                      IDEAS HOME
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active fw-bold"
                      aria-current="page"
                      href="#"
                    >
                      WOMEN
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link active fw-bold"
                      aria-current="page"
                      href="#"
                    >
                      MEN
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div> */}

        {/* end navbar */}

        {/* dynamic header */}
         <MenuHeader/>
        {/* end dynamic header */}
      </div>
    </>
  );
};
export default Header;
