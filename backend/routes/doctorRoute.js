import express from "express";
import { appointmentsFaculty, doctorList, loginFaculty } from "../controllers/doctorController.js";
import authFaculty from "../middlewares/authFaculty.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post('/login',loginFaculty);
doctorRouter.get('/appointments',authFaculty,appointmentsFaculty)

export default doctorRouter;
