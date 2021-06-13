import React, { useState } from 'react';
import Router from 'next/router';
import { gql, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import {
    Grid,
    Right,
    Left,
    TwitterIcon,
    SignupButton,
    LoginButton
} from './styles';
import InputText from '../../Input/InputText';

const login_MUTATION = gql`
    mutation login_MUTATION($email: String!, $password: String!) {
        login(data: { email: $email, password: $password }) {
            token
            user {
                id
                name
                email
            }
        }
    }
`;

const SigninLayout: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('rafael.lala@gmail.com');
    const [password, setPassword] = useState('132456');

    const [login] = useMutation(login_MUTATION);

    const handleSignin = async () => {
        const data = {
            email: email,
            password: password
        };
        setLoading(true);

        try {
            const response = await login({
                variables: data
            });

            console.log(response.data.login.user);
            console.log(response.data.login.token);

            setLoading(false);
            toast.dark('💜 Login realizado com sucesso!');
            // Router.push('/home');
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <Grid>
            <Left>
                <h1>Inscrever-se no Twitter?</h1>

                <LoginButton outlined onClick={() => Router.push('/signup')}>
                    Inscrever-se
                </LoginButton>
            </Left>

            <Right>
                <TwitterIcon />
                <h1>Entrar no Twitter</h1>

                <InputText
                    required
                    label="E-mail"
                    value={email}
                    setValue={setEmail}
                    type="email"
                    onChange={event => setEmail(event.target.value)}
                />
                <InputText
                    required
                    label="Senha"
                    value={password}
                    setValue={setPassword}
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                />

                <SignupButton loading={loading ? 1 : 0} onClick={handleSignin}>
                    Entrar
                </SignupButton>
            </Right>
        </Grid>
    );
};

export default SigninLayout;
