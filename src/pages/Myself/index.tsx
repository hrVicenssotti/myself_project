import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useStyles } from './styles';
import { ButtomToTop } from '../../components';
import { About, NavBar } from './components';

export const Myself: React.FC = () => {
    const classes = useStyles();

    const [offTopScroll, setOffTopScroll] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
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
                <Box id={'home'} className={`${classes.container} ${classes.diffAnchor}`}>
                    <About />
                </Box>
            </Box>
            <ButtomToTop scrollOffTop={offTopScroll} />
        </Box>
    );
};
