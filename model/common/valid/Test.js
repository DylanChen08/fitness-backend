const http = require("http");
// 发送请求的配置
let config = {
    host: "localhost",
    port: 8080,
    //删除数据的参数
    path:'/delete?name=bill',
    method: "DELETE",
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
    res.on("end", function() {
        // console.log(Buffer.concat(arr).toString());
    });
});
// 发送请求
client.end();
