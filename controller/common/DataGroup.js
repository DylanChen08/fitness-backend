// import DataLists from '../../model/common/valid/DataList'

console.log(1)
class DataList {
    constructor() {
        this.getALLData = this.getALLData.bind(this)
        this.DataRender = this.DataRender.bind(this)
        this.getSpecific = this.getSpecific.bind(this)
    }

    //获取正在上映的全部电影

    async getALLData(req, res, next) {
        let Data = DataLists
        let results = await Data.find({}, {})
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
    async DataRender(req, res, next) {
        let Data = DataLists
        let eachNum = 12
        if (req.params.page) {
            const page = parseInt(req.params.page)
            let results = await Data.find({}, {}).skip((parseInt(page) - 1) * eachNum).limit(eachNum)
            console.log('请求 电影-未上映的数据')
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

    /*
    * 获取单个未上映的电影的数据
    * @params:Id
    *
    * */
    async getSpecific(req, res, next) {
        if (req.params.Id) {
            const Id = parseInt(req.params.Id)
            let Data = DataLists
            let results = await Data.find({
                "id": Id
            });
            console.log('mid', Id)
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


export default new DataList();