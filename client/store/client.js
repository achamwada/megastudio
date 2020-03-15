import  { ApolloClient,  HttpLink, InMemoryCache }from '@apollo/client'

const Client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:5000/graphql'
    }),
    cache: new InMemoryCache()
})

export default Client