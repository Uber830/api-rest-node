import { Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth.js";
import { validatorLogin, validatorRegister } from "../validators/auth.js";

const router = Router();
/* TODO: http://localhost/auth/resgister GET, POST, PUT, DELETE */

router.post("/register", validatorRegister, registerCtrl);
router.post("/login", validatorLogin, loginCtrl);

export default router;
