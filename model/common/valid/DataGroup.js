const http = require("http");
var querystring = require("querystring");
//查询参数拼接
// 发送请求的配置
var contents = querystring.stringify({
    id:1,
    age:'25',
    name: "Sarah",
    address: "qingdao",
});
let config = {
    host: "localhost",
    port: 8080,
    path:'/update',
    method: "PUT",
    headers: {
        a: 1
    }
};
// 创建客户端
let client = http.request(config, function(res) {
    // 接收服务端返回的数据
    let repData='';
    res.on("data", function(data) {
        repData=data.toString()
        console.log(repData)
    });

});
client.write(contents);
// 发送请求
client.end();
