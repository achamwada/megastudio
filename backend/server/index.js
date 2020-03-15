import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import { typeDefs } from '../graphqlSetup/typeDefs'
import { resolvers } from '../graphqlSetup/resolvers'

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await mongoose.connect(
    'mongodb+srv://achams:test123@chamwada-studio-cluster-mqof4.mongodb.net/chamwada?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  )
  const db = mongoose.connection

  db.on('error', err => {
    console.log('Mongo connection failed', err)
  })

  db.once('open', () => console.log('connected to mongoDB!'))
  server
    .listen({
      port: 5000,
      path: '/graphql',
    })
    .then(({ url }) => console.log(`server running at ${url}`))
}

startServer()
