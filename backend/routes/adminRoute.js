import express from "express";
import {
  addDoctor,
  allDoctors,
  loginAdmin,
} from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router();

// Correct usage with multer and named import
adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);

adminRouter.post("/login", loginAdmin);

adminRouter.post("/all-doctors", authAdmin, allDoctors);

export default adminRouter;
