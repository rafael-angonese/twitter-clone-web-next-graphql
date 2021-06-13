import styled from 'styled-components';
import { Twitter } from '../../../styles/Icons';

import Button from '../../Button';

export const Grid = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 480px 480px 1fr;
    grid-template-rows: 1fr 600px 1fr;

    grid-template-areas:
        '. . . .'
        '. logo form .'
        '. . . .';

    height: 100vh;
`;

export const Left = styled.div`
    display: flex;
    grid-area: logo;
    flex-direction: column;
    align-items: stretch;
    align-items: center;
    padding: 16px;
`;

export const Right = styled.div`
    display: flex;
    grid-area: form;
    flex-direction: column;
    align-items: center;
    background: var(--secondary);
    padding: 50px;
    min-height: 80vh;
`;

export const TwitterIcon = styled(Twitter)`
    width: 50px;
    height: 50px;
`;

export const SignupButton = styled(Button)`
    margin: 10px;
    margin-top: 20px;
    /* width: 350px; */
    width: 100%;
    font-size: 15px;
    font-weight: bold;
`;

export const LoginButton = styled(Button)`
    margin-top: 20px;
    width: 250px;
    font-size: 15px;
`;
