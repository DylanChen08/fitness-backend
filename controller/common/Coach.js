import coach from '../../model/common/valid/coach'
class Coach {
    constructor() {
        this.getAllcoach = this.getAllcoach.bind(this)
        this.getSpecificCoach = this.getSpecificCoach.bind(this)
    }

    async getAllcoach(req, res, next) {
        let _coach = coach
        let results = await _coach.find({}, {})
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
    async getSpecificCoach(req, res, next) {
        if (req.params.coachID) {
            const coachID = parseInt(req.params.coachID)
            let coach = coach
            let results = await coach.find({
                "id": coachID
            });
            console.log('coachID', coachID)
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

export default new Coach()