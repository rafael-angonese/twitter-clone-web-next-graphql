import React from 'react';

import Feed from '../Feed';

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <img
                    height="100%"
                    width="100%"
                    src="https://pbs.twimg.com/profile_banners/3272161362/1614726812/1500x500"
                />
                <Avatar>
                    <img
                        height="100%"
                        width="100%"
                        src="https://github.com/rafael-angonese.png"
                    />
                </Avatar>
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>Rafael Angonese</h1>
                <h2>@rafael_angonese</h2>

                <p>
                    Developer at{' '}
                    <a href="https://github.com/rafael-angonese">@GitHub</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        Santa Catarina, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 07 de maio de 1999
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>73</strong>
                    </span>
                    <span>
                        <strong>43 </strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    );
};

export default ProfilePage;
