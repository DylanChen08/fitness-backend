import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const varietyShowsSchema = new Schema({}, {collection: 'test'})

varietyShowsSchema.index({id: 1});

const test = mongoose.model('test', varietyShowsSchema)

export default test
