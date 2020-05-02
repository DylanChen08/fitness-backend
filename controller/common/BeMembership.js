import Members from '../../model/common/valid/Members'

console.log(1)
class Members {
    constructor() {
        this.getAllMembers = this.getAllMembers.bind(this)
        this.getSpecificMembers = this.getSpecificMembers.bind(this)
    }

    async getAllMembers(req, res, next) {
        let _Members = Members
        let results = await _Members.find({}, {})
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
    async getSpecificMembers(req, res, next) {
        if (req.params.MembersId) {
            const MembersId = parseInt(req.params.MembersId)
            let _Members = Members
            let results = await _Members.find({
                "id": MembersId
            });
            console.log('MembersId', MembersId)
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

export default new Members()