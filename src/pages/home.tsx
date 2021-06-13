import HomeLayout from '../components/Layouts/HomeLayout';

import withAuth from '../utils/withAuth';

const HomePage: React.FC = () => {
    return (
        <>
            <HomeLayout />
        </>
    );
};

export default withAuth(HomePage);
