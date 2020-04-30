
console.log(1)
class Test {
    constructor() {
        this.RETEST = this.RETEST.bind(this)
    }

    async RETEST(req, res, next) {
        // let tv = tvSeries
        // let results = await tv.find({}, {})
        console.log('请求 全部TEST数据')
        // console.log(results)
        res.send({
            status: 1,
            msg: 'ok',
            data: [1,2,3,4,5,6,7,8,9]
        })
        //判断所查询的数据是否为空
    }


}

export default new Test()