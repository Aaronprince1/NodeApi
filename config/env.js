const mysql = require('mysql2/promise');

const dbName = process.env.DB_SCHEMAS || "cks";
const env = {
    user: "root",
    password: "",
    host: "localhost",
    dialect: "mysql",
    database :"cks"
};

// mysql.createConnection({
//     host: process.env.DB_HOST || env.host,
//     port: process.env.DB_PORT || env.port,
//     user: process.env.DB_USER || env.user,
//     password: process.env.DB_PASSWORD || env.password,
// })
//     .then((connection) => {
//         connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
//             console.info("Created Db Successfully or Checked")
//         });
//     });

env.database = dbName;
module.exports = env;