import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    titleEn: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    descriptionEn: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      default: 0,
    },
    fundsRaised: {
      type: Number,
      default: 0,
    },
    images: [
      {
        name: String,
        data: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);

// ownRecipeSchema.post("save", handleMongooseError);

// const addSchema = Joi.object({
//   title: Joi.string().min(2).max(200).required(),
//   category: Joi.string()
//     .valid(...categoryList)
//     .required(),
//   description: Joi.string().min(2).max(600).required(),
//   instructions: Joi.string().required(),
//   time: Joi.string().required(),
//   favorite: Joi.boolean().default(false),
//   ingredients: Joi.string().required(),
// });

// const schemas = {
//   addSchema,
// };

// const OwnRecipe = model("ownRecipe", ownRecipeSchema);

// module.exports = { OwnRecipe, schemas };
