import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React from 'react';

import { useStyles } from './style';

const ContactRoot: React.FC = () => {
    const { t } = useTranslation(['myself/contact', 'global']);
    const classes = useStyles();

    return (
        <Box className={classes.start}>
            <Typography variant={'h2'}>{t('title')}</Typography>
            <Box className={classes.fullCenter}></Box>
        </Box>
    );
};

export const Contact = React.memo(ContactRoot);
