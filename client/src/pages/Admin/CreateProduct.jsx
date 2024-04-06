import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../adminComponents/AdminLayout.jsx";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();

  const [computer, setComputer] = useState("");
  const [computers, setComputers] = useState([]);
  const [eye, setEye] = useState("");
  const [eyes, setEyes] = useState([]);
  const [sun, setSun] = useState("");
  const [suns, setSuns] = useState([]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [productId, setProductId] = useState("");
  const [modalNumber, setModalNumber] = useState("");
  const [fameSize, setFrameSize] = useState("");
  const [wihi, setWihi] = useState("");
  const [weight, setWeight] = useState("");
  const [material, setMaterial] = useState("");
  const [stock, setStock] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [totalQuantity, setTotalQuantity] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //getAll computer
  const getAllComputer = async () => {
    try {
      const { data } = await axios.get("/api/v1/computer/get-computer");
      if (data?.success) {
        setComputers(data?.computer);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in computer");
    }
  };
  useEffect(() => {
    getAllComputer();
  }, []);

  //getAll eyeglass
  const getAllEyeGlass = async () => {
    try {
      const { data } = await axios.get("/api/v1/eyeglass/get-eyeglass");
      if (data?.success) {
        setEyes(data?.eyeglass);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in eyeglass");
    }
  };
  useEffect(() => {
    getAllEyeGlass();
  }, []);

  //getAll SunGlasses
  const getAllSunGlass = async () => {
    try {
      const { data } = await axios.get("/api/v1/sunglass/get-sunglass");
      if (data?.success) {
        setSuns(data?.sunglass);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in sunglass");
    }
  };
  useEffect(() => {
    getAllSunGlass();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      
      productData.append("name", name);
      productData.append("productId", productId);
      productData.append("modalNumber", modalNumber);
      productData.append("fameSize", fameSize);
      productData.append("wihi", wihi);
      productData.append("weight", weight);
      productData.append("material", material);
      productData.append("stock", stock);
      productData.append("shipping", shipping);
      productData.append("description", description);
      productData.append("oldPrice", oldPrice);
      productData.append("price", price);
      productData.append("totalQuantity", totalQuantity);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("eye", eye);
      productData.append("sun", sun);
      productData.append("computer", computer);
      productData.append("category", category);

      const { data } = axios.post(
        "/api/v1/product/create-product",
        productData
      );

      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <>
      <AdminLayout title={"Dashboard - Create Product"}>
        <div className="container-fluid mt-2 m-3 p-3 dashboard">
          <div className="row ">
            <div className="col-md-2 "></div>
            <div className="col-md-10 ">
              <h1 className="ml-3 fw-normal">Create Product</h1>
              <div className="m-1 w-75 row">
                <div className="mb-3 col-md-6">
                  <Select
                    bordered={false}
                    placeholder="Select a category"
                    size="large"
                    showSearch
                    className="form-select mb-3"
                    onChange={(value) => {
                      setCategory(value);
                    }}
                  >
                    {categories?.map((c) => (
                      <Option key={c._id} value={c._id}>
                        {c.name}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="mb-3 col-md-6">
                  <Select
                    bordered={false}
                    placeholder="Enter Computer Lence"
                    size="large"
                    showSearch
                    className="form-select mb-3"
                    onChange={(value) => {
                      setComputer(value);
                    }}
                  >
                    {computers?.map((cl) => (
                      <Option key={cl._id} value={cl._id}>
                        {cl.name}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="mb-3 col-md-6">
                  <Select
                    bordered={false}
                    placeholder="Enter Eye Lence"
                    size="large"
                    showSearch
                    className="form-select mb-3"
                    onChange={(value) => {
                      setEye(value);
                    }}
                  >
                    {eyes?.map((si) => (
                      <Option key={si._id} value={si._id}>
                        {si.name}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="mb-3 col-md-6">
                  <Select
                    bordered={false}
                    placeholder="Enter Suns Lences"
                    size="large"
                    showSearch
                    className="form-select mb-3"
                    onChange={(value) => {
                      setSun(value);
                    }}
                  >
                    {suns?.map((si) => (
                      <Option key={si._id} value={si._id}>
                        {si.name}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="mb-3 col-md-6">
                  <Select
                    bordered={false}
                    placeholder="Select Shipping "
                    size="large"
                    showSearch
                    className="form-select mb-3"
                    onChange={(value) => {
                      setShipping(value);
                    }}
                  >
                    <Option value="0">No</Option>
                    <Option value="1">Yes</Option>
                  </Select>
                </div>

                <div className="mb-3 col-md-6">
                  <input
                    type="text"
                    value={name}
                    placeholder="write a name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <input
                    type="Number"
                    value={productId}
                    placeholder="Enter Product Id"
                    className="form-control"
                    onChange={(e) => setProductId(e.target.value)}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <input
                    type="text"
                    value={material}
                    placeholder="Enter Material"
                    className="form-control"
                    onChange={(e) => setMaterial(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <input
                    type="text"
                    value={stock}
                    placeholder="Set Stock"
                    className="form-control"
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <input
                    type="text"
                    value={oldPrice}
                    placeholder="Old Price"
                    className="form-control"
                    onChange={(e) => setOldPrice(e.target.value)}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <input
                    type="number"
                    value={price}
                    placeholder="Enter Price"
                    className="form-control"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <input
                    type="number"
                    value={totalQuantity}
                    placeholder="Enter Product Quantity"
                    className="form-control"
                    onChange={(e) => setTotalQuantity(e.target.value)}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <input
                    type="number"
                    value={quantity}
                    placeholder="Enter Single quantity"
                    className="form-control"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <input
                    type="text"
                    value={modalNumber}
                    placeholder="Enter Modal Number"
                    className="form-control"
                    onChange={(e) => setModalNumber(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <input
                    type="text"
                    value={fameSize}
                    placeholder="Enter fameSize"
                    className="form-control"
                    onChange={(e) => setFrameSize(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <input
                    type="text"
                    value={wihi}
                    placeholder="Enter Width & Height"
                    className="form-control"
                    onChange={(e) => setWihi(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <input
                    type="text"
                    value={weight}
                    placeholder="Enter weight"
                    className="form-control"
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <textarea
                    type="text"
                    value={description}
                    placeholder="Enter Description"
                    className="form-control"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="btn btn-outline-secondary col-md-12">
                    {photo ? photo.name : "Upload Photo"}
                    <input
                      type="file"
                      multiple
                      className=""
                      name="photo"
                      accept="image/*"
                      onChange={(e) => setPhoto(e.target.files[0])}
                      hidden
                    />
                  </label>
                </div>
                <div className="mb-3 col-md-6">
                  {photo && (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="product_photo"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div>
                <div className="mb-3 col-md-6">
                  <button className="btn btn-primary" onClick={handleCreate}>
                    CREATE PRODUCT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default CreateProduct;
