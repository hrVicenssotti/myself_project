import { AppBar, Box, Toolbar } from '@mui/material';
import { Code } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import React from 'react';

import { useStyles } from './styles';

export const Myself: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.appContainer}>
            <AppBar className={classes.navBar}>
                <Toolbar>
                    <Box>
                        <Code sx={{ fontSize: '2.5rem' }} />
                    </Box>
                    <Box>
                        <Link to={'#sobre'}>Sobre</Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
