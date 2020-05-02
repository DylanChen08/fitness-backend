import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const booksSchema = new Schema({}, {collection: 'beMembership'})

booksSchema.index({id: 1});

const beMembership = mongoose.model('beMembership', booksSchema)

export default beMembership
