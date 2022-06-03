import { Sequelize } from "sequelize";

// const database = process.env.MYSQL_DATABASES;
// const username = process.env.MYSQL_USER;
// const password = process.env.MYSQL_PASSWORD;
// const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize("apinode", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const dbConnectMysql = async () => {
  try {
    await sequelize.authenticate();

    console.log("Mysql Conecction correct ");
  } catch (err) {
    console.log("Mysql Error of conection  \n", err);
  }
};

export { sequelize, dbConnectMysql };
