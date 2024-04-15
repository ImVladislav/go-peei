import mongoose from "mongoose";

const { Schema } = mongoose;

const newsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    firstNew: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.News || mongoose.model("News", newsSchema);
