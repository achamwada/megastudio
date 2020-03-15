import { gql } from 'apollo-server'

export const typeDefs = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    movie(id: ID!): Movie!
    movies: [Movie]
  }

  type Mutation {
    addMovie(input: MovieInput!): Movie!
    deleteMovie(id: ID!): Movie!
    updateMovie(input: MovieInput!): Movie!
    addActor(input: ActorInput!): Actor!
  }

  input MovieInput {
    id: ID
    title: String!
    description: String
    length: String
    year: Int
    actors: [ActorInput]
  }

  input ActorInput {
    first_name: String
    last_name: String
    bio: String
  }

  type Movie {
    id: ID!
    title: String!
    description: String
    length: String
    year: Int
    actors: [Actor]
  }

  type Actor {
    id: ID!
    first_name: String!
    last_name: String!
    bio: String
  }
`
