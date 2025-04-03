import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-6 my-20 text-gray-900 md:mx-10 min-h-[800px]">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((doctor) => (
          <div
            key={doctor._id}
            onClick={() => {
              navigate(`/Appointment/${doctor._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 min-h-[300px]"
          >
            <img
              className="bg-blue-50 w-full h-49x object-cover"
              src={doctor.image}
              alt={doctor.name}
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <p className="w-2 h-2 rounded-full bg-green-500"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>
              <p className="text-gray-600 text-sm">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="bg-blue-100 text-gray-600 px-14 py-4 rounded-full mt-12 text-lg"
      >
        More
      </button>
    </div>
  );
};

export default RelatedDoctors;
