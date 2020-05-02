let a = {}
export default app => {
    /*
    * 1.路由拼接
    * 2.挂载至相应的中间件
    * 3.拼接示例：/common/xxx
    *
    * */
    app.use('/common', a);

}