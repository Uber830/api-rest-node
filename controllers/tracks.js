import { matchedData } from "express-validator"; //validator
import { tracksModel } from "../models/index.js";
import handlehttpError from "../utils/handleErrors.js"; //Errors

/* TODO: Obtener lista de la base de datos */
const getItems = async (req, res) => {
  try {
    const user = req.user; //Nos llega del middleware --> Inyeccion del usuario
    const data = await tracksModel.find({})

    res.status(200).send({ data, user });
  } catch (err) {
    handlehttpError(res, "Error Obtener lista Items Method Get");
  }
};

/* TODO: Obtener un detalle */
const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await tracksModel.findById(id);

    res.status(200).send({ data });
  } catch (err) {
    handlehttpError(res, "Error Obtener detalle Item Method Get");
  }
};

/* TODO: Insertar un registro */
const createItems = async (req, res) => {
  try {
    const body = matchedData(req); //Data of clean matcheData
    const data = await tracksModel.create(body);

    res.status(200).send({ data });
  } catch (err) {
    console.log(err)
    handlehttpError(res, "Error Create Items Method Post");
  }
};

/* TODO: Actualizar un registro */
const updateItem = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(id, body);

    res.status(200).send({ data });
  } catch (err) {
    handlehttpError(res, "Error Update Item Method Put");
  }
};

/* TODO: Eliminar un registro */
const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await tracksModel.delete({ _id: id }); // deleteOne -> Elimina,  Soft  delete -> Cambio de estado

    res.status(200).send({ data });
  } catch (err) {
    handlehttpError(res, "Error Delete Item Method Delete");
  }
};

export { getItems, getItem, createItems, updateItem, deleteItem };
