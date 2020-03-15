import { Schema, model } from 'mongoose'

const ActorSchema = new Schema({
  first_name: String,
  last_name: String,
  bio: String,
})

export default model('Actor', ActorSchema)
