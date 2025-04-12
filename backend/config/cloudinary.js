import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLUDINARY_API_KEY,
    secret_key: process.env.COULDINARY_SECRET_KEY,
  });
};

export default connectCloudinary;
