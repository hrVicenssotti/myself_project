import { Box, Link, Typography } from '@mui/material';
import React from 'react';

import { useStyles } from './styles';
import myselfImage from '../../assets/images/myself.jpg';

export const Home: React.FC = () => {
    const classes = useStyles();
    const myselfName = 'Horlan Vicenssotti';

    return (
        <Box className={classes.appContainer}>
            <img className={classes.myselfImage} src={myselfImage} alt={'Minha imagem'} />
            <Link href={'/myself'}>
                <Typography fontSize={'3rem'} align={'center'} variant={'h1'}>
                    {myselfName}
                </Typography>
                <Typography fontSize={'1rem'} align={'center'} variant={'body1'} padding={'0.5rem'}>
                    Click aqui para saber sobre mim
                </Typography>
            </Link>
        </Box>
    );
};
