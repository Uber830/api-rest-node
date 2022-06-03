import { Router } from "express";
import {
  createItems,
  deleteItem,
  getItem,
  getItems,
} from "../controllers/storages.js";
import uploaMiddleware from "../utils/handleStorages.js";
import validatorItem from "../validators/storages.js";

const router = Router();
/* TODO: http://localhost/storages GET, POST, PUT, DELETE */
router.get("/", getItems);
router.get("/:id", validatorItem, getItem);
router.post("/", uploaMiddleware.single("myfile"), createItems);
router.delete("/:id", validatorItem, deleteItem);

export default router;
