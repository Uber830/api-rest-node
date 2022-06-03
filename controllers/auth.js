import { usersModel } from "../models/index.js";
import { matchedData } from "express-validator";
import { tokenSing } from "../utils/handleJwt.js";
import { compare, encrypt } from "../utils/handlePassword.js";
import handlehttpError from "../utils/handleErrors.js";

/**
 *
 * @param {object} req Datos ingresados por el usuario
 * @param {object} res Lo que le enviamos al frontend
 * @returns Usuario registrado
 */

const registerCtrl = async (req, res) => {
  // --> Register
  try {
    req = matchedData(req);
    const password = await encrypt(req.password); // --> password in hashed
    const body = { ...req, password };
    const dataUser = await usersModel.create(body); // --> Method of mongo create()
    dataUser.set("password", undefined, { strict: false }); //dataUser.set() --> Methods create() no deja hacer filtrados

    const data = {
      token: tokenSing(dataUser), // --> Token create
      user: dataUser, // --> information of the user
    };

    res.status(201).send({ data });
  } catch (err) {
    handlehttpError(res, "Error Create a user Method Post of Register");
  }
};

/**
 * @param {object} req Datos ingresados por el usuario
 * @param {object} res Lo que le enviamos al frontend
 * @returns Token del usuario validado
 */

const loginCtrl = async (req, res) => {
  // --> Login
  try {
    req = matchedData(req);
    /* const { password } = req; */
    const user = await usersModel
      .findOne({ email: req.email }) //serch of in element
      .select("password name role email"); //value to show the user

    if (!user) {
      handlehttpError(res, "Error not's user", 404);
    }

    const hashPassword = user.get("password"); // --> value hash encriptado
    const check = await compare(req.password, hashPassword); // --> Returns Boolean

    if (!check) {
      handlehttpError(res, "Error Password not validate", 401);
    }

    user.set("password", undefined, { strict: false }); //Quitar el password de la respuesta

    const data = {
      token: tokenSing(user),
      user,
    };

    res.status(200).send({ data });
  } catch (err) {
    console.log(err);
    handlehttpError(res, "Error Validate a user Method Post of Login");
  }
};

export { loginCtrl, registerCtrl };
