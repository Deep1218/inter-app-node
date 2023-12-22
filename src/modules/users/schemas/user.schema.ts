import { Timestamp } from "mongodb";
import { Schema, model } from "mongoose";

enum Role {
  CUSTOMER = "customer",
  DRIVERS = "drivers",
  ADMIN = "admin",
}
const userModel = new Schema({
  role: { type: Role, require: true },
  name: { type: String, require: true },
  email: { type: String, require: false },
  mobile: { type: Number, require: true },
  mobileOtp: { type: Number, require: false },
  mobileExpries: { type: Timestamp, require: false },
});

export const Users = model("users", userModel);
