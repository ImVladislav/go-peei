import mongoose from "mongoose";

const userShema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Must povide a username"],
      unique: [true, "Must be unique"],
    },
    email: {
      type: String,
      required: [true, "Must provide an email"],
      unique: [true, "Must be unique"],
    },
    password: {
      type: String,
      required: [true, "Must provide a password"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userShema);

export default User;
