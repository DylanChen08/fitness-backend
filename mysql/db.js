const mysql = require("mysql")
const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "fitness"
})
connection.connect((err) => {
    if (err) {
        console.log("连接失败")
    } else {
        console.log("mysql数据库连接成功")
    }
})
let query = (sql, callback) => {
    connection.query(sql, function (err, rows) {
        callback(err, rows);
    });
    // connection.end();//end()只能连接一次
}

exports.query = query