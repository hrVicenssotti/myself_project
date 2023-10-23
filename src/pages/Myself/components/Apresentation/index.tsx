import { Box, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Map } from '@mui/icons-material';
import React from 'react';

import { IconGithub, IconLinkedin } from '../../../../components';
import myselfImage from '../../../../assets/images/myself.jpg';
import { useStyles } from './styles';

const ApresentationRoot: React.FC = () => {
    const { t } = useTranslation(['myself/apresentation', 'global']);
    const classes = useStyles();
    const urlMap = 'https://maps.app.goo.gl/zNcNqesXwb8EcAKs6';
    const urlGithub = 'https://github.com/hrVicenssotti';
    const urlLinkedin = 'https://www.linkedin.com/in/hrvicenssotti';

    return (
        <Box className={classes.start}>
            <Box>
                <Box>
                    <Typography variant={'body1'}>{t('hello_word')},</Typography>
                    <Typography variant={'h1'}>
                        {t('i_m')} <span translate={'no'}>{t('my_name', { ns: 'global' })}</span> 👋,
                    </Typography>
                    <Typography variant={'body1'}>{t('apresentation')}</Typography>
                </Box>
                <Box className={classes.mapLink}>
                    <Link target={'_blank'} href={urlMap}>
                        <Map />
                        <Typography variant={'body1'}>{t('country')}</Typography>
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

export const Apresentation = React.memo(ApresentationRoot);
