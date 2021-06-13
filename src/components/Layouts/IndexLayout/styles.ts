import styled from 'styled-components';
import { Twitter } from '../../../styles/Icons';

import Button from '../../Button';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Logo = styled.div`
    height: 100vh;
    width: 100%;
`;

export const Body = styled.div`
    width: 100%;
    padding: 30px;

    h1 {
        font-weight: bold;
        font-size: 70px;
        margin-bottom: 50px;
    }

    h3 {
        font-size: 30px;
        margin-bottom: 40px;
    }
`;

export const SignupButton = styled(Button)`
    display: block;
    margin-bottom: 20px;
    width: 350px;
    font-size: 15px;
    font-weight: bold
`;

export const LoginButton = styled(Button)`
    width: 350px;
    font-size: 15px;
`;

export const TwitterIcon = styled(Twitter)`
    width: 50px;
    height: 50px;
    margin-bottom: 50px;
`;
