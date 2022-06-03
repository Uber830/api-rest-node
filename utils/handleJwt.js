import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * @param {object} user Debes pasar el object del usuario
 * @returns Sing token of the user, firmar
 */

const tokenSing = (user) => {
  const sign = jwt.sign(
    {
      _id: user._id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  return sign;
};

/**
 * @param {string} tokenJwt Token ya previamente creado
 * @returns Respuesta de la validacion del token contra la secreta
 */

const verifyToken = (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (err) {
    return null;
  }
};

export { tokenSing, verifyToken };
