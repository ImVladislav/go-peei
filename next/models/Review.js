import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    imageSrc: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);
