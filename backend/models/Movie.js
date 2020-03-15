import { Schema, model } from 'mongoose'

const MovieSchema = new Schema({
  title: String,
  description: String,
  length: String,
  year: Number,
  actors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Actor',
    },
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
