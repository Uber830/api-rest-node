import { check } from "express-validator";
import validateResult from "../utils/handleValidator.js";

/* TODO:Especificamos como queremos la data por parte del usuario
Esquema de la data */

const validatorCreateItem = [
  check("name").exists().notEmpty(),
  check("album").exists().notEmpty(),
  check("cover").exists().notEmpty(),
  check("artist").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duration").exists().notEmpty(),
  check("duration.start").exists().notEmpty(),
  check("duration.end").exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),
  (req, res, next) => validateResult(req, res, next), //util
];

/* TODO:Validar id */
const validatorItem = [
  check("id").exists().notEmpty().isMongoId(),
  (req, res, next) => validateResult(req, res, next),
];

export { validatorCreateItem, validatorItem };
