import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React from 'react';

import { useStyles } from './style';
import { skills } from './skills';
import { LinkSkill } from './LinkSkill';

const SkillsRoot: React.FC = () => {
    const { t } = useTranslation(['myself/skills', 'global']);
    const classes = useStyles();

    return (
        <Box className={classes.start}>
            <Typography variant={'h2'}>{t('title')}</Typography>
            <Box className={classes.fullCenter}>
                <Box className={classes.skillsBlock}>
                    {skills.map((skill) => (
                        <LinkSkill
                            iconLink={skill.icon}
                            placeholder={skill.placeholder}
                            link={skill.link}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export const Skills = React.memo(SkillsRoot);
