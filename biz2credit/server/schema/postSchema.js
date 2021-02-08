import { model, Schema } from "mongoose";
const { ObjectId } = Schema.Types;

const PostSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    phone: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 10,
    },

    postedBy: {
      type: ObjectId,
      ref: "Users",
    },
  },
  { versionKey: false, timestamps: true }
);

export default model("Post", PostSchema);
