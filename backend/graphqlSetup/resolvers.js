import Movie from '../models/Movie'
import Actor from '../models/Actor'
export const resolvers = {
  Query: {
    movie: async (_, { id }) => {
      try {
        const searchedMovie = await Movie.findById(id)
        return searchedMovie
      } catch (error) {
        console.log('Error in retrieving movie', error)
      }
    },
    movies: async () => {
      try {
        const movies = await Movie.find({})
        return movies
      } catch (error) {
        console.log('Error in retrieving movies', error)
      }
    },
  },
  Mutation: {
    addMovie: async (_, { input }) => {
      const movie = new Movie(input)
      const { actors } = input
      try {
        const savedMovie = await movie.save()
        if(actors.length){
          await Actor.insertMany(actors)

        }
        return savedMovie
      } catch (error) {
        console.log('Error in saving movie', error)
      }
    },
    deleteMovie: async (_, { id }) => {
      try {
        const movie = await Movie.findByIdAndDelete(id)
        return movie
      } catch (error) {
        console.log('Error in deleting movie', error)
      }
    },
    updateMovie: async (_, { input }) => {
      try {
        // console.log('input is', input)
        await Movie.findByIdAndUpdate(input.id, input)
        return input
      } catch (error) {
        console.log('Error in updating movie', error)
      }
    },
    addActor: async (_, { input }) => {
      const actor = new Actor(input)
      try {
        const savedActor = await actor.save()
        return savedActor
      } catch (error) {
        console.log('error in saving an actor', error)
      }
    },
  },
}
