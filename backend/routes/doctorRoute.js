import express from "express";
import { doctorList, loginFaculty } from "../controllers/doctorController.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post('/login',loginFaculty);

export default doctorRouter;
