
/* Middleware que nos validara lo que nos llegue por la cabecera Header */

const  customHeaders = (req, res, next) => {
  const { headers } = req;

  console.log(headers);
  next();
};

export default customHeaders;
