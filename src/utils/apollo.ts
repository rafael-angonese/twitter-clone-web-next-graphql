import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { toast } from 'react-toastify';

const httpLink = createHttpLink({
    uri: 'http://localhost:3333/graphql'
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(error => {
            error?.extensions?.exception?.response?.message.forEach(
                (message: String) => {
                    toast.error(`🥺 ${message}`);
                }
            );
        });
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache()
});

export default client;
