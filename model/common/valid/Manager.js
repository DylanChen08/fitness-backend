import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const tvSeriesSchema = new Schema({}, {collection: 'manager'})

tvSeriesSchema.index({id: 1});

const manager = mongoose.model('manager', tvSeriesSchema)

export default manager
