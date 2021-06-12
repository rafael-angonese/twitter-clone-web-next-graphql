import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import apolloClinet from '../utils/apollo';
import GobalStyles from '../styles/GobalStyles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <ApolloProvider client={apolloClinet}>
                <Component {...pageProps} />

                <ToastContainer />
                <GobalStyles />
            </ApolloProvider>
        </>
    );
};

export default MyApp;
