import { Router } from "express";
import storages from "./storages.js";
import tracks from "./tracks.js";
import users from "./users.js";
import auth from "./auth.js";
// import fs from "fs";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

const router = Router();

// const __dirname = dirname(fileURLToPath(import.meta.url)); /* Acceder a la ruta */
// const PATH_ROUTES = __dirname;

router.use("/tracks", tracks);
router.use("/storages", storages);
router.use("/users", users);
router.use("/auth", auth);

/* Remover .js */
// const removeExtension = (fileName) => {
//   /* TODO: Nos separa los array en dos tracks.js [track, .js]  */
//   return fileName.split(".").shift();
// };

//  fs.readdirSync(PATH_ROUTES).filter((file) => {
//   const name = removeExtension(file); /* TODO: storages, tracks, users */
//  if (name !== "index") {
//     /* router.use(`/${name}`, require(`./${file}`)); */
//     router.use(`/${name}`, import(`${file}`));
//   }
// });

export default router;
