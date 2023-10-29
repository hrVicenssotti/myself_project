import { Box, Link, Typography } from '@mui/material';
import React from 'react';

import { useStyles } from './styles';

export const NotFound: React.FC = () => {
    const classes = useStyles();

    return (
        <Box className={classes.appContainer}>
            <Link href={'/'}>
                <Typography fontSize={'3rem'} align={'center'} variant={'h1'}>
                    😥 Not found
                </Typography>
                <Typography fontSize={'1rem'} align={'center'} variant={'body1'} padding={'0.5rem'}>
                    Click aqui para ir para a página inicial
                </Typography>
            </Link>
        </Box>
    );
};
