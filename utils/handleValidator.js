import { validationResult } from "express-validator";

/* TODO:Recibe validations ../validators/tracks.js */
const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    res.status(403);
    res.send({ errors: error.array() });
  }
};

export default validateResult;