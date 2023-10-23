import { Box, Link, Typography } from '@mui/material';
import { Map } from '@mui/icons-material';
import React from 'react';

import { IconGithub, IconLinkedin } from '../../../../components';
import myselfImage from '../../../../assets/images/myself.jpg';
import { useStyles } from './styles';

const AboutRoot: React.FC = () => {
    const classes = useStyles();
    const urlMap = 'https://maps.app.goo.gl/zNcNqesXwb8EcAKs6';
    const urlGithub = 'https://github.com/hrVicenssotti';
    const urlLinkedin = 'https://www.linkedin.com/in/hrvicenssotti';

    return (
        <Box className={classes.start}>
            <Box>
                <Box>
                    <Typography variant={'body1'}>Olá mundo,</Typography>
                    <Typography variant={'h1'}>
                        Eu sou <span translate={'no'}>Horlan Vicenssotti</span> 👋,
                    </Typography>
                    <Typography variant={'body1'}>
                        Sou desenvolvedor FullStack com experiencia em aplicações WEB usando ReactJS, NodeJS, PHP e
                        Typescript. Com habilidade em desenvolver aplicações de fácil uso, responsivo e escalável. Com
                        responsabilidade para entregar códigos de alta qualidade, fácil manutenção e seguindo os padrões
                        de mercado.
                    </Typography>
                </Box>
                <Box className={classes.mapLink}>
                    <Link target={'_blank'} href={urlMap}>
                        <Map />
                        <Typography variant={'body1'}>Brasil</Typography>
                    </Link>
                </Box>
                <Box className={classes.socialMedia}>
                    <Link target={'_blank'} href={urlGithub}>
                        <IconGithub sx={{ fontSize: '2.5rem' }} />
                    </Link>
                    <Link target={'_blank'} href={urlLinkedin}>
                        <IconLinkedin sx={{ fontSize: '2.5rem' }} />
                    </Link>
                </Box>
            </Box>
            <Box sx={{ justifySelf: 'center' }}>
                <img className={classes.myselfImage} src={myselfImage} alt={'Minha imagem'} />
            </Box>
        </Box>
    );
};

export const About = React.memo(AboutRoot);
