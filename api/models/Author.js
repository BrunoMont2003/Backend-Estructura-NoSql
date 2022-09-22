import { Schema, model } from 'mongoose'

const AuthorSchema = new Schema({
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
})

export default model('Author', AuthorSchema)
