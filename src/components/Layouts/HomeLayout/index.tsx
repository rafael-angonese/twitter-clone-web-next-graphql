import React from 'react';
import Router from 'next/router';

import {
    Container,
    Logo,
    Body,
    SigninButton,
    LoginButton,
    TwitterIcon
} from './styles';

const HomeLayout: React.FC = () => {
    return (
        <Container>
            <Logo>
                <img
                    height="100%"
                    width="100%"
                    src="https://github.com/rafael-angonese.png"
                />
            </Logo>

            <Body>
                <TwitterIcon />

                <h1>Acontecendo agora</h1>
                <h3>Inscreva-se no Tuinter hoje mesmo.</h3>

                <SigninButton onClick={() => Router.push('/signin')}>
                    Inscrever-se
                </SigninButton>
                <LoginButton outlined onClick={() => Router.push('/login')}>
                    Entrar
                </LoginButton>
            </Body>
        </Container>
    );
};

export default HomeLayout;
