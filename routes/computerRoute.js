import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  computerControlller,
  createcomputerController,
  deletecomputerCOntroller,
  singlecomputerController,
  updatecomputerController,
} from "../controllers/computerController.js";

const router = express.Router();

router.post(
  "/create-computer",
  requireSignIn,
  isAdmin,
  createcomputerController
);

//update computer
router.put(
  "/update-computer/:id",
  requireSignIn,
  isAdmin,
  updatecomputerController
);
//get all computer
router.get("/get-computer", computerControlller);

//single computer
router.get("/single-computer/:slug", singlecomputerController);

//delete computer
router.delete("/delete-computer/:id", deletecomputerCOntroller);

export default router;
