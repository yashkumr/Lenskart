
import "./style.css";
import getParams from "../utils/getParams.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import ClothingAndAccessories from "./ClothingAndAccessories/index.jsx";
import ProductStore from "./ProductStore/index.jsx";
import ProductPage from "./ProductPage/index.jsx";
import { useLocation } from 'react-router-dom';


const ProductListPage = (props) => {
  const location = useLocation();

  const renderProduct = () => {

    console.log(props);
    
    const params = getParams(location.search);
    // console.log("params is =", params);
    let content = null;
    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
        break;
      default:
        content = <ClothingAndAccessories {...props} />;
    }

    return content;
  };

  return <Layout>{renderProduct()}</Layout>;
};

export default ProductListPage;
