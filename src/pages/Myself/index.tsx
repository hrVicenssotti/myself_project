import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useStyles } from './styles';
import { ButtomToTop } from '../../components';
import { NavBar } from './components';
import myselfImage from '../../assets/images/myself.jpg';

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
                    <Box>
                        <Box>
                            <h1>Horlan Vicenssotti</h1>
                        </Box>
                        <Box>
                            <img className={classes.myselfImage} src={myselfImage} alt={'Minha imagem'} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <ButtomToTop scrollOffTop={offTopScroll} />
        </Box>
    );
};
