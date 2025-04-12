import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, reqiured: true },
    email: { type: String, reqiured: true, unique: true },
    password: { type: String, reqiured: true },
    image: { type: String, reqiured: true },
    speciality: { type: String, reqiured: true },
    degree: { type: String, reqiured: true },
    experience: { type: String, reqiured: true },
    about: { type: String, reqiured: true },
    available: { type: Boolean, reqiured: true },
    fee: { type: number, reqiured: true },
    address: { type: Object, reqiured: true },
    date: { type: Number, reqiured: true },
    slots_booked: { type: Object, default: {} },
  },
  { minimze: false }
);

const doctorModel =
  mongoose.models.dotor || mongoose.model("doctor", doctorSchema);

export default doctorModel;
