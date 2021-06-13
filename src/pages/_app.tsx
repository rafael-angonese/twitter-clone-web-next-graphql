import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from '../contexts/AuthContext';

import apolloClinet from '../utils/apollo';
import GobalStyles from '../styles/GobalStyles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <AuthProvider>
                <ApolloProvider client={apolloClinet}>
                    <Component {...pageProps} />
                </ApolloProvider>
            </AuthProvider>

            <ToastContainer />
            <GobalStyles />
        </>
    );
};

export default MyApp;
