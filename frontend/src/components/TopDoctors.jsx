import React from "react";
import { doctors } from "../assets/assets";

const TopDoctors = () => {
  return (
    <div>
      <h1>Top Doctors to Book</h1>
      <p>Simply browse through our extensive list of trusted doctors.</p>
      <div>
        {doctors.slice(0, 10).map((items, index) => (
          <div>
            <img src="" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;
