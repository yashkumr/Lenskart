import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createsunglassController,
  deletesunglassCOntroller,
  singlesunglassController,
  sunglassControlller,
  updatesunglassController,
} from "../controllers/sunController.js";

const router = express.Router();

router.post(
  "/create-sunglass",
  requireSignIn,
  isAdmin,
  createsunglassController
);

//update sunglass
router.put(
  "/update-sunglass/:id",
  requireSignIn,
  isAdmin,
  updatesunglassController
);
//get all sunglass
router.get("/get-sunglass", sunglassControlller);

//single sunglass
router.get("/single-sunglass/:slug", singlesunglassController);

//delete sunglass
router.delete("/delete-sunglass/:id", deletesunglassCOntroller);

export default router;
