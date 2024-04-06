import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productColorController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  productSizeController,
  realtedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import multer from "multer";
import shortid from "shortid";

import path from "path";
import { fileURLToPath } from "url";

//ES module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const router = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  upload.array("productPicture"),
  createProductController
  
);

// get product
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//Delete Products
router.delete("/delete-product/:pid", deleteProductController);

//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,

  updateProductController
);
//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//filter product
router.post("/product-filters", productFiltersController);

//category wise Product
router.get("/product-category/:slug", productCategoryController);
//color wise Product
router.get("/product-color/:slug", productColorController);
//size wise Product
router.get("/product-size/:slug", productSizeController);
//search Product
router.get("/search/:keyword", searchProductController);

export default router;
