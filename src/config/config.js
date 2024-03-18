import dotenv from "dotenv";
dotenv.config();

import mysql from "mysql2";
let connection;

try {
  connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
  });
} catch (error) {
  console.log("Error al conectar con la base de datos");
}

export { connection };
