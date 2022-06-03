import mongoose from "mongoose";

const dbConnectNoSql = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, res) => {
      !err
        ? console.log("Tdo bien, Tdo correcto :) \n")
        : console.log("Error de Conexion");
    }
  );
};

export default dbConnectNoSql;
