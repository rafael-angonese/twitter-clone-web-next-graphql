import React, { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface User {
    id: number;
    name: string;
    email: string;
}

interface AuthContextData {
    token: string;
    user: User | null;
    is_loading: boolean;
    setAuth(token: string, user: User): Promise<void>;
    logout(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [token, setToken] = useState<string>('');
    const [user, setUser] = useState<User | null>(null);
    const [is_loading, setIs_loading] = useState(true);

    useEffect(() => {
        async function loadStoragedData() {
            const storagedToken = Cookies.get('token');
            const storagedUser = Cookies.get('user');

            if (storagedToken) {
                setToken(storagedToken);
            }
            if (storagedUser) {
                setUser(JSON.parse(storagedUser));
            }

            setIs_loading(false);
        }

        loadStoragedData();
    }, []);

    async function setAuth(token: string, user: User) {
        await Cookies.set('token', token);
        await Cookies.set('user', user);
        setToken(token);
        setUser(user);
    }

    async function logout() {
        await Cookies.remove('token');
        await Cookies.remove('user');
        setToken('');
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{ token, user: user, is_loading, setAuth, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
