var http = require('http');
var querystring = require("querystring");
//查询参数拼接
//增加的数据
var contents = querystring.stringify({
    id:5,
    age:'23',
    name: "艾利斯提",
    address: "dongbei",
});
var options = {
    host: "localhost",
    port: 8080,
    path:"/add",
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": contents.length
    }
};
var req = http.request(options, function (res) {
    res.setEncoding("utf8");
    res.on("data", function (data) {
        console.log(data);
    })
})
//发送数据
req.write(contents);
req.end(); //结束请求，否则服务器将不会收到信息
