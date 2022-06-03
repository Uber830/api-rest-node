import { Router } from "express";
import {
  createItems,
  deleteItem,
  getItem,
  getItems,
  updateItem,
} from "../controllers/tracks.js";
import checkRol from "../middleware/rol.js";
import authMiddleware from "../middleware/session.js";
import { validatorCreateItem, validatorItem } from "../validators/tracks.js";
/* import customHeaders from "../middleware/customHeader.js"; */

const router = Router();
/* TODO: http://localhost/router GET, POST, PUT, DELETE */

router.get("/", authMiddleware, getItems); //authenticated
router.get("/:id", authMiddleware, validatorItem, getItem);
router.post("/", authMiddleware, checkRol(["admin"]), validatorCreateItem, createItems); //Post === admin
router.put("/:id", authMiddleware, validatorCreateItem, validatorItem, updateItem);
router.delete("/:id", authMiddleware, validatorItem, deleteItem);

export default router;
