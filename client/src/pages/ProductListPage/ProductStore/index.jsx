import React, { useState, useEffect } from "react";
import filterimg1 from "../../../assets/images/Filter/filter1.webp";
import "../../../assets/customCss/Main.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../../../components/extraComponent/Prices.jsx";

const ProductStore = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, []);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );

      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  //getAllCategory
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getPrductsByCat();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      console.log("filter Products", data?.products);
      setFilterProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="filter-banner">
        <img src={filterimg1} />
      </div>

      <div className=" filters-page ">
        <div className=" filter">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column m-2">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>

        
          <div className="category-product">
            {products?.map((p) => (
              <div
              className="category-product-body " 
                key={p._id}
                
              >
                {p.mainImages.map((picture) => (
                  <img
                    src={`http://localhost:8000/${picture.img}`}
                    alt="images"
                  />
                ))}
                <div  >
                  <div className=" d-flex justify-content-evenly">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className=" ">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  </div>

                  <div className="card-name-price d-flex justify-content-evenly">
                    <button
                      className="btn btn-primary mt-2 "
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      Add To Cart
                    </button>
                    <button className="btn btn-dark mt-2 ">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
      </div>
    </>
  );
};

export default ProductStore;
