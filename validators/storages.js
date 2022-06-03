import { check } from "express-validator";
import validateResult from "../utils/handleValidator.js";

/* TODO:Validar id */
const validatorItem = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => validateResult(req, res, next),
];

export default validatorItem;
