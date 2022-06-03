import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

/* TODO: Structure of the data in mongo to tracks */
const TracksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    album: {
      type: String,
    },
    cover: {
      type: String,
      validate: {
        validator: (req) => {
          return true;
        },
        message: "ERROR_URL",
      },
    },
    artist: {
      name: {
        type: String,
      },
      nickname: {
        type: String,
      },
      nationality: {
        type: String,
      },
    },
    duration: {
      start: {
        type: Number,
      },
      end: {
        type: Number,
      },
    },
    mediaId: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    versionKey: false,
    timestamps: true, //CreatedAt, updatedAt
  }
);

/* TODO: Model of the tracks */
TracksSchema.plugin(MongooseDelete, { overrideMethods: "all" });
export default mongoose.model("tracks", TracksSchema);
