const mysql = require("mysql");

const db = mysql.createConnection({
    host: "samsso.c7hnqpgwel3s.ap-northeast-2.rds.amazonaws.com",
    user : "admin",
    password : "616aa715",
    database:"samsso",
});


db.connect();

module.exports = db;