import ReleaseLists from '../../model/common/valid/DataGroup'

console.log(1)
class Convertor {
    constructor() {
        this.releasedDataRender = this.releasedDataRender.bind(this)
        this.getSpecificData = this.getSpecificData.bind(this)
    }

    async getALLReleased(req, res, next) {
        let release = ReleaseLists
        let results = await release.find({}, {})
        console.log(results.length)
        //判断所查询的数据是否为空
        if (results.length !== 0) {
            res.send({
                status: 1,
                msg: 'ok',
                data: results
            })
        } else {

        }      res.send({
                status: 1,
                msg: 'empty'
            })
        }
    async releasedDataRender(req, res, next) {
        let release = ReleaseLists
        let eachNum = 12
        if (req.params.page) {
            const page = req.params.page
            let results = await release.find({}, {}).skip((parseInt(page) - 1) * eachNum).limit(eachNum)
            console.log(results.length)
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
    }
    async getSpecificData(req, res, next) {
        if (req.params.DataId) {
            const DataId = parseInt(req.params.DataId)
            let release = ReleaseLists
            let results = await release.find({
                "id": DataId
            });
            console.log('mid', DataId)
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


export default new Convertor();