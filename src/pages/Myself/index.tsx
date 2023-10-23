import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from './styles';
import { ButtomToTop } from '../../components';
import { Apresentation, NavBar } from './components';

export const Myself: React.FC = () => {
    const { t } = useTranslation('navigation_anchor');
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
                <Box id={t('home.anchor')} className={`${classes.container} ${classes.diffAnchor}`}>
                    <Apresentation />
                </Box>
            </Box>
            <ButtomToTop scrollOffTop={offTopScroll} />
        </Box>
    );
};
