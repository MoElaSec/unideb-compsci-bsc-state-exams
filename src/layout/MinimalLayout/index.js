import { Outlet } from 'react-router-dom';

// project imports
import ShareButton from '../Share';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => (
    <>
        <Outlet />
        <ShareButton />
    </>
);

export default MinimalLayout;
