import Layout from '../components/Layout';

import withAuth from '../utils/withAuth';

const HomePage: React.FC = () => {
    return (
        <>
            <Layout />
        </>
    );
};

export default withAuth(HomePage);
