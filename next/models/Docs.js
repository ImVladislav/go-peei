import mongoose from "mongoose";

const { Schema } = mongoose;

const docsSchema = new Schema(
  {
    src: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.Docs || mongoose.model("Docs", docsSchema);
