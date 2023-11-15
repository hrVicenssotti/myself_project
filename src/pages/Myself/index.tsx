import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from './styles';
import { ButtomToTop } from '../../components';
import { Apresentation, Contact, NavBar, Projects, Skills } from './components';

export const Myself: React.FC = () => {
    const { t } = useTranslation('myself/navigation_anchor');
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
                <Box id={t('skills.anchor')} className={`${classes.container} ${classes.diffAnchor}`}>
                    <Skills />
                </Box>
                <Box id={t('projects.anchor')} className={`${classes.container} ${classes.diffAnchor}`}>
                    <Projects />
                </Box>
                <Box id={t('contact.anchor')} className={`${classes.container} ${classes.diffAnchor}`}>
                    <Contact />
                </Box>
            </Box>
            <ButtomToTop scrollOffTop={offTopScroll} />
        </Box>
    );
};
