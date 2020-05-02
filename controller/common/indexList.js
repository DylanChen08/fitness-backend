// import Comments from '../../model/common/valid/Comments'


class IndexList {
    constructor() {
        this.indexDataRender = this.indexDataRender.bind(this)
        console.log(this.indexDataRender)
    }

    async indexDataRender(req, res, next) {
        let index = Comments
        let results = await index.find({}, {})
        res.send(results)
    }
    async indexCarouselRender(req, res, next){
        let index = Comments
        let results = await index.find({}, {})
        res.send(results)
    }
}

export default new IndexList();