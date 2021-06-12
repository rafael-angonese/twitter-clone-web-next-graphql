import React, { useState } from 'react';
import Router from 'next/router';
import { gql, useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import { Grid, Right, Left, TwitterIcon, SignupButton } from './styles';
import InputText from '../../Input/InputText';

const createUser_MUTATION = gql`
    mutation createUser_MUTATION(
        $name: String!
        $email: String!
        $password: String!
    ) {
        createUser(data: { name: $name, email: $email, password: $password }) {
            id
            name
        }
    }
`;

const SignupLayout: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signup] = useMutation(createUser_MUTATION);

    const handleSignup = async () => {
        const data = {
            name: name,
            email: email,
            password: password
        };
        setLoading(true);

        try {
            // await signup({
            //     variables: data
            // });
            await new Promise(resolve => setTimeout(resolve, 2000));

            setLoading(false);
            toast.dark('💜 Conta registrada com sucesso!');
            // Router.push('/signin');
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <Grid>
            <Left>
                <TwitterIcon />
                <h1>Criar sua conta</h1>

                <InputText
                    required
                    label="Nome"
                    value={name}
                    setValue={setName}
                    onChange={event => setName(event.target.value)}
                />
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

                <SignupButton onClick={handleSignup}>Inscrever-se</SignupButton>
            </Left>

            <Right>
                <h1>Entrar no Tuinter</h1>

                <h4>
                    Já possui uma conta? <a>Ir para o Login</a>{' '}
                </h4>
            </Right>
        </Grid>
    );
};

export default SignupLayout;
