import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    password: {
      type: String,
      minlength: 8,
      maxlength: 100,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 10,
    },
  },
  { versionKey: false, timestamps: true }
);

export default model("Users", userSchema);
