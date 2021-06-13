import React from 'react';
import Router from 'next/router';

import {
    Container,
    Logo,
    Body,
    SignupButton,
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
                <h3>Inscreva-se no Twitter hoje mesmo.</h3>

                <SignupButton onClick={() => Router.push('/signup')}>
                    Inscrever-se
                </SignupButton>
                <LoginButton outlined onClick={() => Router.push('/signin')}>
                    Entrar
                </LoginButton>
            </Body>
        </Container>
    );
};

export default HomeLayout;
