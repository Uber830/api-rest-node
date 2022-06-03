import handlehttpError from "../utils/handleErrors.js";

/**
 * @param {Array} roles Array con valores permitidos ['user','admin']
 * @returns Boolean si || no
 */

const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const rolesByUser = user.role;

    const checkValueRol = roles.some((roleSingle) => rolesByUser.includes(roleSingle)); 
    // --> Si se encuentra el valor del usuarion dentro de nuestro rol obtenido por el middleware

    if (!checkValueRol) {
      handlehttpError(res, "Error User not have permission", 403);
      return
    }

    next();
  } catch (err) {
    handlehttpError(res, "Error get permission", 403);
  }
};

export default checkRol;