import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import categoryRoute from "./routes/categoryRoute.js";
import computerRoute from "./routes/computerRoute.js";
import sunGlassRoute from "./routes/sunGlassRoute.js";
import eyeGlassRoute from "./routes/eyeGlassRoute.js";
import productRoutes from "./routes/productRoutes.js";

import path from "path";
import { fileURLToPath } from "url";


dotenv.config();
connectDB();

//ES module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

//routing
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/computer", computerRoute);
app.use("/api/v1/sunglass", sunGlassRoute);
app.use("/api/v1/eyeglass", eyeGlassRoute);
app.use("/api/v1/product", productRoutes);

app.use("/", (req, res) => {
  res.send("Welcome");
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`.bgCyan.white);
});
