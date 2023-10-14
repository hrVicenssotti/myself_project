import { Code } from '@mui/icons-material';
import { AppBar, AppBarProps, Box, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to={'#home'}>Inicio</Link>
                    <Link to={'#skills'}>Habilidades</Link>
                    <Link to={'#projects'}>Projetos</Link>
                    <Link to={'#about'}>Sobre</Link>
                    <Link to={'#contact'}>Contato</Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export const NavBar = React.memo(NabBarRoot);
