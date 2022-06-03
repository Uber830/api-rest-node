import multer from "multer";
import { dirname } from "path";
import { fileURLToPath } from "url";

//Middleware upload storage
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    const pathStorage = `${dirname(fileURLToPath(import.meta.url))}/../storage`;

    callback(null, pathStorage);
  },
  // TODO: Asignando nombre al archivo
  filename: function (req, file, callback) {
    const ext = file.originalname.split(".").pop(); //captura extencion del archivo
    const filename = `file-${Date.now()}.${ext}`; //Genra nombres aleatorios

    callback(null, filename);
  },
});

const uploaMiddleware = multer({ storage });

export default uploaMiddleware;
