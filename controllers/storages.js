import "dotenv/config";
import fs from "fs";
import { matchedData } from "express-validator";
import { storageModel } from "../models/index.js";
import handlehttpError from "../utils/handleErrors.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${dirname(fileURLToPath(import.meta.url))}/../storage`; //Router of the document

/* TODO: Obtener lista de la base de datos */
const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});

    res.status(200).send(data);
  } catch (err) {
    handlehttpError(res, "Error Obtain the Items Method Get");
  }
};

/* TODO: Obtener un detalle */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await storageModel.findById(id);

    res.status(200).send(data);
  } catch (err) {
    handlehttpError(res, "Error Obtain of the detail Item Method Get");
  }
};

/* TODO: Insertar un registro */
const createItems = async (req, res) => {
  try {
    const { filename } = req.file;
    const fileData = {
      filename,
      url: `${PUBLIC_URL}/${filename}`,
    };

    console.log(fileData);
    const data = await storageModel.create(fileData);
    console.log(data);

    res.status(200).send({ data });
  } catch (err) {
    handlehttpError(res, "Error Create the Item Method Post");
  }
};

/* TODO: Eliminar un registro tanto fisico como de la base de datos */
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    //const dataFile = await storageModel.findById(id);
    const data = await storageModel.delete({ _id: id }); // TODO: Logical Deleted --> Status of change
    //await storageModel.deleteOne(id); // --> Delete in Mongo
    // const { filename } = dataFile;
    // const filePath = `${MEDIA_PATH}/${filename}`;

    // fs.unlinkSync(filePath); // TODO:Delete document in physical

    // const data = {
    //   filePath,
    //   deleted: 1,
    // };

    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    handlehttpError(res, "Error Delete the item Method Delete ");
  }
};

export { getItems, getItem, createItems, deleteItem };
