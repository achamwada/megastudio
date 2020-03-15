import { Movie } from '../schemas/Movie'
export const resolvers = {
  Query: {
    Movie: async () => {
      const movie = await Movie.find()
      return movie
    },
  },

  Mutation: {
    addMovie: async (_, { input }) => {
      const movie = new Movie(input)
      try {
        await movie.save()
        return movie
      } catch (error) {
        console.log(`Not saved ${JSON.stringify(input, null, 2)}`)
      }
    },
  },
}
