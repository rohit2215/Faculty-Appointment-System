import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments"
import NavBar from "./componenets/NavBar";
import Appointment from "./pages/Appointment";
import Footer from "./componenets/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <NavBar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/faculties" element = {<Faculty />} />
        <Route path="/faculties/:speciality" element = {<Faculty />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/about" element = {<About />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/my-profile" element = {<MyProfile />} />
        <Route path="/my-appointments" element = {<MyAppointments />} />
        <Route path="/appointment/:facId" element = {<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;