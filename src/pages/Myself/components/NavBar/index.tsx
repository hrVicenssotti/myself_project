import { AppBar, AppBarProps, Box, Link, Toolbar } from '@mui/material';
import { Code } from '@mui/icons-material';
import React from 'react';
import { useStyles } from './styles';

export interface NabBarProps extends AppBarProps {
    scrollOffTop: boolean;
}

const NabBarRoot: React.FC<NabBarProps> = ({ scrollOffTop, ...props }) => {
    const classes = useStyles();

    return (
        <AppBar className={`${classes.navBar} ${scrollOffTop ? classes.navBarOffScroll : ''}`} {...props}>
            <Toolbar>
                <Box>
                    <Code />
                </Box>
                <Box className={classes.navLinks}>
                    <Link href={'#about'}>Sobre</Link>
                    <Link href={'#skills'}>Habilidades</Link>
                    <Link href={'#projects'}>Projetos</Link>
                    <Link href={'#contact'}>Contato</Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export const NavBar = React.memo(NabBarRoot);
