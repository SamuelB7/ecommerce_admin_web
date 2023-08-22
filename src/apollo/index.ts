import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";


let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
    return new ApolloClient({
        uri: "http://localhost:3333/graphql",
        cache: new InMemoryCache()
    })
}

export function getApolloClient(initialState = null) {
    const apolloClientGlobal = apolloClient ?? createApolloClient()
    if (initialState) {
        apolloClientGlobal.cache.restore(initialState)
    }
    if (typeof window === 'undefined') return apolloClientGlobal
    apolloClient = apolloClient ?? apolloClientGlobal
    return apolloClient
}