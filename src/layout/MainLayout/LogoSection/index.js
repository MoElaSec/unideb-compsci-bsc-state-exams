import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <div>
        <ButtonBase disableRipple component={Link} to={config.defaultPath}>
            <img src="/logos/university-logo.png" alt="Hello" width={60} height={60} />
            <h4>IK Comp.Sci</h4>
        </ButtonBase>
    </div>
);

export default LogoSection;
