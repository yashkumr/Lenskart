import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import { createeyeglassController, deleteeyeglassCOntroller, eyeglassControlller, singleeyeglassController, updateeyeglassController } from "../controllers/eyeController.js";

const router = express.Router();

router.post(
  "/create-eyeglass",
  requireSignIn,
  isAdmin,
  createeyeglassController
);

//update eyeglass
router.put(
  "/update-eyeglass/:id",
  requireSignIn,
  isAdmin,
  updateeyeglassController
);
//get all eyeglass
router.get("/get-eyeglass", eyeglassControlller);

//single eyeglass
router.get("/single-eyeglass/:slug", singleeyeglassController);

//delete eyeglass
router.delete("/delete-eyeglass/:id", deleteeyeglassCOntroller);

export default router;
