import db from '../../mysql/db'
class Register {
    constructor() {
        this.handleReg = this.handleReg.bind(this)
    }

    async handleReg(req, res, next) {
        console.log(20202020)
        console.log('req.body', req.body)
        console.log('req.query', req.query)
        // res.send('这是从Express返回的数据')
        let sql = "select * from users"
        db.query(sql, (err, rows) => {
            if (err) {
                res.json({err: "chucuole"})
            } else {
                res.json({list: rows})
            }
        })
        //     if (req.params.movieId) {
        //         console.log(1102)
        //         const movieId = parseInt(req.params.movieId)
        //         let comments = ShortComments
        //         let results = await comments.find({
        //             "movieId": movieId
        //         });
        //         console.log('mid', movieId)
        //         console.log(results)
        //         res.send({
        //             status: 1,
        //             msg: 'ok',
        //             data: results
        //         })
        //     } else {
        //         res.send({
        //             status: 0,
        //             msg: '未找到相关数据'
        //         })
        //     }
        // }
    }
}

export default new Register();