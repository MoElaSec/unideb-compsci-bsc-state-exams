import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Drawer, Fab, Grid, IconButton, Tooltip } from '@mui/material';
import { IconShare, IconBrandGithub, IconCopy } from '@tabler/icons';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import CardSecondaryAction from 'ui-component/cards/CardSecondaryAction';
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SHARE ||============================== //

const ShareButton = () => {
    const theme = useTheme();

    // drawer on/off
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
        setCopied(false);
    };

    const handleCopyPageUrl = () => {
        navigator.clipboard.writeText(`https://unideb-compsci-bsc-state-exams.netlify.app`);
        setCopied(true);
    };

    return (
        <>
            <Tooltip title="Share">
                <Fab
                    component="div"
                    onClick={handleToggle}
                    size="medium"
                    variant="circular"
                    color="secondary"
                    sx={{
                        borderRadius: 0,
                        borderTopLeftRadius: '50%',
                        borderBottomLeftRadius: '50%',
                        borderTopRightRadius: '50%',
                        borderBottomRightRadius: '4px',
                        top: '25%',
                        position: 'fixed',
                        right: 10,
                        zIndex: theme.zIndex.speedDial
                    }}
                >
                    <AnimateButton type="rotate">
                        <IconButton color="inherit" size="large" disableRipple>
                            <IconShare />
                        </IconButton>
                    </AnimateButton>
                </Fab>
            </Tooltip>

            <Drawer
                anchor="right"
                onClose={handleToggle}
                open={open}
                PaperProps={{
                    sx: {
                        width: 280
                    }
                }}
            >
                <PerfectScrollbar component="div">
                    <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                        <Grid item xs={12}>
                            <MainCard title="Share">
                                <div>
                                    <b>Copy Page URL</b>
                                    <CardSecondaryAction title="Copy URL" onClick={handleCopyPageUrl} icon={<IconCopy />} />
                                    {copied ? <p>Copied</p> : <p> </p>}
                                </div>
                                <div>
                                    <b>GitHub URL</b>
                                    <CardSecondaryAction
                                        title="Go to GitHub"
                                        link="https://github.com/abdulrahimiliasu/unideb-compsci-bsc-state-exams.git"
                                        icon={<IconBrandGithub />}
                                    />
                                </div>
                            </MainCard>
                        </Grid>
                    </Grid>
                </PerfectScrollbar>
            </Drawer>
        </>
    );
};

export default ShareButton;
