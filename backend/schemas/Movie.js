import { Schema, model } from 'mongoose'

const MovieSchema = new Schema({
  name: Schema.Types.String,
  description: Schema.Types.String,
  length: Schema.Types.Number,
})

export const Movie = model('Movie', MovieSchema)
