import React from 'react';
import { AppProps } from 'next/app';
import GobalStyles from '../styles/GobalStyles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />

            <GobalStyles />
        </>
    );
};

export default MyApp;
