import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams(); // URL parameter
  const { doctors, currencySymbol } = useContext(AppContext);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [docInfo, setDocInfo] = useState(null);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  useEffect(() => {
    const fetchDocInfo = () => {
      if (docId) {
        const docInfo = doctors.find((doc) => doc._id === docId);
        if (docInfo) {
          setDocInfo(docInfo);
          console.log("Doctor found:", docInfo);
        }
      }
    };

    fetchDocInfo();
  }, [doctors, docId]);

  const getAvailableSlots = () => {
    let today = new Date();
    const slots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
        currentDate.setMinutes(currentDate.getMinutes() >= 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      slots.push(timeSlots);
    }

    setDocSlots(slots);
  };

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div>
        {/* Doctor Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt="Doctor"
            />
          </div>
          <div className="flex-1 border-2 border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* Doctor Info */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="Verified" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience} years
              </button>
            </div>
            {/* Doctor About */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="Info" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-medium text-gray-500 mt-4">
              Appointment Fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.map((slots, index) => (
              <div
                key={index}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index
                    ? "bg-primary text-white"
                    : "border border-gray-200"
                }`}
                onClick={() => setSlotIndex(index)}
              >
                <p>
                  {slots[0]?.dateTime && daysOfWeek[slots[0].dateTime.getDay()]}
                </p>
                <p>{slots[0]?.dateTime.getDate()}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots[slotIndex]?.map((slot, idx) => (
              <p
                key={idx}
                onClick={() => setSlotTime(slot.time)}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  slot.time === slotTime
                    ? "bg-primary text-white"
                    : "text-gray-400 border border-gray-300"
                }`}
              >
                {slot.time.toLowerCase()}
              </p>
            ))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
            Book an appointment
          </button>
        </div>
      </div>
    )
  );
};

export default Appointment;
