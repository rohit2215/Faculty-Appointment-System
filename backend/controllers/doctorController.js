import doctorModel from "../models/doctorModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";

const changeAvailability = async (req, res) => {
  try {
    const { docId } = req.body;
    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });
    res.json({ success: true, message: "Availability changed" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(["-password", "-email"]);
    res.json({ success: true, doctors });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//API for doctor login

const loginFaculty = async (req, res) => {
  try {
    const { email, password } = req.body;
    const faculty = await doctorModel.findOne({ email });
    if (!faculty) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, faculty.password);
    if (isMatch) {
      const token = jwt.sign({ id: faculty._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to get faculty appointments for faculty panel

const appointmentsFaculty = async (req, res) => {
  try {
    const { facId } = req.body;
    const appointments = await appointmentModel.find({ facId });
    res.json({ success: true, appointments });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to mark appointment completed
const appointmentComplete = async (req, res) => {
  try {
    const { facId, appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);
    if (appointmentId && appointmentData.facId === facId) {
      await appointmentModel.findByIdAndUpdate(appointmentId, {
        isCompleted: true,
      });
      return res.json({ success: true, message: "Appointment Completed" });
    } else {
      return res.json({ success: false, message: "Mark Failed" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to cancel appointment for faculty panel
const appointmentCancel = async (req, res) => {
  try {
    const { facId, appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);
    if (appointmentId && appointmentData.facId === facId) {
      await appointmentModel.findByIdAndUpdate(appointmentId, {
        cancelled: true,
      });
      return res.json({ success: true, message: "Appointment cancelled" });
    } else {
      return res.json({ success: false, message: "Cancellation Failed" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to get dashboard data for faculty panel
const facultyDashboard = async (req, res) => {
  try {
    const { facId } = req.body;
    const appointments = await appointmentModel.find({ facId });
    let earnings = 0;
    appointments.map((item) => {
      if (item.isCompleted || item.payment) {
        earnings += item.amount;
      }
    });
    let patients = [];
    appointments.map((item) => {
      if (!patients.includes(item.userId)) {
        patients.push(item.userId);
      }
    });
    const dashData = {
      earnings,
      appointments: appointments.length,
      patients: patients.length,
      latestAppointments: appointments.reverse().slice(0, 5),
    };
    res.json({ success: true, dashData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to get faculty profile for faculty panel
const facultyProfile = async (req, res) => {
  try {
    const { facId } = req.body;
    const profileData = await doctorModel.findById(facId).select("-password");
    res.json({ success: true, profileData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
//API to update faculty profile from faculty panel

const updateFacultyProfile = async (req, res) => {
  try {
    const { facId, fees, address, available } = req.body;
    await doctorModel.findByIdAndUpdate(facId, { fees, address, available });
    res.json({ success: true, message: "Profile updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
export {
  changeAvailability,
  doctorList,
  loginFaculty,
  appointmentsFaculty,
  appointmentComplete,
  appointmentCancel,
  facultyDashboard,
  updateFacultyProfile,
  facultyProfile,
};
