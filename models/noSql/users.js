import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

/* TODO: Structure of the data in mongo to users */
const UsersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: false,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    role: {
      type: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true, //CreatedAt, updatedAt
    versionKey: false,
  }
);

/* TODO: Model of the users */
UsersSchema.plugin(MongooseDelete, { overrideMethods: "all" });
export default mongoose.model("users", UsersSchema);
