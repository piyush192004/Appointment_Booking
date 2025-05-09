import React, { useContext, useState } from "react";
import { assets } from "./../../assets/assets";
import { AdminContext } from "./../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios"; // ✅ CORRECT

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General Physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }

      const formData = new FormData();

      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fee", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      // In AddDoctor.jsx, modify your axios request:
      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        {
          headers: {
            Authorization: `Bearer ${aToken}`, // ✅ Correct way to send token
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Sending token:", aToken);

      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName("");
        setEmail("");
        setPassword("");
        setExperience("1 Year");
        setSpeciality("General Physician");
        setDegree("");
        setFees("");
        setAbout("");
        setAddress1("");
        setAddress2("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error details:", {
        message: error.message,
        code: error.code,
        status: error?.response?.status,
        responseData: error?.response?.data,
      });
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="text-lg font-medium mb-3">Add Doctor</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-6xl max-h-[80vh] overflow-y-scroll">
        {/* Image Upload */}
        <div className="flex items-center gap-4 mb-8 text-gray-500 col-span-full">
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p>
            Upload Doctor <br /> Image
          </p>
        </div>

        {/* Grid Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <p>Doctor Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border rounded px-3 py-2 w-full"
              type="text"
              placeholder="Name"
              required
            />
          </div>

          {/* Speciality */}
          <div className="flex flex-col gap-1">
            <p>Speciality</p>
            <select
              onChange={(e) => setSpeciality(e.target.value)}
              value={speciality}
              className="border rounded px-3 py-2 w-full"
            >
              <option value="General Physician">General Physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <p>Doctor Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border rounded px-3 py-2 w-full"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          {/* Education */}
          <div className="flex flex-col gap-1">
            <p>Education</p>
            <input
              onChange={(e) => setDegree(e.target.value)}
              value={degree}
              className="border rounded px-3 py-2 w-full"
              type="text"
              placeholder="Education"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <p>Doctor Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border rounded px-3 py-2 w-full"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-1">
            <p>Experience</p>
            <select
              onChange={(e) => setExperience(e.target.value)}
              value={experience}
              className="border rounded px-3 py-2 w-full"
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={`${i + 1} Year`}>
                  {i + 1} {i + 1 === 1 ? "Year" : "Years"}
                </option>
              ))}
            </select>
          </div>

          {/* Fees */}
          <div className="flex flex-col gap-1">
            <p>Fees</p>
            <input
              onChange={(e) => setFees(e.target.value)}
              value={fees}
              className="border rounded px-3 py-2 w-full"
              type="number"
              placeholder="Fees"
              required
            />
          </div>

          {/* Address 1 */}
          <div className="flex flex-col gap-1">
            <p>Address 1</p>
            <input
              onChange={(e) => setAddress1(e.target.value)}
              value={address1}
              className="border rounded px-3 py-2 w-full"
              type="text"
              placeholder="Address 1"
              required
            />
          </div>

          {/* Address 2 */}
          <div className="flex flex-col gap-1">
            <p>Address 2</p>
            <input
              onChange={(e) => setAddress2(e.target.value)}
              value={address2}
              className="border rounded px-3 py-2 w-full"
              type="text"
              placeholder="Address 2"
              required
            />
          </div>
        </div>

        {/* About Doctor */}
        <div className="col-span-full mt-6">
          <p className="mb-2">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full px-4 pt-2 border rounded"
            placeholder="Write About Doctor"
            rows={5}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-primary px-10 py-3 mt-4 text-white rounded-full"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
