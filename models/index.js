import storage from "./noSql/storages.js";
import tracks from "./noSql/tracks.js";
import users from "./noSql/users.js";

const models = {
  storageModel: storage,
  tracksModel: tracks,
  usersModel: users,
};
export const { storageModel, tracksModel, usersModel } = models;
