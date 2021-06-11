import React, { useState } from 'react';
import Router from 'next/router';

import { Grid, Right, Left, TwitterIcon, SigninButton } from './styles';
import InputText from '../../Input/InputText';

const HomeLayout: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const data = {
            name: name,
            email: email,
            password: password
        };

        console.log(data);

        setLoading(true);

        try {
            // await axios.post('/register', data);

            setLoading(false);

            // toast({
            //     title: 'Conta registrada com sucesso!',
            //     status: 'success',
            //     position: 'top-right',
            //     isClosable: true
            // });
            Router.push('/home')
        } catch (error) {
            console.log(error);
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

                <SigninButton onClick={handleLogin}>Inscrever-se</SigninButton>
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

export default HomeLayout;
