import db from '../../mysql/db'

class Register {
    constructor() {
        this.handleReg = this.handleReg.bind(this)
    }

    async handleReg(req, res, next) {
        console.log(20202020)
        console.log('req.body', req.body)
        console.log('req.query', req.query)
        let sql = "select * from users"
        // let sql = `INSERT INTO users (username, password, email) VALUES (${req.query.username}, ${req.query.password}, ${req.query.email})`
        db.query(sql, (err, rows) => {
            if (err) {
                res.json({err: "chucuole"})

            } else {
                res.json({list: rows})
            }
        })

    }
}

export default new Register();