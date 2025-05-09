import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "./../context/AppContext";

const SPECIALITIES = [
  { label: "General Physician", value: "general-physician" },
  { label: "Gynecologist", value: "gynecologist" },
  { label: "Dermatologist", value: "dermatologist" },
  { label: "Pediatricians", value: "pediatricians" },
  { label: "Neurologist", value: "neurologist" },
  { label: "Gastroenterologist", value: "gastroenterologist" },
];

const Doctors = () => {
  const { speciality } = useParams(); // from URL: /doctors/:speciality
  const navigate = useNavigate();

  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const { doctors } = useContext(AppContext);

  const normalize = (str) => str.toLowerCase().replace(/\s+/g, "-").trim();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        doctors.filter((doc) => normalize(doc.speciality) === speciality)
      );
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Mobile filter toggle */}
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>

        {/* Filter Sidebar */}
        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          {SPECIALITIES.map((spec) => (
            <p
              key={spec.value}
              onClick={() =>
                speciality === spec.value
                  ? navigate("/doctors")
                  : navigate(`/doctors/${spec.value}`)
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === spec.value ? "bg-indigo-100 text-black" : ""
              }`}
            >
              {spec.label}
            </p>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6">
          {filterDoc.map((items) => (
            <div
              onClick={() => navigate(`/Appointment/${items._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
              key={items._id}
            >
              <img
                className="bg-blue-50 w-full object-cover"
                src={items.image}
                alt={items.name}
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span>Available</span>
                </div>
                <p className="text-gray-900 text-lg font-medium">
                  {items.name}
                </p>
                <p className="text-gray-600 text-sm">{items.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
