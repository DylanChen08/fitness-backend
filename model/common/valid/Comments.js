import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const carouselSchema = new Schema({}, {collection: 'carousel'})

carouselSchema.index({id: 1});

const Comments = mongoose.model('Comments', carouselSchema)

export default Comments

