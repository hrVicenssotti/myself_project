import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React from 'react';

import { useStyles } from './style';
import { LinkSkill } from './LinkSkill';
import {
    IconBootstrap,
    IconCss,
    IconDocker,
    IconExpressJS,
    IconGit,
    IconHtml,
    IconJavascript,
    IconLinux,
    IconMui,
    IconMysql,
    IconNestJS,
    IconNextJS,
    IconNodeJS,
    IconPhp,
    IconPostgres,
    IconReactJS,
    IconSymfony,
    IconTypescript,
    IconViteJS,
} from '../../../../components';

const SkillsRoot: React.FC = () => {
    const { t } = useTranslation(['myself/skills', 'global']);
    const classes = useStyles();

    return (
        <Box className={classes.start}>
            <Typography variant={'h2'}>{t('title')}</Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        maxWidth: '900px',
                    }}
                >
                    <LinkSkill
                        iconLink={<IconNodeJS />}
                        link={'https://nodejs.org/'}
                        placeholder={'NodeJS'}
                    />
                    <LinkSkill
                        iconLink={<IconReactJS />}
                        link={'https://react.dev/'}
                        placeholder={'ReactJS'}
                    />
                    <LinkSkill
                        iconLink={<IconExpressJS />}
                        link={'https://expressjs.com/'}
                        placeholder={'ExpresJS'}
                    />
                    <LinkSkill
                        iconLink={<IconNestJS />}
                        link={'https://nestjs.com/'}
                        placeholder={'NestJS'}
                    />
                    <LinkSkill
                        iconLink={<IconNextJS />}
                        link={'https://nextjs.org/'}
                        placeholder={'NextJS'}
                    />
                    <LinkSkill
                        iconLink={<IconSymfony />}
                        link={'https://symfony.com/'}
                        placeholder={'Symfony'}
                    />
                    <LinkSkill
                        iconLink={<IconMui />}
                        link={'https://mui.com/'}
                        placeholder={'Material UI'}
                    />
                    <LinkSkill
                        iconLink={<IconBootstrap />}
                        link={'https://getbootstrap.com/'}
                        placeholder={'Bootstrap'}
                    />
                    <LinkSkill
                        iconLink={<IconViteJS />}
                        link={'https://vitejs.dev/'}
                        placeholder={'ViteJS'}
                    />
                    <LinkSkill
                        iconLink={<IconDocker />}
                        link={'https://docker.com/'}
                        placeholder={'Docker'}
                    />
                    <LinkSkill
                        iconLink={<IconPhp />}
                        link={'https://www.php.net/'}
                        placeholder={'PHP'}
                    />
                    <LinkSkill
                        iconLink={<IconJavascript />}
                        link={'https://developer.mozilla.org/docs/Web/JavaScript'}
                        placeholder={'Javascript'}
                    />
                    <LinkSkill
                        iconLink={<IconTypescript />}
                        link={'https://www.typescriptlang.org/'}
                        placeholder={'Typescript'}
                    />
                    <LinkSkill
                        iconLink={<IconCss />}
                        link={'https://developer.mozilla.org/docs/Web/css'}
                        placeholder={'CSS'}
                    />
                    <LinkSkill
                        iconLink={<IconHtml />}
                        link={'https://developer.mozilla.org/docs/Web/html'}
                        placeholder={'HTML'}
                    />
                    <LinkSkill
                        iconLink={<IconMysql />}
                        link={'https://www.mysql.com/'}
                        placeholder={'MYSQL'}
                    />
                    <LinkSkill
                        iconLink={<IconPostgres />}
                        link={'https://www.postgresql.org/'}
                        placeholder={'PostgreSQL'}
                    />
                    <LinkSkill
                        iconLink={<IconLinux />}
                        link={'https://www.linux.org/'}
                        placeholder={'GNU/Linux'}
                    />
                    <LinkSkill
                        iconLink={<IconGit />}
                        link={'https://git-scm.com/'}
                        placeholder={'Git'}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export const Skills = React.memo(SkillsRoot);
