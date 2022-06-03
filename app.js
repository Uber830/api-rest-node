import "dotenv/config"; //dotenv.config();
import express from "express";
import cors from "cors";
import dbConnectNoSql from "./config/mongo.js";
import { dbConnectMysql } from "./config/mysql.js";
import routes from "./routes/index.js"; //vistas
import morganBody from "morgan-body";
import loggerStream from "./utils/handleLogger.js";

const app = express();
const PORT = process.env.PORT_APP || 3002;
const ENGINE_DB = process.env.ENGINE_DB;

/**
 * Aqui invocamos las rutas!
 */

//Leer informacion por la terminal morgan, envio a slack
morganBody(app, {
  noColors: true,
  stream: loggerStream,
  skip: function (req, res) {
    return res.statusCode < 400;
  },
});

app.use(express.static("storage"));
app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server run in the port ${PORT}`);
});

ENGINE_DB === "nosql" ? dbConnectNoSql() : dbConnectMysql();
