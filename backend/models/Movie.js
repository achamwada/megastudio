import { Schema, model } from 'mongoose'
import { ActorSchema } from "./Actor"

const MovieSchema = new Schema({
  title: String,
  description: String,
  length: String,
  year: Number,
  actors: [
    ActorSchema
  ],
  date_added: {
    type: Date,
    default: Date.now,
  },
  date_modified: {
    type: Date,
    default: Date.now,
  },
})

export default model('Movie', MovieSchema)
