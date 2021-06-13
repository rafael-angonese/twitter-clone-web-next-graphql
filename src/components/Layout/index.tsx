import React from 'react';
import { gql, useLazyQuery } from '@apollo/client';

import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';

const getUserById_QUERY = gql`
    query getUserById_QUERY($id: String!) {
        user(id: $id) {
            id
            name
            email
        }
    }
`;

import { Container, Wrapper } from './styles';
import { useEffect } from 'react';

const Layout: React.FC = () => {
    const [executeGetUserById, { data }] = useLazyQuery(getUserById_QUERY);
    const [results, setResults] = React.useState([]);

    useEffect(() => {
        async function getUsers() {
            executeGetUserById({
                variables: {
                    id: '93a3a40a-ef23-41e9-ad6b-6f975bfde1a2'
                }
            });

            if (data) {
                setResults(data.posts);
            }
        }
        getUsers();
    }, []);
    return (
        <Container>
            <Wrapper>
                <MenuBar />
                <Main />
                <SideBar />
            </Wrapper>
        </Container>
    );
};

export default Layout;
