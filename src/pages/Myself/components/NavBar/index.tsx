import { AppBar, AppBarProps, Box, Link, Toolbar } from '@mui/material';
import { Code } from '@mui/icons-material';
import React from 'react';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';

export interface NabBarProps extends AppBarProps {
    scrollOffTop: boolean;
}

const NabBarRoot: React.FC<NabBarProps> = ({ scrollOffTop, ...props }) => {
    const { t } = useTranslation('myself/navigation_anchor');
    const classes = useStyles();

    return (
        <AppBar className={`${classes.navBar} ${scrollOffTop ? classes.navBarOffScroll : ''}`} {...props}>
            <Toolbar>
                <Box>
                    <Code />
                </Box>
                <Box className={classes.navLinks}>
                    <Link href={`#${t('about.anchor')}`}>{t('about.label')}</Link>
                    <Link href={`#${t('skills.anchor')}`}>{t('skills.label')}</Link>
                    <Link href={`#${t('projects.anchor')}`}>{t('projects.label')}</Link>
                    <Link href={`#${t('contact.anchor')}`}>{t('contact.label')}</Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export const NavBar = React.memo(NabBarRoot);
