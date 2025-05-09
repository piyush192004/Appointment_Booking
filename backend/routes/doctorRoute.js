import express from "express";
import doctorController from "../controllers/doctorController.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorController.doctorList);

export default doctorRouter;
