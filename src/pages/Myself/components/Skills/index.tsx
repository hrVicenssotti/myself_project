import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React from 'react';

const SkillsRoot: React.FC = () => {
    const { t } = useTranslation(['myself/skills', 'global']);

    return (
        <Box>
            <Typography variant={'h2'}>{t('title')}</Typography>
        </Box>
    );
};

export const Skills = React.memo(SkillsRoot);
