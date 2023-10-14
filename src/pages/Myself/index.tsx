import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useStyles } from './styles';
import { ButtomToTop } from '../../components';
import { NavBar } from './components';

export const Myself: React.FC = () => {
    const classes = useStyles();

    const [offTopScroll, setOffTopScroll] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 70) {
                setOffTopScroll(true);
            } else {
                setOffTopScroll(false);
            }
        });
    }, [classes]);

    return (
        <Box className={classes.appContainer}>
            <NavBar scrollOffTop={offTopScroll} />
            <Box component={'main'} className={classes.main}>
                <span>Welcome, how are you?</span>
            </Box>
            <ButtomToTop scrollOffTop={offTopScroll} />
        </Box>
    );
};
