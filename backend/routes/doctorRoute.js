import express from "express";
import {
  appointmentCancel,
  appointmentComplete,
  appointmentsFaculty,
  doctorList,
  facultyDashboard,
  facultyProfile,
  loginFaculty,
  updateFacultyProfile,
} from "../controllers/doctorController.js";
import authFaculty from "../middlewares/authFaculty.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", doctorList);
doctorRouter.post("/login", loginFaculty);
doctorRouter.get("/appointments", authFaculty, appointmentsFaculty);
doctorRouter.post("/complete-appointment", authFaculty, appointmentComplete);
doctorRouter.post("/cancel-appointment", authFaculty, appointmentCancel);
doctorRouter.get("/dashboard", authFaculty, facultyDashboard);
doctorRouter.get("/profile", authFaculty, facultyProfile);
doctorRouter.post("/update-profile", authFaculty, updateFacultyProfile);

export default doctorRouter;
