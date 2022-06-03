import bcryptjs from "bcryptjs";

/**
 * @param {string} passswordPlain Password en texto plano del usuario
 * @returns Return Promise with resulting password to hashed
 */

const encrypt = async (passswordPlain) => {
  const hash = await bcryptjs.hash(passswordPlain, 10);
  return hash;
};

/**
 * @param {string} passswordPlain Password en texto plano extraida del require
 * @param {string} hashPassword  Password en hash extraido de la bases de datos
 * @returns Promise Token validado, user existente
 */

const compare = async (passswordPlain, hashPassword) => {
  return await bcryptjs.compare(passswordPlain, hashPassword);

};

export { encrypt, compare };
