import { Box, Link, Typography } from '@mui/material';
import React, { useState } from 'react';

import { useStyles } from './style';

export interface LinkSkillProps {
    link?: string;
    iconLink: React.ReactNode;
    placeholder: string;
}

export const LinkSkill: React.FC<LinkSkillProps> = ({ iconLink, link, placeholder }) => {
    const [placeholderOpacity, setPlaceholderOpacity] = useState<number>(0);
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Link
                href={link}
                target={'_blank'}
                onMouseEnter={() => {
                    setPlaceholderOpacity(1);
                }}
                onMouseLeave={() => {
                    setPlaceholderOpacity(0);
                }}
            >
                {iconLink}
            </Link>
            <Typography sx={{ opacity: placeholderOpacity }} variant={'caption'}>
                {placeholder}
            </Typography>
        </Box>
    );
};
