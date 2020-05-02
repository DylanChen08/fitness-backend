import Data from '../../model/common/valid/Data'

class Data {
    constructor() {
        this.getALLData = this.getALLData.bind(this)
    }

    async getALLData(req, res, next) {
        let Data = Data
        let results = await Data.find({}, {})
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
    async getSpecificData(req, res, next) {
        if (req.params.DataId) {
            const DataId = parseInt(req.params.DataId)
            let DataS = Data
            let results = await DataS.find({
                "id": DataId
            });
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