import Data from '../../model/common/valid/Data'


class Data {
    constructor() {
        this.getAllData = this.getAllData.bind(this)
        this.getSpecific = this.getSpecific.bind(this)
    }

    async getAllData(req, res, next) {
        let _s = Data
        let results = await _s.find({}, {})
        console.log('请求 全部综艺的数据')
        console.log(results)
        //判断所查询的数据是否为空
        if (results.length !== 0) {
            res.send({
                status: 1,
                msg: 'ok',
                data: results
            })
        } else {
            res.send({
                status: 1,
                msg: 'empty'
            })
        }

    }

    async getSpecific(req, res, next) {
        if (req.params.Id) {
            const Id = parseInt(req.params.Id)
            let _s = Data
            let results = await _s.find({
                "id": Id
            });
            console.log('id', Id)
            console.log(results)
            res.send({
                status: 1,
                msg: 'ok',
                data: results
            })
        } else {
            res.send({
                status: 0,
                msg: '未找到相关数据'
            })
        }
    }

}

export default new Data()