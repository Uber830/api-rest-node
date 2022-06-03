import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

/* TODO: Structure of the data in mongo to storages */
const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    timestamps: true, //CreatedAt, updatedAt
    versionKey: false,
  }
);

/* TODO: Model of the storage */
StorageSchema.plugin(MongooseDelete, { overrideMethods: "all" });
export default mongoose.model("storages", StorageSchema);
