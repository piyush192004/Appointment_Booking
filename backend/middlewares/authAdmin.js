import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    if (!token) {
      throw new Error("No token provided.");
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    if (token_decode.email !== process.env.ADMIN_EMAIL) {
      throw new Error("Email does not match admin.");
    }

    req.user = token_decode;
    next();
  } catch (error) {
    console.error("Auth Error:", error.name, error.message);
    return res.status(401).json({
      success: false,
      message: "Not Authorized. Login Again.",
    });
  }
};

export default authAdmin;
