const mongoose = require('mongoose')
const { schema } = require('./author')
const Schema = mongoose.Schema

const BookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, required: true, ref: 'Author'},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
})

BookSchema
    .virtual('url')
    .get(()=>{
        return `/catalog/book/ + ${this._id}`;
    })

module.exports = mongoose.model('Book', BookSchema)