import { usersModel } from "../models/index.js";
import handlehttpError from "../utils/handleErrors.js";
import { verifyToken } from "../utils/handleJwt.js";

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) { // --> validate that it exists
      handlehttpError(res, "Error need iniciate session", 401);
    }

    const token = req.headers.authorization.split(" ").pop(); // --> Select the object of the authorization
    const dataToken = await verifyToken(token); // --> validate what exist JWT

    if (!dataToken._id) {
      handlehttpError(res, "Error not's the _id of the JWT", 401);
    }

    const user = await usersModel.findById(dataToken._id); //Inyectar el objeto del usuario
    req.user = user

    next(); // --> passed the function. very good 👌
  } catch (err) {
    handlehttpError(res, "Not Seccion", 401);
  }
};

export default authMiddleware;
