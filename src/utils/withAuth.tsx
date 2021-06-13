// HOC Higher-Order Component
import { useRouter } from 'next/router';
import React, { ElementType, useContext, useEffect } from 'react';
import AuthContext from '../contexts/AuthContext';

const withAuth = (WrappedComponenet: ElementType) => {
    const Warapper = (props: unknown) => {
        const router = useRouter();
        const { token, is_loading } = useContext(AuthContext);

        useEffect(() => {
            if (!is_loading && !token) {
                router.replace('/signin');
            }
        }, [token, is_loading]);
        return <WrappedComponenet {...props} />;
    };

    return Warapper;
};

export default withAuth;
