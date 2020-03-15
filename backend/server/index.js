import { ApolloServer, gql } from 'apollo-server'
import fs from 'fs'
import path from 'path'
import { resolvers } from '../graphqlSetup/resolvers'
import mongoose from 'mongoose'

const startServer = async () => {
  const typeDefs = gql(
    fs.readFileSync(
      path.resolve(process.cwd(), 'backend/graphqlSetup/typeDefs.graphql'),
      { encoding: 'utf8' },
    ),
  )
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await mongoose.connect(
    'mongodb+srv://achams:test123@chamwada-studio-cluster-mqof4.mongodb.net/chamwada_movies?retryWrites=true&w=majority',
    { useNewUrlParser: true },
  )

  const db = mongoose.connection
  db.on('error', err => console.log('Error', err))
  db.once('open', () => console.log(`Connected to mongoose`))

  server
    .listen({ port: 5000, path: '/graphql' })
    .then(({ url }) => console.log(`Server running at ${url}`))
}

startServer()
