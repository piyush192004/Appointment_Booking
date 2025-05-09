import React from "react";
import { Routes, Route } from "react-router-dom";
import Doctors from "./pages/Doctors";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointment from "./pages/MyAppointment";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
const App = () => (
  <div className="mx-4 sm:mx-[10%]">
    <ToastContainer />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Doctors" element={<Doctors />} />
      <Route path="/Doctors/:speciality" element={<Doctors />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/MyAppointment" element={<MyAppointment />} />
      <Route path="/Appointment/:docId" element={<Appointment />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
