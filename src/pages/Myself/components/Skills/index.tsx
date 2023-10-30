import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React from 'react';

import { useStyles } from './style';

const SkillsRoot: React.FC = () => {
    const { t } = useTranslation(['myself/skills', 'global']);
    const classes = useStyles();

    return (
        <Box className={classes.start}>
            <Typography variant={'h2'}>{t('title')}</Typography>
            <Box sx={{ fontSize: '4rem' }}></Box>
        </Box>
    );
};

export const Skills = React.memo(SkillsRoot);
