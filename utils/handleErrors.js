/**
 * Envio de rrores a un canal con Telegram o Slack
 * @param {any} res Respuesta enviada al usuario
 * @param {string} message Message para guiarnos segun el error
 * @param {number} code Error de la peticio si algo se revin
 */

const handlehttpError = (res, message = "Algo sucedio", code = 403) => {
  res.status(code);
  res.send({ err: message });
};

export default handlehttpError;
