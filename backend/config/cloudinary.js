import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY, // Fixed typo: CLUDINARY → CLOUDINARY
    api_secret: process.env.CLOUDINARY_SECRET_KEY, // Changed secret_key to api_secret and fixed typo
  });
};

export default connectCloudinary;
