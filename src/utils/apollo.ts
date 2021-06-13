import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    from
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';

import { toast } from 'react-toastify';
const httpLink = createHttpLink({
    uri: 'http://localhost:3333/graphql'
});

const authLink = setContext((_, { headers }) => {
    const token = Cookies.get('token');
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(error => {
            toast.error(
                `🥺 ${error?.extensions?.exception?.response?.message}`
            );

            //TODO
            // mensagens de erro quando for um array ou quando for apeans uma string
            // error?.extensions?.exception?.response?.message?.forEach(
            //     (message: String) => {
            //         toast.error(`🥺 ${message}`);
            //     }
            // );
            //FIM TODO
        });
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
    link: from([errorLink, authLink.concat(httpLink)]),
    cache: new InMemoryCache()
});

export default client;
