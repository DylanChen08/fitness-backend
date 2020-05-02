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
        setInterval(()=>{console.log('\'\x1B[33m%s\x1B[0m\'','正在监听127.0.0.1:3000')},2000)
        setInterval(()=>{console.log('\'\x1B[36m%s\x1B[0m\'','从127.0.0.1:3000收取数据,请稍等')},1000)
        setInterval(()=>{console.log('\'\x1B[37m%s\x1B[0m\'','APPCrashListener监听中，状态：正常')},1000)
    }
})
let query = (sql, callback) => {
    connection.query(sql, function (err, rows) {
        callback(err, rows);
    });
    // connection.end();//end()只能连接一次
}

exports.query = query