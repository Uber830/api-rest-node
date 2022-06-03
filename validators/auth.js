import { check } from "express-validator";
import validateResult from "../utils/handleValidator.js";

/* TODO:Especificamos como queremos la data por parte del usuario
Esquema de la data */

//TODO: Validator of Register
const validatorRegister = [
  check("name").exists().notEmpty().isLength({ min: 3, max: 60 }),
  check("age").exists().notEmpty(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 5, max: 15 }),
  (req, res, next) => validateResult(req, res, next), //util
];

//TODO: Validator of Login
const validatorLogin = [
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({ min: 5, max: 15 }),
  (req, res, next) => validateResult(req, res, next), //util
];

export { validatorRegister, validatorLogin };
