import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react"; // optional icons if you're using lucide-react

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden p-4"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full z-50 bg-white border-r transition-all duration-300 
          ${isOpen ? "w-64" : "w-0 overflow-hidden"} 
          md:static md:w-80
        `}
      >
        {aToken && (
          <ul className="text-[#515151] mt-5">
            {[
              {
                to: "/admin-dashboard",
                icon: assets.home_icon,
                label: "Dashboard",
              },
              {
                to: "/all-appointments",
                icon: assets.appointment_icon,
                label: "Appointments",
              },
              {
                to: "/add-doctor",
                icon: assets.add_icon,
                label: "Add Doctors",
              },
              {
                to: "/doctors-list",
                icon: assets.people_icon,
                label: "Doctors List",
              },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-100 transition-colors duration-200 ${
                    isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
                  }`
                }
                onClick={() => {
                  if (window.innerWidth < 768) setIsOpen(false);
                }}
              >
                <img src={item.icon} alt={item.label} />
                <p>{item.label}</p>
              </NavLink>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Sidebar;
