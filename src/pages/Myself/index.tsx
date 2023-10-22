import { Box, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { useStyles } from './styles';
import { ButtomToTop, IconGithub, IconLinkedin } from '../../components';
import { NavBar } from './components';
import myselfImage from '../../assets/images/myself.jpg';
import { Map } from '@mui/icons-material';

export const Myself: React.FC = () => {
    const classes = useStyles();

    const [offTopScroll, setOffTopScroll] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setOffTopScroll(true);
            } else {
                setOffTopScroll(false);
            }
        });
    }, [classes]);

    return (
        <Box className={classes.appContainer}>
            <NavBar scrollOffTop={offTopScroll} />
            <Box component={'main'} className={classes.main}>
                <Box id={'home'} className={`${classes.container} ${classes.diffAnchor}`}>
                    <Box className={classes.start}>
                        <Box>
                            <Box>
                                <Typography variant={'body1'}>Olá mundo,</Typography>
                                <Typography variant={'h1'}>Eu sou Horlan Vicenssotti 👋,</Typography>
                                <Typography variant={'body1'}>
                                    Sou desenvolvedor FullStack com experiencia em aplicações WEB usando ReactJS,
                                    NodeJS, PHP e Typescript. Com habilidade em desenvolver aplicações de fácil uso,
                                    responsivo e escalável. Com responsabilidade para entregar códigos de alta
                                    qualidade, fácil manutenção e seguindo os padrões de mercado.
                                </Typography>
                            </Box>
                            <Box sx={{ margin: '1.25rem 0' }}>
                                <Link
                                    target={'_blank'}
                                    href={'https://maps.app.goo.gl/zNcNqesXwb8EcAKs6'}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        color: 'inherit',
                                        textDecoration: 'inherit',
                                    }}
                                >
                                    <Map />
                                    <Typography variant={'body1'}>Brasil</Typography>
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '1rem' }}>
                                <Link target={'_blank'} href={'https://github.com/hrVicenssotti'}>
                                    <IconGithub sx={{ fontSize: '2.5rem' }} />
                                </Link>
                                <Link target={'_blank'} href={'https://www.linkedin.com/in/hrvicenssotti/'}>
                                    <IconLinkedin sx={{ fontSize: '2.5rem' }} />
                                </Link>
                            </Box>
                        </Box>
                        <Box sx={{ justifySelf: 'center' }}>
                            <img className={classes.myselfImage} src={myselfImage} alt={'Minha imagem'} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <ButtomToTop scrollOffTop={offTopScroll} />
        </Box>
    );
};
