import ShortTimeTable from '../../model/common/valid/TimeTable'

class ShortComment {
    constructor() {
        this.getTimeTable = this.getTimeTable.bind(this)
    }

    async getTimeTable(req, res, next) {
        if (req.params.TimeTableId) {
            console.log(1102)
            const TimeTableId = parseInt(req.params.TimeTableId)
            let TimeTable = ShortTimeTable
            let results = await TimeTable.find({
                "TimeTableId": TimeTableId
            });
            console.log('mid', TimeTableId)
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

export default new ShortComment();